function matchFullName(input) {
    const text = input.pop();
    const regexp = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;

    const result = text.match(regexp);

    console.log(result.join(' '));
}

matchFullName([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov'
]);