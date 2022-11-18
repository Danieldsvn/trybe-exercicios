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
