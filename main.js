chrome.runtime.sendMessage({requestUrl:"https://www.baidu.com"}, (response) => {
    console.log(response);
  });
  