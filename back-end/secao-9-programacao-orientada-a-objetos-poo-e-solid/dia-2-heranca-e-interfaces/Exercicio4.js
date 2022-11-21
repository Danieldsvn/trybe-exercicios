class Subject {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('Nome com menos de 3 caracteres');
        }
        this._name = value;
    }
}
const matematica = new Subject('matematica');
console.log(matematica);
const historia = new Subject('historia');
console.log(historia);
const geografia = new Subject('geografia');
console.log(geografia);
console.log(matematica.name);
console.log(historia.name);
console.log(geografia.name);
