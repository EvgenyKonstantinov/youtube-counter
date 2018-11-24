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

var titleChannel = document.querySelector('#title-channel');
var descriptionChannel = document.querySelector('#description-channel');
var imageChannel = document.querySelector('#image-channel');
var countChannel = document.querySelector('#count');

var form = document.querySelector('#form');

var showStat = function showStat(id) {
	client.get('https://www.googleapis.com/youtube/v3/channels?part=' + part + '&id=' + id + '&key=AIzaSyA2CVFfCLdJu1y9pUfQJ7Osjexm5GAsQyo', function (response) {
		var info = JSON.parse(response).items[0];
		console.log(info);
		titleChannel.innerText = info.brandingSettings.channel.title;
		descriptionChannel.innerText = info.brandingSettings.channel.description;
		countChannel.innerText = info.statistics.subscriberCount;
		imageChannel.src = info.brandingSettings.image.bannerImageUrl;
	});
};

var searchChannel = function searchChannel(nameChannel) {
	client.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=1&q=' + nameChannel + '&key=AIzaSyA2CVFfCLdJu1y9pUfQJ7Osjexm5GAsQyo', function (response) {
		var info = JSON.parse(response).items[0].snippet.channelId;
		console.log(info);
		showStat(info);
	});
};

form.addEventListener('submit', function (event) {
	event.preventDefault();
	var nameChannel = document.querySelector('#name-channel').value;
	console.log('\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u0432\u0435\u043B: ' + nameChannel);

	searchChannel(nameChannel);
});

showStat(idChannel);