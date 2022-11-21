class Person {
  constructor(public name: string, public birthDate: Date ) {
    this.personName = name;
    this.birthday = birthDate;
  }

  get personName(): string {
    return this.name;
  }

  set personName(value: string) {
    if(value.length > 3) this.name = value
  }

  get birthday(): Date {
    return this.birthDate;
  }

  ageGenerator(miliseconds: number): number {
    return Math.floor(((((miliseconds / 1000) / 60) / 60) / 24) / 365) ;
  }

  set birthday(value: Date) {
    const currentTime = new Date().getTime();
    const valueTime = value.getTime();
    const age = this.ageGenerator(currentTime - valueTime);    
    if(age <= 120 && age > 0) {
      this.birthDate = value;
    } else {
      throw new Error('Data de nascimento inválida');
    } 
  }
}

// const person1 = new Person('Daniel', new Date('1923/03/03'));
// console.log(person1.personName);
// console.log(person1.birthday.toDateString());

// const person2 = new Person('Matheus', new Date('1986/04/30'));
// console.log(person2.personName);
// console.log(person2.birthday.toDateString());

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    // this.personName = name;
    // this.birthday = birthDate;
    this._enrollment = this.generateEnrollment();
    // this._examsGrades = examsGrades;
    // this._worksGrades = worksGrades;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get examsGrades(): number[] {    
    return this._examsGrades
  }

  set examsGrades(value: number[]) {    
    this.examsValidation(value);
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades
  }

  set worksGrades(value: number[]) {
    this.worksValidation(value);
    this._worksGrades = value;
  }

  sumGrades(): number {
    const examsSum = this._examsGrades.reduce((pv, cv) => (pv + cv), 0);
    const worksSum = this._worksGrades.reduce((pv, cv) => (pv + cv), 0);
    return examsSum + worksSum
  }

  sumAverageGrade(): number {
    return this.sumGrades() / (this._examsGrades.length + this._worksGrades.length);
  }

  generateEnrollment(): string {
    this.enrollmentValidation(this.personName + this.birthday);
    return this.name + this.birthday;
  }

  enrollmentValidation(enrollment: string) {    
    if(enrollment.length < 16) {
      throw new Error ('Matricula com menos de 16 caracteres');
    }
  }

  examsValidation(exams: number[]) {        
    if(exams.length > 4) {
      throw new Error (`Número máximo de provas excedidos. Qtd de provas inseridas ${exams.length}. Número máximo: 4`);
    }
  }

  worksValidation(works: number[]) {    
    if(works.length > 2) {
      throw new Error (`Número máximo de provas excedidos. Qtd de provas inseridas ${works.length}. Número máximo: 2`);
    }
  }
}

const student1 = new Student('JosiCláudio', new Date(1992, 2, 1));
console.log(student1);
student1.examsGrades = [8, 9, 10, 7];
student1.worksGrades = [7, 6];
console.log(student1.sumAverageGrade());


// const student2 = new Student('Janio', new Date(1990, 4, 13));
// console.log(student2);
// console.log(student2.sumAverageGrade())

// ----------------------------------------

  // get personName(): string {
  //   return this.name;
  // }

  // set personName(value: string) {
  //   if(value.length > 3) this.name = value
  // }

  // get birthday(): Date {
  //   return this.birthDate;
  // }

  // ageGenerator(miliseconds: number): number {
  //   return Math.floor(((((miliseconds / 1000) / 60) / 60) / 24) / 365) ;
  // }

  // set birthday(value: Date) {
  //   const currentTime = new Date().getTime();
  //   const valueTime = value.getTime();
  //   const age = this.ageGenerator(currentTime - valueTime);    
  //   if(age <= 120 && age > 0) {
  //     this.birthDate = value;
  //   } else {
  //     throw new Error('Data de nascimento inválida');
  //   } 
  // }

// const student1 = new Student('Daniel', new Date('1923/03/03'));
// console.log(student1.personName);
// console.log(student1.birthday.toDateString());

// const student2 = new Student('Matheus', new Date('1986/04/30'));
// console.log(student2.personName);
// console.log(student2.birthday.toDateString());


