import Tonic from '@socketsupply/tonic'

class TonicDevControls extends Tonic {
  connected () {
    this.setActiveButtons()
  }

  setActiveButtons () {
    document.addEventListener("DOMContentLoaded", () => {
      let platform
      let theme

      platform = document.body.getAttribute('platform')
      theme = document.body.getAttribute('theme')

      let platformEvent = '[data-event="' + platform.toLowerCase() + '"]'
      let themeEvent = '[data-event="' + theme.toLowerCase() + '"]'

      document.querySelector(platformEvent).classList.add('active')
      document.querySelector(themeEvent).classList.add('active')
    })
  }

  click (e) {
    let trig = e.target.closest('[data-event]')
    if (!trig) return

    let parent = trig.parentElement
    let attr = parent.classList.value.split('controls-').join('')

    document.body.setAttribute(attr, trig.dataset.event)

    Array.from(parent.children).forEach(el => {
      el.classList.remove('active')
    })
    trig.classList.add('active')
  }

  static stylesheet () {
    return `
      .controls {
        display: flex;
        gap: 40px;
        margin-bottom: 80px;
      }

      .controls h3 {
        color: var(--tonic-grey);
        font-size: 12px;
        text-transform: uppercase;
        margin: 8px 0;
      }

      .controls button {
        opacity: 0.4;
        cursor: pointer;
      }

      .controls button.active,
      .controls button:hover {
        opacity: 1;
      }
    `
  }

  render () {
    return this.html`
      <div class="controls">
        <div class="controls-platform">
          <h3>Platform</h3>
          <button data-event="android/linux">Android/Linux</button>
          <button data-event="ios/macos">iOS/macOS</button>
          <button data-event="windows">Windows</button>
        </div>
        <div class="controls-theme">
          <h3>Theme</h3>
          <button data-event="light">Light</button>
          <button data-event="dark">Dark</button>
        </div>
      </div>
    `
  }
}

Tonic.add(TonicDevControls)
