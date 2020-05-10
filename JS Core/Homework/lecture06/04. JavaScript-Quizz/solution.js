function solve() {
    let countQUIZ = 0;
    let currectAns = 0;
    let bodyQUIZ = document.querySelectorAll("section");
    let buttonsElement = document.querySelectorAll('p.answer-text');
    let resultElement = document.getElementsByTagName("h1")[1];
    let resultDispalyElement = document.getElementById("results");

    for (let i of buttonsElement) {
        i.addEventListener('click', function () {
            bodyQUIZ[countQUIZ].style.display = "none";

            switch (i.textContent) {
                case "onclick":
                    currectAns++;
                    break;
                case "JSON.stringify()":
                    currectAns++;
                    break;
                case "A programming API for HTML and XML documents":
                    currectAns++;
                    break;
            }

            if (countQUIZ < 2) {
                bodyQUIZ[countQUIZ + 1].style.display = "block";
            }
            if (countQUIZ === 2) {
                resultDispalyElement.style.display= "block";
                if (currectAns === 3) {
                    resultElement.textContent = 'You are recognized as top JavaScript fan!';
                } else {
                    resultElement.textContent = `You have ${currectAns} right answers`;
                }
                //resultElement.innerHTML = currectAns;
            }
            countQUIZ++;
        });
    }
}
