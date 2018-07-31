let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: `
          function injectScript(file, node) {
              var th = document.getElementsByTagName(node)[0];
              var s = document.createElement('script');
              s.setAttribute('type', 'text/javascript');
              s.setAttribute('src', file);
              th.appendChild(s);
          }
          injectScript( chrome.extension.getURL('kay.js'), 'body');
        `});
  });
};