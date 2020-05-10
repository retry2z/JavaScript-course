function solve(a) {
    let obj = {
        USA: 'English',
        England: 'English',
        Spain: 'Spanish',
        Argentina : 'Spanish',
        Mexico: 'Spanish',
    };

    if (obj[a]) {
        console.log(obj[a]);
    } else {
        console.log('unknown');
    }
}

solve('Spain');