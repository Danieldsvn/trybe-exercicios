class Person {
  constructor(private name: string, private birthDate: Date ) {
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

const person = new Person('Daniel', new Date('1923/03/03'));
console.log(person.personName);
console.log(person.birthday.toDateString());

