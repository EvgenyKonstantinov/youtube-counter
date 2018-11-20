'use strict';

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
var part = 'statistics, brandingSettings';

var nameChannel = document.querySelector('#name-channel');
var descriptionChannel = document.querySelector('#description-channel');
var imageChannel = document.querySelector('#image-channel');
var countChannel = document.querySelector('#count');

var showStat = function showStat() {
	client.get('https://www.googleapis.com/youtube/v3/channels?part=' + part + '&id=' + idChannel + '&key=AIzaSyA2CVFfCLdJu1y9pUfQJ7Osjexm5GAsQyo', function (response) {
		var info = JSON.parse(response).items[0];
		console.log(info);
		nameChannel.innerText = info.brandingSettings.channel.title;
		descriptionChannel.innerText = info.brandingSettings.channel.description;
		countChannel.innerText = info.statistics.subscriberCount;
		imageChannel.src = info.brandingSettings.image.bannerImageUrl;
	});
};

showStat();