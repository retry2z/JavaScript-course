function solve(n, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let trashedArmour = 0;
    let price = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            trashedHelmet++;
        }
        if (i % 3 === 0) {
            trashedSword++;
        }
    }
    trashedShield = Math.floor(trashedSword / 2);
    trashedArmour = Math.floor(trashedShield / 2);

    //console.log(trashedHelmet);
    //onsole.log(trashedSword);
    //console.log(trashedShield);
    //console.log(trashedArmour);

    price = trashedHelmet * helmetPrice + trashedSword * swordPrice + trashedShield * shieldPrice + trashedArmour * armourPrice;

    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}

solve(23,
    12.50,
    21.50,
    40,
    200);