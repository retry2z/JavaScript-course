function upp(str) {
    let strUP = str.toUpperCase();

    function extractWORDS() {
        return strUP.split(/\W+/);
    }

    let words = extractWORDS();
    words = words.filter(w=>w != '');
    return words.join(', ');
}

