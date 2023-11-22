import Tonic from '@socketsupply/tonic'

import './style.css'
import './helpers/setup.js'

// components
import'./components/TonicSwitch.js'

// dev
import'./website/components/TonicDevControls.js'
import'./website/temp-styles.css'

document.querySelector('#app').innerHTML = `
  <tonic-dev-controls id="tonic-dev-controls"></tonic-dev-controls>
  <h2>Switch</h2>
  <tonic-switch
    id="tonic-switch" 
    active="false"
    platform="android"></tonic-switch>
`



