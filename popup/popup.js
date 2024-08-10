const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    // https://developer.chrome.com/docs/extensions/reference/api/tabs
    sendMessageId.onclick = function () {
        // Gets all tabs that have the specified properties, or all tabs if no properties are specified.
        // Query the active tab and in the current window
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    url: chrome.runtime.getURL("images/stars.jpeg"),
                    imageDivId: `${guidGenerator()}`,
                    tabId: tabs[0].id
                },
                function (response) {
                }
            );
            function guidGenerator() {
                const S4 = function () {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
            }
        });
    };
}