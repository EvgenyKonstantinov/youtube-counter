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
let showStat = () => {
	client.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${idChannel}&key=AIzaSyA2CVFfCLdJu1y9pUfQJ7Osjexm5GAsQyo`, (response) => {
		console.log(JSON.parse(response).items[0].statistics.subscriberCount);
	});
}






