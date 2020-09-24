class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() { // instance method
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() { // instance method
        this.tardies++;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!";
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScores(score) { // instance method
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() { // instance method
        let sum = this.scores.reduce(function(a, b){return a + b});
        return sum / this.scores.length;
    }
    static EnrollStudents() {
        return "Enrolling Students";
    }
}

let firstStudent = new Student("Derek", "Zoolander");
let secondStudent = new Student("Blue", "Steele");

console.log(firstStudent.fullName());

for(let i = 0; i < 2; i++) {
    secondStudent.markLate();
}


console.log(secondStudent.tardies);
console.log(secondStudent.markLate());
console.log(firstStudent.scores);

firstStudent.addScores(57);
firstStudent.addScores(92);
firstStudent.addScores(97);

console.log(firstStudent.scores);

console.log(firstStudent.calculateAverage());

console.log(Student.EnrollStudents());

// console.log(9.98 * 10);