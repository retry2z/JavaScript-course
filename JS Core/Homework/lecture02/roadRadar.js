function roadRadar(input) {
    let speed = +input[0];
    let area = input[1];
    let echo = '';

    switch (area) {
        case "motorway": {
            if (speed - 130 > 0) {
                if (speed - 130 <= 20) {
                    echo = 'speeding';
                } else if (speed - 130 <= 40) {
                    echo = 'excessive speeding';
                } else if (speed - 130 > 40) {
                    echo = 'reckless driving';
                }
            }
            break;
        }
        case "interstate": {
            if (speed - 90 > 0) {
                if (speed - 90 <= 20) {
                    echo = 'speeding';
                } else if (speed - 90 <= 40) {
                    echo = 'excessive speeding';
                } else if (speed - 90 > 40) {
                    echo = 'reckless driving';
                }
            }
            break;
        }
        case "city": {
            if (speed - 50 > 0) {
                if (speed - 50 <= 20) {
                    echo = 'speeding';
                } else if (speed - 50 <= 40) {
                    echo = 'excessive speeding';
                } else if (speed - 50 > 40) {
                    echo = 'reckless driving';
                }
            }
            break;
        }
        case "residential": {
            if (speed - 20 > 0) {
                if (speed - 20 <= 20) {
                    echo = 'speeding';
                } else if (speed - 20 <= 40) {
                    echo = 'excessive speeding';
                } else if (speed - 20 > 40) {
                    echo = 'reckless driving';
                }
            }
            break;
        }
    }
    console.log(echo);
}

