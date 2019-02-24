// Listen for browserAction to be cliked

chrome.browserAction.onClicked.addListener( tab => {
  chrome.tabs.executeScript(tab.ib, {
    file: 'inject/inject.js'
  })
});