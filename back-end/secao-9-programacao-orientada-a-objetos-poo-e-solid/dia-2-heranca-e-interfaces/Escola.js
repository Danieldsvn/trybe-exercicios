class Person {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
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
        const currentTime = Date.now();
        const valueTime = value.getMilliseconds();
        const age = this.ageGenerator(currentTime - valueTime);
        console.log(age);
        if (age <= 120 && age > 0) {
            this.birthDate = value;
        }
        else {
            throw new Error('Data de nascimento inválida');
        }
    }
}
const person = new Person('Daniel', new Date(1900, 3, 3));
console.log(person.birthday);
const miliseconds = (new Date(1900, 3, 3)).getMilliseconds();
console.log(person.ageGenerator(miliseconds));
