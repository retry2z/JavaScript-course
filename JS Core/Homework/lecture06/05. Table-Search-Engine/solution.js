function solve() {
    let tableBody = document.getElementsByTagName("tbody");
    let searchInput = document.getElementById("searchField");
    let searchButton = document.getElementById("searchBtn");
    let selectedElements = document.getElementsByClassName('select');

    searchButton.addEventListener('click', function () {
        for (let c of selectedElements) {
            c.removeAttribute('class');
        }

        for (let i of tableBody[0].children) {
            if (searchInput.value) {
                if (i.textContent.includes(searchInput.value)) {
                    i.setAttribute('class', 'select');

                }
            }
        }
        searchInput.value = null;
    });
}