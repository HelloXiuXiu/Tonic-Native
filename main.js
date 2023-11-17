import './style.css'
import'./counter.js'

import Tonic from '@socketsupply/tonic'

document.querySelector('#app').innerHTML = `
  <h2>Switch</h2>
  <tonic-switch id="tonic-switch"></tonic-switch>
`