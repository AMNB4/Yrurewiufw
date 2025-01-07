console.log("[Lunaar]", "main.js");

function se() {
	try {
		const searchengine = localStorage.getItem("se");
		const seElement = document.getElementById("uv-search-engine");

		if (searchengine === "google") {
			seElement.value = "https://www.google.com/search?q=%s";
		} else if (searchengine === "bing") {
			seElement.value = "https://www.bing.com/search?q=%s";
		} else if (searchengine === "ddg") {
			seElement.value = "https://duckduckgo.com/?q=%s";
		} else if (searchengine === "brave") {
			seElement.value = "https://search.brave.com/search?q=%s";
		}
	} catch (err) {
		console.log("[Lunaar]", "Something bad happened", err);
	}
}

se();

const texts = [
	"Welcome to Vasion!",
	"Rip SIGMA BOY",
	"What's up brother!",
	"Do not insert text here",
	"They not like us",
	"1 + 1 = 11",
	"Rip Diddy",
	"MUSTARDDDD",
];

fetch("https://api.ipify.org?format=json")
	.then((response) => response.json())
	.then((data) => {
		const ipText = `${data.ip}`;
		texts.push(ipText);
	})
	.catch((error) => {
		console.error("Error fetching IP:", error);
	})
	.finally(() => {
		try {
			document.getElementById("rng").innerHTML = getRandomText();
		} catch (e) {
			console.warn("[Lunaar]", "Failed to set RNG Text.");
		}
	});

function getRandomText() {
	return texts[Math.floor(Math.random() * texts.length)];
}

if (navigator.userAgent.indexOf("Firefox") > 0) {
	alert("Firefox is not supported. Please use a Chromium-based browser.");
}

const websites = [
	"YouTube",
	"Facebook",
	"Reddit",
	"X",
	"TikTok",
	"Twitch",
	"my lost socks",
	"Wikipedia",
	"Instagram",
	"Wikipedia",
	"Amazon",
];

const siteurl = window.location.hostname;

$(document).ready(function () {
	if (window.location.hostname.includes("nativegames")) {
		$(".sitetext").text("native.");
		console.log("[Lunaar]", "Site: nativegames");
	}
});
const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
const uvaddress = document.getElementById("uv-address");

try {
	uvaddress.placeholder = `Try Searching "${randomWebsite}"`;
} catch (e) {
	console.warn("[Lunaar]", "Failed to set Dynamic placeholder");
}
