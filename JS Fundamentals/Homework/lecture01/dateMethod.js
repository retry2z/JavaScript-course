function dateMethod(year, month, day) {
    let date = new Date(year, month, day);
    let i = date.getDate() + 1;
    console.log(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
}

dateMethod(2016, 9, 30);