chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "prependUrl") {
        let newUrl = 'https://12ft.io/' + request.url;
        chrome.tabs.update(request.tabId, {url: newUrl});
    }
});
