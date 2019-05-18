localStorage["on"] = true;

chrome.browserAction.onClicked.addListener(function(tab) {
  localStorage["toggled"] = !localStorage["toggled"];
  if(toggle){
    chrome.browserAction.setIcon({path: "/img/active.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"hide.js"});
  }
  else{
    chrome.browserAction.setIcon({path: "/img/inactive.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"hide.js)"});
  }
});
