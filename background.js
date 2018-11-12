chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: "#3aa757" }, function() {
    console.log("The color is green.");
  });
  chrome.storage.sync.get(["color"], function(result) {
    // console.log("Value currently is " + result.color);
    console.log(`Color is ${result.color}`);
  });
});
