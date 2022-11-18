class Person {
  constructor(private name: string, private birthDate: Date ) {}

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
    const currentTime = Date.now();
    const valueTime = value.getMilliseconds();
    const age = this.ageGenerator(currentTime - valueTime)
    console.log(age)
    if(age <= 120 && age > 0) {
      this.birthDate = value;
    } else {
      throw new Error('Data de nascimento inválida');
    } 
  }
}

const person = new Person('Daniel', new Date(1900, 3, 3));
console.log(person.birthday);
console.log(person.ageGenerator(Date.now()));
