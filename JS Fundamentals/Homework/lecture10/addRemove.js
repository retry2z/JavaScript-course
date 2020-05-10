function addRemove(input) {
    let count = 0;
    let output = [];

    input.forEach(e =>{
        count++;
        if (e === 'add') {
            output.push(count);
        } else {
            output.pop();
        }
    });

    if (output.length > 0) {
        console.log(output.join(' '));
    } else {
        console.log('Empty');
    }
}

addRemove(['remove', 'remove', 'remove']);