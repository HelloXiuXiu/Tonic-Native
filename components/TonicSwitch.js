import Tonic from '@socketsupply/tonic'

class TonicSwitch extends Tonic {
  constructor() {
    super()
    this.state.on = (this.props.default === 'true')
    //
    // platform can be read form window.navigator
    // but also set manually as a prop
    // in case user want's to keep one style
    // across all os
    //
    // this.state.platform = this.props.platform || window.navigator.....
    this.state.platform = this.props.platform
  }

  click(e) {
    const el = Tonic.match(e.target, '[data-event="toggle"]')
    if (!el) return

    this.state.on = !this.state.on
    this.reRender()
  }

  static stylesheet () {
    return `
    tonic-switch .tonic-switch-wrapper {
      position: relative;
      width: 52px;
      height: 32px;
      cursor: pointer;
    }

    tonic-switch .tonic-switch-wrapper .tonic-switch-base {
      width: 100%;
      height: 100%;
      border-radius: 32px;
    }

    tonic-switch .tonic-switch-wrapper[on='true'] .tonic-switch-base {
      background-color: var(--tonic-accent);
    }

    tonic-switch .tonic-switch-wrapper[on='false'] .tonic-switch-base {
      width: 100%;
      background-color: var(--tonic-grey);
    }

    tonic-switch .tonic-switch-wrapper .tonic-switch-handle {
      position: absolute;
      top: 4px;
      left: 50%;
      width: 24px;
      height: 24px;
      background-color: var(--tonic-white);
      border-radius: 32px;
      transform: translateX(-50%);
      transition: all .6s ease-in-out;
    }

    tonic-switch .tonic-switch-wrapper[on='true'] .tonic-switch-handle {
      transform: translateX(-2px);
    }

    tonic-switch .tonic-switch-wrapper[on='false'] .tonic-switch-handle {
      transform: translateX(-22px);
    }
    `
  }

  render () {
    return this.html`
      <div data-event="toggle" class="tonic-switch-wrapper" on=${this.state.on.toString()}>
        <div class="tonic-switch-handle"></div>
        <div class="tonic-switch-base"></div>
      </div>
    `
  }
}

Tonic.add(TonicSwitch)
