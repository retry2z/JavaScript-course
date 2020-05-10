/******************************************
 *  Author : retry2z
 *  Created On : Fri Nov 29 2019
 *  File : messagesManager.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.
    const capacity = Number(input.shift());

    let records = [];
    for (const item of input) {
        if (item === 'Statistics') {
            break;
        }

        const dataObject = {};
        const command = item.split('=');
        switch (command[0]) {
            case 'Add': {
                const search = records.find(x => x.username === command[1]);
                if (!search) {
                    dataObject.username = command[1];
                    dataObject.send = Number(command[2]);
                    dataObject.receive = Number(command[3]);
                    records.push(dataObject);
                }
            }
                break;
            case 'Message': {
                const sender = records.find(x => x.username === command[1]);
                const receiver = records.find(x => x.username === command[2]);

                if (sender && receiver) {
                    if (sender.send + sender.receive + 1 >= capacity) {
                        console.log(`${sender.username} reached the capacity!`);
                        sender.username = 0;
                        records = records.filter(x => x.username);

                    } else {
                        sender.send++;
                    }

                    if (receiver.send + receiver.receive + 1 >= capacity) {
                        console.log(`${receiver.username} reached the capacity!`);
                        receiver.username = 0;
                        records = records.filter(x => x.username);

                    } else {
                        receiver.receive++;
                    }
                    debugger
                }
            }
                break;
            case 'Empty': {
                if (command[1] === 'All') {
                    records = [];
                } else {
                    const search = records.find(x => x.username === command[1]);
                    search.username = 0;
                    records = records.filter(x => x.username);
                }
            }
                break;
        }
        // const result = records.find(x => x.username === 'Clark');
    }
    console.log(`Users count: ${records.length}`);
    records
        .sort((a, b) => b.receive - a.receive || a - b)
        .forEach(x => {
            console.log(`${x.username} - ${x.send + x.receive}`);
        });
}

solve([
        '20',
        'Add=Mark=3=9',
        'Add=Berry=5=5',
        'Add=Clark=4=0',
        'Empty=Berry',
        'Add=Blake=9=3',
        'Add=Michael=3=9',
        'Add=Amy=9=9',
        'Message=Blake=Amy',
        'Message=Michael=Amy',
        'Statistics'
    ]
);