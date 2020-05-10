const quote = document.getElementById('quote');
const author = document.getElementById('author');
const imgURL = document.getElementById('img-url');

const list = document.getElementById('quote-list');
const fav = document.getElementById('fav-list');

const addBtn = document.getElementById('add-quote');

addBtn.addEventListener('click', () => {
    // const quoteValue = "It always seems impossible until its done." || ;
    // const authorValue = 'Nelson Mandela';
    // const imgValue = 'https://wallpaperaccess.com/full/31214.jpg';

    const quoteValue = quote.value;
    const authorValue = author.value || '';
    const imgValue =  imgURL.value || '';

    if (quoteValue) {
        const makeNewQuote = newQuote(quoteValue, authorValue, imgValue);
        list.appendChild(makeNewQuote);
    }

    quote.value = '';
    author.value = '';
    imgURL.value = '';
});

function newQuote(text, author, img) {
    const newElement = document.createElement('div');
    const rowContainer = document.createElement('div');
    const imgSection = document.createElement('div');
    const textSection = document.createElement('div');

    const favButton = document.createElement('button');
    const textParagraph = document.createElement('p');
    const textAuthor = document.createElement('p');
    const imgElement = document.createElement('img');

    imgElement.setAttribute('src', img);
    imgElement.classList = 'img-thumbnail';

    textParagraph.textContent = text;
    textParagraph.classList = 'pt-2'

    textAuthor.textContent = author;
    textAuthor.className = 'font-italic text-muted';

    newElement.className = 'border m-2 rounded';
    rowContainer.className = 'row';

    imgSection.className = 'col-4 mr-1';
    textSection.className = 'col-7';

    favButton.className = 'btn bg-dark text-white mb-2';
    favButton.textContent = '★';
    favButton.addEventListener('click', makeItFav);

    imgSection.appendChild(imgElement);

    textSection.appendChild(textParagraph);
    textSection.appendChild(textAuthor);
    textSection.appendChild(favButton);

    rowContainer.appendChild(imgSection);
    rowContainer.appendChild(textSection);

    newElement.appendChild(rowContainer);

    return newElement;
}

function makeItFav() {
    const quoteElement = this.parentNode.parentNode.parentNode;
    const favElement = quoteElement.cloneNode(true);
    quoteElement.remove();
    fav.appendChild(favElement);
}