class DateOfTheYear {
    constructor(day, month, year) {
        const dateStr = `${year}-${month}-${day}`;
        if (new Date(dateStr).getDate() !== day) {
            this._day = 1;
            this._month = 1;
            this._year = 1900;
        }
        else {
            this._day = day;
            this._month = month;
            this._year = year;
        }
    }
    getMonthName() {
        const months = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro'
        ];
        return months[this._month - 1];
    }
    isLeapYear() {
        if (this._year % 4 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    compare(instance) {
        //const actualDate = new Date(this._day, this._month, this._year);
        const actualDate = `${this._day}-${this._month}-${this._year}`;
        const instanceDate = `${instance._day}-${instance._month}-${instance._year}`;
        // console.log(`instanceDate ${instanceDate}`);
        // console.log(`actualDate ${actualDate}`);
        if (instanceDate === actualDate)
            return 0;
        if (instanceDate < actualDate) {
            return 1;
        }
        else {
            return -1;
        }
    }
    format(dateFormat) {
        const formatsArray = [
            (!dateFormat.match(/a{4}/g)),
            (!dateFormat.match(/m{2}/g) && !dateFormat.match(/M{1}/g)),
            (!dateFormat.match(/d{2}/g))
        ];
        if (formatsArray.every((match) => match)) {
            throw new Error(`O formato passado é inválido: ${dateFormat}`);
        }
        const day = this._day > 9 ? this._day.toString() : `0${this._day}`;
        const month = this._month > 9 ? this._month.toString() : `0${this._month}`;
        const year = this._year.toString();
        const formatedDate = dateFormat.replace('dd', day).replace('mm', month).replace('M', this.getMonthName()).replace('aaaa', year).replace('aa', year.substring(-2));
        return formatedDate;
    }
    get day() {
        return this._day;
    }
    set day(value) {
        this._day = value;
    }
    get month() {
        return this._month;
    }
    set month(value) {
        this._month = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        this._year = value;
    }
}
const date1 = new DateOfTheYear(4, 2, 1990);
// const date2 = new DateOfTheYear(4, 2, 1990)
// const comparision = date1.compare(date2);
// console.log(`comparision: ${comparision}`);
console.log(`dd/mm/aaaa: ${date1.format('dd/mm/aaaa')}`);
console.log(`dd-mm-aa: ${date1.format('dd-mm-aa')}`);
console.log(`a m c: ${date1.format('a m c')}`);
// class Data {
//   private _day: number;
//   private _month: number;
//   private _year: number;
//     constructor(day: number, month: number, year: number) {
//       // note que esse método não é chamado a partir do this, e sim a partir do Data
//       // isso acontece pois ele é estático, ou seja, não está vinculado a nenhuma instância
//       if (!Data.validateDate(day, month, year)) {
//         this._day = 1;
//         this._month = 1;
//         this._year = 1900;
//       } else {
//         this._day = day;
//         this._month = month;
//         this._year = year;
//       }
//     }
//   get day(): number {
//     return this._day;
//   }
//   set day(value: number) {
//     this._day = value;
//   }
//   get month(): number {
//     return this._month;
//   }
//   set month(value: number) {
//     this._month = value;
//   }
//   get year(): number {
//     return this._year;
//   }
//   set year(value: number) {
//     this._year = value;
//   }
//     getMonthName(): string {
//       const months = [
//         'janeiro',
//         'fevereiro',
//         'março',
//         'abril',
//         'maio',
//         'junho',
//         'julho',
//         'agosto',
//         'setembro',
//         'outubro',
//         'novembro',
//         'dezembro',
//       ];
//       return months[this.month - 1];
//     }
//     isLeapYear(): boolean {
//       return this._year % 4 === 0;
//     }
//     compare(date: Data): number {
//       const currentDateStr = `${this.year}-${this.month}-${this.day}`;
//       const dateStr = `${date.year}-${date.month}-${date.day}`;
//       if (new Date(currentDateStr) > new Date(dateStr)) return 1;
//       if (new Date(currentDateStr) < new Date(dateStr)) return -1;
//       return 0;
//     }
//     format(formatting: string): string {
//       const conditions: boolean[] = [
//         (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
//         (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
//         (!formatting.match(/d{2}/g)), // verifica se tem o dia na formatação
//       ];
//       if (conditions.every((cond) => cond)) {
//         throw new Error(`O formato passado é inválido: ${formatting}`);
//       }
//       const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
//       const month = this.month > 9 
//         ? this.month.toString() 
//         : `0${this.month.toString()}`;
//       const year = this.year.toString();
//       const dateFormatting = formatting
//         .replace('dd', day).replace('mm', month)
//         .replace('M', this.getMonthName()).replace('aaaa', year)
//         .replace('aa', year.substr(-2));
//       return dateFormatting;
//     }
//     // esse método é estático pois ele não precisa acessar o `this` em momento algum
//     // logo, não precisa estar vinculado a nenhuma instância
//     private static validateDate(day: number, month: number, year: number)
//       : boolean {
//       const dateStr = `${year}-${month}-${day}`;
//       if (new Date(dateStr).getDate() !== day) return false;
//       return true;
//     }
//   }
//   // Para testar!
//   const testDate = new Data(29, 1, 1989);
//   console.log(testDate);
//   console.log('Dia: ', testDate.day);
//   console.log('Mês: ', testDate.month);
//   console.log('Mês por extenso: ', testDate.getMonthName());
//   console.log('Ano: ', testDate.year);
//   console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
//   console.log(testDate.format('dd/mm/aaaa'));
//   console.log(testDate.format('dd-mm-aaaa'));
//   console.log(testDate.format('aaaa/mm/dd'));
//   console.log(testDate.format('aaaa-mm-dd'));
//   console.log(testDate.format('dd de M de aa'));
//   console.log(testDate.format('dd, M de aaaa'));
//   const otherDate = new Data(30, 1, 2021);
//   const compared = testDate.compare(otherDate);
//   const compareStates = ['anterior', 'igual', 'posterior'];
//   console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);
//   // data inválida
//   const invalidDate = new Data(31, 2, 2021);
//   console.log('Teste data inválida: ', invalidDate);
//   // formato inválido
//   console.log(invalidDate.format('d de M de a'));
