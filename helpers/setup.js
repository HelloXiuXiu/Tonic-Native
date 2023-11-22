//
// TODO:
// write a function that will be checking platform
// and device theme
// 

function setDefaults(theme, platform) {
  document.body.setAttribute('platform', platform)
  document.body.setAttribute('theme', theme)
}

// android/linux
// ios/macos
// windows

//document.addEventListener("DOMContentLoaded", () => setDefaults('light', 'android/linux'))
document.addEventListener("DOMContentLoaded", () => setDefaults('light', 'ios/macos'))
//document.addEventListener("DOMContentLoaded", () => setDefaults('light', 'windows'))