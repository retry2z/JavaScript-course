function solve(input) {
    const week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    if (input-1 >= 1 && input-1 <= 6) {
        console.log(week[input-1]);
    } else {
        console.log('Invalid day!');
    }
}

solve(2);