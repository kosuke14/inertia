function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie(cname) {
	let cookie = getCookie(cname);
	if (cookie != "") {
		return 1;
	} else {
		return 0;
	}
}

function changelogOverlay() {
	document.getElementById("changelogOverlay").style.display = "block";
}

function disableChangelogOverlay() {
	document.getElementById("changelogOverlay").style.display = "none";
}

function settingsOverlay() {
	document.getElementById("settingsOverlay").style.display = "block";
}

function disableSettingsOverlay() {
	document.getElementById("settingsOverlay").style.display = "none";
}

function oldCss() {
	document.getElementById("css").href = "/css/boxy.css";
	let cookieSet = checkCookie("ui");
	if (cookieSet == 0) {
		setCookie("ui", "boxy", "10000");
	} else {
		document.cookie = "ui=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		setCookie("ui", "boxy", "10000");
	}
}

function newCss() {
	document.getElementById("css").href = "/css/sleek.css";
	let cookieSet = checkCookie("ui");
	if (cookieSet == 0) {
		setCookie("ui", "sleek", "10000");
	} else {
		document.cookie = "ui=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		setCookie("ui", "sleek", "10000");
	}
}

// Set UI
let cookieIsSet = checkCookie("ui");
if (cookieIsSet == 0) {
} else {
	let ui = getCookie("ui");
	if (ui == "sleek") {
		document.getElementById("css").href = "/css/sleek.css";
	} else if (ui == "boxy") {
		document.getElementById("css").href = "/css/boxy.css";
	}
}
