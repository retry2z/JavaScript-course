function solve() {
    const list = document.getElementsByTagName('li');
    const input = document.querySelectorAll('input[type=text]')[0];
    const btn = document.querySelectorAll('button[type=button]')[0];

    btn.addEventListener('click', x => {
        const index = input.value[0].toUpperCase().charCodeAt(0) - 65;
        const newItem = input.value[0].toUpperCase() + input.value.substring(1).toLowerCase();

        const output = 
            list[index].textContent
                .split(', ')
                .filter(x => x);
        output.push(newItem);
        list[index].textContent = output.join(', ');
        input.value = '';
    });
}