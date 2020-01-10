var xhr = new XMLHttpRequest();

xhr.onload = function() {
	document.documentElement.innerHTML = this.responseXML.documentElement.outerHTML;
	document.documentElement.style.overflow = "auto";
	document.documentElement.style.position = "static";
}

xhr.open('GET', window.location.href);
xhr.responseType = 'document';
xhr.send();