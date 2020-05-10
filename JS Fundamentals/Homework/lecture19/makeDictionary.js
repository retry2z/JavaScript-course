function makeDictionary(input) {
    let output = {};

    for (let currentTerm of input) {
        currentTerm = JSON.parse(currentTerm);
        const [term] = Object.keys(currentTerm);

        output[term] = currentTerm[term];
    }

    const sortObject = (object) => {
        const tmpObject = {};
        const sortedKeys = Object.keys(object).sort((a,b) => a.localeCompare(b));
        for (let currentKey of sortedKeys) {
            tmpObject[currentKey] = object[currentKey];
        }
        return tmpObject;
    };
    output = sortObject(output);

    for (let currentKey in output) {
        console.log(`Term: ${currentKey} => Definition: ${output[currentKey]}`);
    }
}

makeDictionary([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);