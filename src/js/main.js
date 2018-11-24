var HttpClient = function () {
	this.get = function (aUrl, aCallback) {
		let anHttpRequest = new XMLHttpRequest();
		anHttpRequest.onreadystatechange = function () {
			if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
				aCallback(anHttpRequest.responseText);
		}
		anHttpRequest.open("GET", aUrl, true);
		anHttpRequest.send(null);
	}
}

let client = new HttpClient();
let idChannel = 'UCVswRUcKC-M35RzgPRv8qUg';
let part = 'statistics, brandingSettings'

let titleChannel = document.querySelector('#title-channel');
let descriptionChannel = document.querySelector('#description-channel');
let imageChannel = document.querySelector('#image-channel');
let countChannel = document.querySelector('#count');

let form = document.querySelector('#form');

let showStat = (id) => {
	client.get(`https://www.googleapis.com/youtube/v3/channels?part=${part}&id=${id}&key=AIzaSyA2CVFfCLdJu1y9pUfQJ7Osjexm5GAsQyo`, (response) => {
		let info = JSON.parse(response).items[0];
		console.log(info);
		titleChannel.innerText = info.brandingSettings.channel.title;
		descriptionChannel.innerText = info.brandingSettings.channel.description;
		countChannel.innerText = info.statistics.subscriberCount;
		imageChannel.src = info.brandingSettings.image.bannerImageUrl;
	});
};


let searchChannel = (nameChannel) => {
	client.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=1&q=${nameChannel}&key=AIzaSyA2CVFfCLdJu1y9pUfQJ7Osjexm5GAsQyo`, (response) => {
		let info = JSON.parse(response).items[0].snippet.channelId;
		console.log(info);
		showStat(info);
	});
};

form.addEventListener('submit', (event) => {
	event.preventDefault();
	let nameChannel = document.querySelector('#name-channel').value;
	console.log(`Пользователь ввел: ${nameChannel}`);

	searchChannel(nameChannel);

});

showStat(idChannel);