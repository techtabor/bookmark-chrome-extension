chrome.browserAction.onClicked.addListener(function(tab) {
    const url = 'http://techtabor.agondolkodasorome.hu';
    chrome.tabs.create({ url: url });
});
