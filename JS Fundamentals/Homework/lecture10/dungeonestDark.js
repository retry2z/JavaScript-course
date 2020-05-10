function dungeonestDark(string) {
    const input = (string + '').split('|');
    let health = 100;
    let coins = 0;

    for (let i = 0; i < input.length; i++) {
        const stage = input[i].split(' ');


        switch (stage[0]) {
            case "potion": {
                let potionHealth = 0;
                if (+stage[1] + health > 100) {
                    potionHealth = Number(stage[1]) - ((+stage[1] + health) - 100);
                } else {
                    potionHealth = +stage[1];
                }

                health = Math.min(Number(stage[1]) + health, 100);
                console.log(`You healed for ${potionHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            }
            case "chest": {
                coins += Number(stage[1]);
                console.log(`You found ${stage[1]} coins.`)
                break;
            }
            default: {
                health -= Number(stage[1]);
                if (health > 0) {
                    console.log(`You slayed ${stage[0]}.`);
                } else {
                    console.log(`You died! Killed by ${stage[0]}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonestDark('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');



