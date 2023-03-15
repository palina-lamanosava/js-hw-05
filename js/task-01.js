// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции - конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

const Account = function ({ email, login } = {}) {
    this.email = email;
    this.login = login;

}
Account.prototype.getInfo = function () {
    console.log(`login - ${this.login}, email - ${this.email}`);
};

const mango = new Account({ login: 'Mangozedog', email: 'mango@mail' });

mango.getInfo();