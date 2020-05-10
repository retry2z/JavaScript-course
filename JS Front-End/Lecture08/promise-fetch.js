const url = 'https://phonebook-nakov.firebaseio.com/';
const dbName = 'phonebook/';
const type = '.json';



const handleSuccess = (data) => {
	console.log(data);
}

const handleError = (data) => {
	console.log(data);

}

const createRequest = (type, data) => {
	console.log(data);
	const request = {};
	request.method = type;
	request.headers = { 'Content-type': 'application/json' };

	if (data) {
		request.body = JSON.stringify(data);
	}
	return request;
}

function getRequest(url) {
	console.log(url);
	fetch(url)
		.then((response) => response.json())
		.then(handleSuccess)
		.catch(handleError);
}

function postRequest(url, data) {
	fetch(url, createRequest('post', data));
}

function deleteRequest(url) {
	fetch((url), createRequest('delete'));
}