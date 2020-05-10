function solve(input) {
    let paragraphElement = document.getElementById("input");
    let txt = paragraphElement.textContent.replace(/\s+/g, ' ').split(".");
    let result = document.getElementById("output");
    //let txt = input;
    //console.log(txt);

    let paragraphs = Math.round((txt.length - 1) / 3) + 1;
    let output = "";
    let c = 0;

    for (let i = 0; i < txt.length; i++) {
        if (c === 0 && paragraphs >= 1) {
            output += '<p>';
        }
        if (txt[i]) {
            output += `${txt[i]}.`;
            c++;
        }
        if (c === 3 || paragraphs === 1) {
            output += '</p>';
            c = 0;
            paragraphs--;
        }
    }
    //  result.innerText = "asdasdad";
    result.innerHTML = output;
}

//solve(["JavaScript, often abbreviated as JS, is a high-level, interpreted programming language", " It is a language which is also characterized as d… weakly typed, prototype-based and multi-paradigm", " Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web", " JavaScript enables interactive web pages and thus is an essential part of web applications", " The vast majority of websites use it, and all maj… have a dedicated JavaScript engine to execute it", " As a multi-paradigm language, JavaScript supports…-oriented and prototype-based) programming styles", " It has an API for working with text, arrays, date…upon the host environment in which it is embedded", ""]);
