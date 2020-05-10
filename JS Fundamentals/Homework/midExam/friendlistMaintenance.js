function friendListMaintenance(input) {
    const friendList = input.shift().split(', ');
    let blacklistedNamesCount = 0;
    let lostNamesCount = 0;

    const checkValidIndexes = (number, arr) => {
        return (Number(number) <= arr.length && Number(number) >= 0);
    };

    for (let i = 0; i < input.length; i++) {
        const [command, name] = input[i].split(' ');

        switch (command) {
            case 'Blacklist':
                let index = friendList.indexOf(name);
                if (index >= 0) {
                    friendList[index] = 'Blacklisted';
                    console.log(`${name} was blacklisted.`);
                    blacklistedNamesCount++;
                } else {
                    console.log(`${name} was not found.`);
                }
                break;
            case 'Error':
                let indexErr = Number(name);
                if (friendList[indexErr] === 'Blacklisted' || friendList[indexErr] === 'Lost') {
                    break;
                }
                console.log(`${friendList[indexErr]} was lost due to an error. `);
                friendList[indexErr] = 'Lost';
                lostNamesCount++;
                break;
            case 'Change':
                let context = input[i].split(' ');
                let indexCh = Number(context[1]);
                let newName = context[2];

                if (checkValidIndexes(indexCh, friendList)) {
                    console.log(`${friendList[indexCh]} changed his username to ${newName}. `);
                    friendList[indexCh] = newName;
                }
                break;
            case 'Report':
                console.log(`Blacklisted names: ${blacklistedNamesCount} `);
                console.log(`Lost names: ${lostNamesCount} `);
                console.log(friendList.join(' '));
                break;
        }
    }
}

friendListMaintenance([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
]);