window.chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (details.url) {
            if (details.url.indexOf("/webwatch/release/prod/3.11.30/main.js") > -1) {
                // console.log('intercept', details.url);
                return { redirectUrl: chrome.extension.getURL("peacocktv_main.js") };
            }
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]);
