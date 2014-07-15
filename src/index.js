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
//	window.open('/popout.html', '_blank');
	window.open('http://localhost:8080/popout.html', '_blank', 'resizable,scrollbars,status');
}

addListener(window, 'load', handleLoad);