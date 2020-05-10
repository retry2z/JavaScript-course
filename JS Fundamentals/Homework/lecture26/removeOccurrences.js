function removeOccurrences(keyWord,text) {

    while (text.includes(keyWord)) {
        text = text.replace(keyWord, '');
    }

    console.log(text);
}

removeOccurrences('ice','kicegiciceeb');