function validate() {
    const input = document.getElementById('email');

    const errorMsg = () => {
        const regex = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
        const txt = input.value;
        if (!regex.test(txt) && txt) {
            input.classList.add('error');
        } else {
            console.log('asdasdasd...');
            input.classList.remove('error');
        }
    };
    input.addEventListener('change', errorMsg);
}