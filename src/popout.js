function addListener(obj, eventName, listener) {
	if(obj.addEventListener) {
		obj.addEventListener(eventName, listener, false);
	} else {
		obj.attachEvent('on' + eventName, listener);
	}
}

function handleLoad(e) {
	var linkToMainButton = document.getElementById('linktomain');
	addListener(linkToMainButton, 'click', linkToMainWindow);
}

function linkToMainWindow() {
	window.opener.Ember = Ember;
}

addListener(window, 'load', handleLoad);