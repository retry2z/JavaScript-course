function timeToWalk(steps,footprints,speed) {
    let walkM = steps * footprints;
    let walkKM = walkM / 1000;
    let rest = parseInt( walkM/500);
    let totalSec = (walkKM/speed * 3600) + (rest*60);

    let time = new Date(0, 0, 0, 0, 0, totalSec.toFixed(0), 0);

    let output = '';
    if (time.getHours() < 10) { output += `0${time.getHours()}`; }
    else { output += `${time.getHours()}`; }

    if (time.getMinutes() < 10) { output += `:0${time.getMinutes()}:`; }
    else { output += `:${time.getMinutes()}:`; }

    if (time.getSeconds() < 10) { output += `:0${time.getSeconds()}`; }
    else { output += `${time.getSeconds()}`; }

    console.log(output);
}

timeToWalk(4000, 0.60, 5);