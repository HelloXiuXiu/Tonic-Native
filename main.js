import './style.css'
import'./components/TonicSwitch.js'

import Tonic from '@socketsupply/tonic'

//
// TODO: get process from socket:process (or navigator?)
// to check the platform
// 
// document.body.setAttribute('platform', process.platform)
//

function setDefaults(theme, platform) {
  document.body.setAttribute('platform', platform)
  document.body.setAttribute('theme', theme)

  let platformEvent = '[data-event="' + platform.toLowerCase() + '"]'
  let themeEvent = '[data-event="' + theme.toLowerCase() + '"]'
  document.querySelector(platformEvent).classList.add('active')
  document.querySelector(themeEvent).classList.add('active')
}

function handlePlatforms(e) {
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

document.querySelector('#app').innerHTML = `
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
  <h2>Switch</h2>
  <tonic-switch
    id="tonic-switch" 
    active="true"
    platform="android"></tonic-switch>
`

document.addEventListener("DOMContentLoaded", () => setDefaults('light', 'android/linux'))
document.querySelector('.controls').addEventListener('click', handlePlatforms)


