console.log('Injecting hook scripts for');
const s1 = document.createElement("script");
s1.src = chrome.runtime.getURL(`/pcksig.js`);
document.documentElement.appendChild(s1);
