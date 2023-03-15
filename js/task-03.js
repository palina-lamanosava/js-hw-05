// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих


class Storage{
    constructor(items =[]) {
        this.items = items;
    };

    getItems() {
        return this.items;
    };
    addItem(item) {
        this.items.push(item);
        return;
    }
    removeItem(item) {
        if (this.items.includes(item)) {
            let i = this.items.indexOf(item);
            this.items.splice(i, 1);
        } else {
            console.log('Item not found');
        };
    };

};

const storage = new Storage(['Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',]);


const items = storage.getItems();

console.log(items);

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);



