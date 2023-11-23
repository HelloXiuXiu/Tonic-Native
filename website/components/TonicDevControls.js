import Tonic from '@socketsupply/tonic'

class TonicDevControls extends Tonic {
  connected () {
    this.setActiveButtons()
    this.setColorValues()
  }

  setActiveButtons () {
    document.addEventListener("DOMContentLoaded", () => {
      let platform = document.body.getAttribute('platform')
      let theme = document.body.getAttribute('theme')

      let platformEvent = '[data-event="' + platform.toLowerCase() + '"]'
      let themeEvent = '[data-event="' + theme.toLowerCase() + '"]'

      document.querySelector(platformEvent).classList.add('active')
      document.querySelector(themeEvent).classList.add('active')
    })
  }

  setColorValues () {
    document.addEventListener("DOMContentLoaded", () => {
      let styles = getComputedStyle(document.body)

      let accentColor = styles.getPropertyValue("--tonic-accent")
      let greyColor = styles.getPropertyValue("--tonic-grey")
      let greySecondaryColor = styles.getPropertyValue("--tonic-grey-secondary")
      let whiteColor = styles.getPropertyValue("--tonic-white")
      let blackColor = styles.getPropertyValue("--tonic-black")

      let accentInp = document.getElementById('var-accent')
      let greyInp = document.getElementById('var-grey')
      let greySecondaryInp = document.getElementById('var-grey-secondary')
      let whiteInp = document.getElementById('var-white')
      let blackInp = document.getElementById('var-black')

      accentInp.value = accentColor
      greyInp.value = greyColor
      greySecondaryInp.value = greySecondaryColor
      whiteInp.value = whiteColor
      blackInp.value = blackColor

      accentInp.addEventListener('input', (e) => {
        document.body.style.setProperty('--tonic-accent', e.target.value)
      })

      greyInp.addEventListener('input', (e) => {
        document.body.style.setProperty('--tonic-grey', e.target.value)
      })

      greySecondaryInp.addEventListener('input', (e) => {
        document.body.style.setProperty('--tonic-grey-secondary', e.target.value)
      })

      whiteInp.addEventListener('input', (e) => {
        document.body.style.setProperty('--tonic-white', e.target.value)
      })

      blackInp.addEventListener('input', (e) => {
        document.body.style.setProperty('--tonic-black', e.target.value)
      })
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

      .controls-color label {
        font-size: 10px;
        line-height: 1;
        vertical-align: top;
        color: var(--tonic-grey);
        text-transform: uppercase;
      }

      .controls-color input {
        margin-right: 16px;
        width: 27px;
        border-radius: 2px;
      }

      body[theme="dark"] .controls-color input {
       background-color: transtarent;
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
        <div class="controls-color">
          <h3>Theme colors <span>(light theme)</span></h3>
          <label for="var-accent">Accent</label>
          <input type="color" id="var-accent" name="var-accent">
          <label for="var-grey">Grey 1</label>
          <input type="color" id="var-grey" name="var-grey">
          <label for="var-grey-secondary">Grey 2</label>
          <input type="color" id="var-grey-secondary" name="var-grey-secondary">
          <label for="var-white">White</label>
          <input type="color" id="var-white" name="var-white">
          <label for="var-white">Black</label>
          <input type="color" id="var-black" name="var-black">
        </div>
      </div>
    `
  }
}

Tonic.add(TonicDevControls)
