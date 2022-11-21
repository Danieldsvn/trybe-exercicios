interface Employee {
  registration: number;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}

const testEmployee: Employee = {
  registration: 1546,
  salary: 5881,
  admissionDate: new Date(),
  generateRegistration(): string {
    return 'a';    
  },
}