function matchPhoneNumber(input) {
    const text = input.pop();
    const regex = /\+359( |-)2\1\d{3}\1\d{4}/g;

    const result = text.match(regex);
    console.log(result.join(', '));

}

matchPhoneNumber([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
]);