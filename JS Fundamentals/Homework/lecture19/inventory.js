function inventory(input) {
    let heroObj = [];

    for (let currentHero of input) {
        const [heroName, heroLevel, ...heroItems] = currentHero.split(' / ');
        const sorted = heroItems[0]
            .split(', ')
            .sort((a,b) => a.localeCompare(b))
            .join(', ');

        heroObj.push({
            'name': heroName,
            'level': heroLevel,
            'inventory': sorted,
        });
    }
    heroObj = heroObj.sort((a, b) => a.level - b.level);

    for (let heroPrint of heroObj) {
        console.log(`Hero: ${heroPrint.name}`);
        console.log(`level => ${heroPrint.level}`);
        console.log(`items => ${heroPrint.inventory}`);
    }
}


inventory([
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
);