function schoolRegister(input) {

    const students = [];
    for (let token of input) {
        const student = {};
        const [tokenName, tokenGrade, tokenScore] = token.split(', ');
        const name = tokenName.split(': ')[1];
        let grade = tokenGrade.split(': ')[1];
        const score = tokenScore.split(': ')[1];

        if (score >= 3) {
            student.name = name;
            student.grade = Number(grade) + 1;
            student.score = score;
            students.push(student);
        }
    }
    const sorted = students.sort((a, b) => a.grade - b.grade);


    let tmp = [];
    for (let i of students) {

        if (!tmp.includes(i.grade)) {
            let avgScore = 0;
            let count = 0;
            let outputNames = [];
            const filtered = students.filter(x => {
                if (x.grade === i.grade) {
                    outputNames.push(x.name);
                    count++;
                    avgScore += Number(x.score);
                }
            });

            console.log(`${i.grade} Grade `);
            console.log(`List of students: ${outputNames.join(', ')}`);
            console.log(`Average annual grade from last year: ${(avgScore / count).toFixed(2)}`);
            console.log();
            tmp.push(i.grade);
        }
    }
}

schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
);