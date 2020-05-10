function solve() {
    let textElement = document.getElementsByClassName('link-1');
    console.log(textElement);

    for (let i = 0; i < textElement.length; i++) {
        textElement[i].addEventListener('click', (e) => {
            let currentTarget = e.currentTarget;
            let paragraphElement = currentTarget.getElementsByTagName('p')[0];
            //console.log(paragraphElement);
            txt = paragraphElement.textContent;
            txtParts = txt.split(" ");
            let clicks = Number(txtParts[1]);
            clicks++;
            txtParts[1] = clicks;
            paragraphElement.textContent = txtParts.join(" ");
        });
    }
}

