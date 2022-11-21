class Person {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
        this.personName = name;
        this.birthday = birthDate;
    }
    get personName() {
        return this.name;
    }
    set personName(value) {
        if (value.length > 3)
            this.name = value;
    }
    get birthday() {
        return this.birthDate;
    }
    ageGenerator(miliseconds) {
        return Math.floor(((((miliseconds / 1000) / 60) / 60) / 24) / 365);
    }
    set birthday(value) {
        const currentTime = new Date().getTime();
        const valueTime = value.getTime();
        const age = this.ageGenerator(currentTime - valueTime);
        if (age <= 120 && age > 0) {
            this.birthDate = value;
        }
        else {
            throw new Error('Data de nascimento inválida');
        }
    }
}
const person = new Person('Daniel', new Date('1923/03/03'));
console.log(person.personName);
console.log(person.birthday.toDateString());
