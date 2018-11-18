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
let showStat = () => {
	client.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCWNQKepV4st7cQTpDdykYqw&key=AIzaSyA2CVFfCLdJu1y9pUfQJ7Osjexm5GAsQyo', (response) => {
		console.log(JSON.parse(response).items[0].statistics.subscriberCount);
	});
}






// // 1. Создаём новый объект XMLHttpRequest
// var xhr = new XMLHttpRequest();

// // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
// xhr.open('GET', 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCWNQKepV4st7cQTpDdykYqw&key=AIzaSyA2CVFfCLdJu1y9pUfQJ7Osjexm5GAsQyo', false);

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Если код ответа сервера не 200, то это ошибка
// if (xhr.status != 200) {
//   // обработать ошибку
//   console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
// } else {
// 	// вывести результат
// 	var subsCount = JSON.parse(xhr.responseText ).items[0].statistics.subscriberCount;
// 	document.querySelector('#count').innerText = subsCount;
//    // responseText -- текст ответа.
// }