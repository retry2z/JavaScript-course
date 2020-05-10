function tseamAccount(input) {
    let games = input.shift().split(' ');

    input.forEach(el => {
        const command = el.split(' ')[0];
        const name = el.split(' ')[1];

        switch (command) {
            case 'Install': {
                if (!games.includes(name)) {
                    games.push(name);
                }
                break;
            }
            case 'Uninstall': {
                if (games.includes(name)) {
                    games = games.filter(e => (name !== e));
                }
                break;
            }
            case 'Update': {
                if (games.includes(name)) {
                    games = games.filter(e => (name !== e));
                    games.push(name);
                }
                break;
            }
            case 'Expansion': {
                const exGame = name.split('-')[0];
                const expansion = name.split('-')[1];
                const index = games.indexOf(exGame) + 1;
                if (games.includes(exGame)) {
                    games.splice(index, 0, `${exGame}:${expansion}`);
                }
                break;
            }
            case 'Play!': {
                console.log(games.join(' '));
                break;
            }
        }

    });
}

tseamAccount([
    'CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!',]
);