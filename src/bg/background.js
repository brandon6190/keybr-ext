// Listen for browserAction to be cliked

chrome.browserAction.onClicked.addListener( tab => {
  chrome.tabs.executeScript(tab.ib, {
    file: 'src/inject/inject.js'
  });
  console.log('Chrome extension was clicked!!');
});