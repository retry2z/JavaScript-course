function focus() {
    const inputs = document.querySelectorAll('input[type=text]');

    for (const element of inputs) {
        element.addEventListener('focus', x => {
            element.parentNode.classList.add("focused");
        });

        element.addEventListener('blur', x => {
            element.parentNode.classList.remove("focused");
        });
    }
}