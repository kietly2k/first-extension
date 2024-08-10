// This file used to inject resouces to browser tab. Keep in mind that this can only manipulate DOM and not able to interact with JS
// Listen to message send by chrome.tabs.sendMessage API
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    $("body").prepend(
        `<img src="${request.url}" id="${request.imageDivId}" class="slide-image" /> `
    );
    $("head").prepend(
        `<style>
          .slide-image {
              height: auto;
              width: 100vw;
          }
        </style>`
    );
    $(`#${request.imageDivId}`).click(function() {
        $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
    });
    sendResponse({ fromcontent: "This message is from content.js" });
});