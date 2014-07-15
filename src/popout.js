function addListener(obj, eventName, listener) {
	if(obj.addEventListener) {
		obj.addEventListener(eventName, listener, false);
	} else {
		obj.attachEvent('on' + eventName, listener);
	}
}

function handleLoad(e) {
	var linkMainButton = document.getElementById('linkmaintopopout');
	addListener(linkMainButton, 'click', linkMainWindow);
}

function linkMainWindow() {
	window.MainEmber = window.opener.Ember;
	window.opener.PopoutEmbers.push(Ember);
}

function cleanMainLinksToPopout() {
	window.MainEmber = null;
	window.opener.PopoutEmbers = [];
}

addListener(window, 'load', handleLoad);
addListener(window, 'beforeunload', cleanMainLinksToPopout);