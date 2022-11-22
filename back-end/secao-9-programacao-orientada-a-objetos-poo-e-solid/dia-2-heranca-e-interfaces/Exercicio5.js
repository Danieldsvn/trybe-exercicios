import Person from "./Escola";
import Subject from "./Exercicio4";
class Teacher extends Person {
    constructor(name, birthdate, salary, subject) {
        super(name, birthdate);
        this.birthday = birthdate;
        this.salaryValidation(salary);
        this.registration = this.generateRegistration();
        this.subject = subject;
        this.salary = salary;
    }
    salaryValidation(value) {
        if (value < 0) {
            throw new Error('Salário não pode ser um valor negativo');
        }
    }
    generateRegistration() {
        const registration = this.name + this.birthday;
        if (registration.length < 16) {
            throw new Error(`Registro possui menos que 16 caracteres. ${registration.length}`);
        }
        return registration;
    }
}
const matematica = new Subject('matematica');
const teacher1 = new Teacher('Rosana', new Date(2023, 1, 1), 5000, matematica);
console.log(teacher1);
