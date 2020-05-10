function loadingBar(input) {
    const completedStage = input / 10;
    const completed = 10;
    let loadingBar = [];

    for (let i = 0; i < completed; i++) {
        if (i < completedStage) {
            loadingBar.push('%');
        } else {
            loadingBar.push('.');
        }
    }
    loadingBar = `[${loadingBar.join('')}]`;

    if (completed > completedStage) {
        console.log(`${input}% ${loadingBar}`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`);
        console.log(`${input}% ${loadingBar}`);
    }
}

loadingBar(30);