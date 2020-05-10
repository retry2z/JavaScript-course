function deleteByEmail() {
    const data = document.getElementsByTagName('td');
    const find = document.querySelectorAll("input[name='email']")[0];
    const result = document.getElementById('result');

    for (const line of data) {
        if (line.textContent === find.value) {
            console.log(line);
            line.parentElement.remove();
            // const parentEl = line.parentElement.remove();
            // parentEl.parentElement.removeChild(parentEl);
            result.textContent = 'Deleted.'
            return
        }
    }
    result.textContent = 'Not found.';
}