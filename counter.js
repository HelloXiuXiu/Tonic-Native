import Tonic from '@socketsupply/tonic'

class TonicSwitch extends Tonic {
  static stylesheet () {
    return `
    tonic-switch .tonic-switch-wrapper {
      position: relative;
      width: 52px;
      height: 32px;
      cursor: pointer;
    }

    tonic-switch .tonic-switch-base {
      width: 100%;
      height: 100%;
      background-color: var(--tonic-accent);
      border-radius: 32px;
    }

    tonic-switch .tonic-switch-handle {
      position: absolute;
      top: 4px;
      right: 4px;
      width: 24px;
      height: 24px;
      background-color: var(--tonic-white);
      border-radius: 32px;
    }
    `
  }

  render () {
    return this.html`
      <div class="tonic-switch-wrapper">
        <div class="tonic-switch-handle"></div>
        <div class="tonic-switch-base"></div>
      </div>
    `
  }
}

Tonic.add(TonicSwitch)
