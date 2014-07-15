function addListener(obj, eventName, listener) {
	if(obj.addEventListener) {
		obj.addEventListener(eventName, listener, false);
	} else {
		obj.attachEvent('on' + eventName, listener);
	}
}

function handleLoad(e) {
	var popoutButton = document.getElementById('popout');
	addListener(popoutButton, 'click', openPopout);
}

function openPopout() {
	window.open(document.location.href + 'popout.html', '_blank');
}

addListener(window, 'load', handleLoad);