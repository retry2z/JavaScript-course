function extractInfo(line, part) {
    let namePattern = / [A-Z][A-Za-z]*-[A-Z][A-Za-z]*( |\.-[A-Z][A-Za-z]* )/;
    let airportPattern = / [A-Z]{3}\/[A-Z]{3} /;
    let numberPattern = / [A-Z]{1,3}[\d]{1,5} /;
    let companyPattern = /- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]* /;
 
    let name = line.match(namePattern)[0].trim().replace(/-/g, " ");
    let [fromAirport, toAirport] = line.match(airportPattern)[0].trim().split("/");
    let number = line.match(numberPattern)[0].trim();
    let company = line.match(companyPattern)[0].replace("- ", "").replace(/\*/g, " ").trim();
 
    if (part === "name") {
        console.log(`Mr/Ms, ${name}, have a nice flight!`);
    } else if (part === "flight") {
        console.log(`Your flight number ${number} is from ${fromAirport} to ${toAirport}.`);
    } else if (part === "company") {
        console.log(`Have a nice flight with ${company}.`);
    } else if (part === "all") {
        console.log(`Mr/Ms, ${name}, your flight number ${number} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`);
    }
}