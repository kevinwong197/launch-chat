(function() {
  let script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', chrome.extension.getURL('payload.js'));
  document.getElementsByTagName('body')[0].appendChild(script);
})();