function town(input) {
    const data = [];
    for (let row of input) {
        const [town, latitude, longitude] = row.split(' | ');
        const currentObj = {};

        currentObj.town = town;
        currentObj.latitude = (+latitude).toFixed(2);
        currentObj.longitude = (+longitude).toFixed(2);

        data.push(currentObj);
        console.log(currentObj);
    }

}

town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])
;