//
// TODO:
// write a function that will be checking platform
// and device theme
// 

function setDefaults(theme, platform) {
  document.body.setAttribute('platform', platform)
  document.body.setAttribute('theme', theme)
}

document.addEventListener("DOMContentLoaded", () => setDefaults('light', 'android/linux'))
