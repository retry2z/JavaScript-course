function extractText() {
    const list = document.getElementsByTagName('li');
    let result = document.getElementById('result');

    for (const element of list) {
        result.value += element.textContent + '\n';
    }
}