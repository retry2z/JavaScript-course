/******************************************
 *  Author : retry2z
 *  Created On : Thu Nov 28 2019
 *  File : raceQuit.js
 *******************************************/

function solve(txt) {
    //Focus on solving the problem.
    const input = txt[0];
    let totalCount = [];
    let output = '';
    const pattern = /(?<letters>.*?)(?<multiply>[\d]+)/g;

    while ((match = pattern.exec(input)) !== null) {
        const { letters, multiply } = match.groups;
        letters
            .toUpperCase()
            .split('')
            .map(x => {
                if (totalCount.indexOf(x) < 0) {
                    totalCount.push(x)
                }
            });
        for (let index = 0; index < +(multiply); index++) {
            output += letters.toUpperCase();
        }
    }
    console.log(`Unique symbols used: ${totalCount.length}`);
    console.log(`${output}`);
}

solve(["e-!btI17z=E:DMJ19U1Tvg VQ>11P\"qCmo.-0YHYu~o%/%b.}a[=d15fz^\"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D'xi]-~17 *%p\"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p\"Z<v13fI]':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15"]);