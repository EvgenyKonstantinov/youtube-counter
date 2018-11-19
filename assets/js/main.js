"use strict";

var HttpClient = function HttpClient() {
	this.get = function (aUrl, aCallback) {
		var anHttpRequest = new XMLHttpRequest();
		anHttpRequest.onreadystatechange = function () {
			if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) aCallback(anHttpRequest.responseText);
		};

		anHttpRequest.open("GET", aUrl, true);
		anHttpRequest.send(null);
	};
};

var client = new HttpClient();
var idChannel = 'UCVswRUcKC-M35RzgPRv8qUg';
var showStat = function showStat() {
	client.get("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + idChannel + "&key=AIzaSyA2CVFfCLdJu1y9pUfQJ7Osjexm5GAsQyo", function (response) {
		console.log(JSON.parse(response).items[0].statistics.subscriberCount);
	});
};