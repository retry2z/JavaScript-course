function createArticle() {
    let titleElement = document.getElementById("createTitle");
    let contentElement = document.getElementById("createContent");
    let articalElement = document.getElementById("articles");

    if (titleElement.value && contentElement.value) {
        articalElement.innerHTML +=
            `<article><h3>${titleElement.value}</h3><p>${contentElement.value}</p></article>`;
        titleElement.value = null;
        contentElement.value = null;
    }
}



