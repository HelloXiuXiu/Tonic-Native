import './style.css'
import'./components/TonicSwitch.js'

import Tonic from '@socketsupply/tonic'

document.querySelector('#app').innerHTML = `
  <h2>Switch</h2>
  <tonic-switch
    id="tonic-switch" 
    default="true"
    platform="ios"></tonic-switch>
`