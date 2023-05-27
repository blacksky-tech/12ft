document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#btn').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let tab = tabs[0];
            let url = tab.url;
            chrome.runtime.sendMessage({
                action: "prependUrl",
                url: url,
                tabId: tab.id
            });
        });
    });
});
