document.getElementById('run').onclick = function(element) {
	chrome.tabs.executeScript(null, {file: 'changeDom.js'});
}
