import Tonic from '@socketsupply/tonic'

// API 
// 
// states:
// ON/OFF
// .switch - to get current state (true/false)
// .switch(true) or .switch('true') - to set current state 
// valye type - booling/srting
//
// props: 
// ACTIVE (true/false) - state for the first render
// DISABLE (true/false) 

class TonicSwitch extends Tonic {
  constructor() {
    super()
    this.state.active = (this.props.active === 'true' || this.props.active === true)
  }

  connected () {
    this.state.active = (this.props.active === 'true' || this.props.active === true)
    this.changeView()
    this.reRender()
  }

  get switch () {
    return this.state.active
  }

  set switch (v) {
    this.state.active = Boolean(v)
    this.changeView()
  }

  click (e) {
    const el = Tonic.match(e.target, '[data-event="toggle"]')
    if (!el) return

    this.state.active = !this.state.active
    this.classList.toggle('active')
  }

  changeView () {
    this.state.active === true
      ? this.classList.add('active')
      : this.classList.remove('active')
  }

  static stylesheet () {
    return `
      
    `
  }

  render () {
    return this.html`
      <div data-event="toggle" class="tonic-switch-wrapper">
        <div class="tonic-switch-base"></div>
        <div class="tonic-switch-handle"></div>
      </div>
    `
  }
}

Tonic.add(TonicSwitch)
