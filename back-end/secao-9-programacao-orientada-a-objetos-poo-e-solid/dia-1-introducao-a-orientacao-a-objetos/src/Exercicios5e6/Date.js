class DateOfTheYear {
    constructor(day, month, year) {
        const dateStr = `${day}-${month}-${year}`;
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
        console.log(`instanceDate ${instanceDate}`);
        console.log(`actualDate ${actualDate}`);
        if (instanceDate === actualDate)
            return 0;
        if (instanceDate < actualDate) {
            return 1;
        }
        else {
            return -1;
        }
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
const date1 = new DateOfTheYear(3, 3, 1990);
const date2 = new DateOfTheYear(4, 2, 1990);
const comparision = date1.compare(date2);
console.log(`comparision: ${comparision}`);
