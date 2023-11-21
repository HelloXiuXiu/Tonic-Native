import Tonic from '@socketsupply/tonic'

class TonicSwitch extends Tonic {
  constructor() {
    super()
    this.state.active = (this.props.active === 'true' || this.props.active === true)
    // console.log(this.state.active) // false 
  }

  connected () {
    this.state.active = (this.props.active === 'true')
    this.state.active === true && this.classList.add('active')
    // console.log(this.state.active) // true
    this.reRender()
  }

  get value () {
    return this.state.active
  }

  set value (v) {
    this.state.active = Boolean(v)
  }

  click(e) {
    const el = Tonic.match(e.target, '[data-event="toggle"]')
    if (!el) return

    this.state.active = !this.state.active
    this.classList.toggle('active')
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
        width: 100%;
        background-color: var(--tonic-grey);
      }

      tonic-switch.active .tonic-switch-wrapper .tonic-switch-base {
        background-color: var(--tonic-accent);
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
        transform: translateX(-22px);
        transition: all .2s ease-in-out;
      }

      tonic-switch.active .tonic-switch-wrapper .tonic-switch-handle {
        transform: translateX(-2px);
      }

      tonic-switch .tonic-switch-wrapper[on='false'] .tonic-switch-handle {
        transform: translateX(-22px);
      }
    `
  }

  render () {
    return this.html`
      <div data-event="toggle" class="tonic-switch-wrapper">
        <div class="tonic-switch-handle"></div>
        <div class="tonic-switch-base"></div>
      </div>
    `
  }
}

Tonic.add(TonicSwitch)
