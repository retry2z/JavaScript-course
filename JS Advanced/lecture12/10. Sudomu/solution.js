function solve() {
    const data = document.querySelectorAll('tbody input');
    const btn = document.querySelectorAll('button');
    const size = Math.sqrt(data.length);


    btn[0].addEventListener('click',() => {
        const cols = [...data].map(e => e.value);
        console.log(cols);
    });




    console.log(data);
}