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

	var cleanCloseButton = document.getElementById('cleanpauseandclose');
	addListener(cleanCloseButton, 'click', cleanPauseAndClose);
}

function linkMainWindow() {
	window.MainEmber = window.opener.Ember;

	window.opener.addToLinks(Ember);
}

function cleanPauseAndClose() {
	cleanMainLinksToPopout();

	setTimeout(function() {
		window.close()
	}, 10000);
}

function cleanMainLinksToPopout() {
	window.MainEmber = null;

	window.opener.cleanLinks();
}

addListener(window, 'load', handleLoad);
addListener(window, 'beforeunload', cleanMainLinksToPopout);