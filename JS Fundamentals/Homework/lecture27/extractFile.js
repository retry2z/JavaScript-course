function extractFile(input) {
    // Focus on solving the problem.

    const file= input
        .split('\\')
        .filter(x => x.includes('.'))
        .join('')
        .split('.');

    const extension = file.pop();
    const fileName = file.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');