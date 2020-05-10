function loginData(input) {
    let password = input[0].split('').reverse().join('');
    let c = 0;

    for (let i = 1; i < input.length; i++) {
        if (password === input[i]) {
            console.log(`User ${input[0]} logged in.`);
        } else if (c < 3) {
            console.log('Incorrect password. Try again.');
            c++
        } else {
            console.log(`User ${input[0]} blocked!`);
        }
    }
}

loginData(['sunny','rainy','cloudy','sunny','not sunny']);