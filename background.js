chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!message.requestUrl) {
        return null;
    } else {
        $.get("https://www.baidu.com", (data, status)=>{
            sendResponse(status + "\n" + data);
        })
        return true;
    }
});

