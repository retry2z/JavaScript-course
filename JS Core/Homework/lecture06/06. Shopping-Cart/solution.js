function solve() {
    let addButtons = document.getElementsByClassName('add-product');
    let resultElement = document.getElementsByTagName('textarea')[0];
    let resultButton = document.getElementsByClassName('checkout')[0];
    let addName = '';
    let addPrice = '';
    let totalPrice = 0;
    let totalNames = '';

    for (let i = 0; i < addButtons.length; i++) {
        addButtons[i].addEventListener('click', function () {
            let getElement = addButtons[i].parentElement.parentElement;
            addName = getElement.getElementsByClassName("product-title")[0].textContent;
            totalNames += `${addName}, `;
            addPrice = +getElement.getElementsByClassName("product-line-price")[0].textContent;
            totalPrice += addPrice;

            resultElement.value += `Added ${addName} for ${addPrice.toFixed(2)} to the cart.\n`;
        });
    }
    resultButton.addEventListener('click', function () {
        resultElement.value += `You bought ${(totalNames).slice(0, -2)} for ${totalPrice.toFixed(2)}.`;
    });
}