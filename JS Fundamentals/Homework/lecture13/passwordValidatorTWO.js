function passwordValidatorTWO(input) {
    const inputArray = input.split('');
    let digits = 0;
    let letters = 0;
    let length = (input.length >= 6 && input.length <= 10);
    let symbols = 0;

    inputArray.forEach(e => {
        const charCode = e.charCodeAt();
        if (charCode >= 47 && charCode <= 57) {
            digits++;
        } else if (charCode >= 65 && charCode <= 90) {
            letters++;
        } else if (charCode >= 97 && charCode <= 122) {
            letters++;
        } else {
            symbols++;
        }
    });

    if (letters && !symbols && digits >= 2) {
        console.log('Password is valid');
    } else {
        if (!length) {
            console.log(`Password must be between 6 and 10 characters`);
        }
        if (symbols !== 0) {
            console.log(`Password must consist only of letters and digits`);
        }
        if (digits < 2) {
            console.log(`Password must have at least 2 digits`);
        }
    }
}

passwordValidatorTWO('M1yP1ass32');