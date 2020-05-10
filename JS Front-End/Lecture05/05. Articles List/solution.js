function createArticle() {
	const getTitle = document.getElementById('createTitle');
	const getContent = document.getElementById('createContent');
	const containdeArticles = document.getElementById('articles');

	if (getTitle.value && getContent.value) {
		const createTitle = document.createElement('h3');
		createTitle.innerHTML = getTitle.value;
		const createContent = document.createElement('p');
		createContent.innerHTML = getContent.value;
		const createArticle = document.createElement('article');

		containdeArticles
			.appendChild(createArticle)
			.appendChild(createTitle);

		createArticle.appendChild(createContent);

		getTitle.value = '';
		getContent.value = '';
	}
}