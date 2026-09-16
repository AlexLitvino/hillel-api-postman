/*
Напишіть функцію countAutoByBrand, яка приймає три аргументи: назву марки автомобіля (бренд), назву моделі автомобіля та об'єкт, що представляє автівки різних марок. Ключами цього об'єкта є назви марок автомобілів (наприклад, Audi, BMW), а значеннями - масиви об'єктів, кожен з яких містить інформацію про власника автомобіля, модель автомобіля і кількість років володіння.

Приклад  об'єкта

const cars = {

    Audi: [

        { ownerName: "Test", brand: "TT", years: 14 },

        { ownerName: "Test1", brand: "Q3", years: 2 },

        { ownerName: "Test2", brand: "TT", years: 7 }

    ],

    BMW: [

        { ownerName: "Test3", brand: "Z3", years: 24 },

        { ownerName: "Test5", brand: "X5", years: 25 },

        { ownerName: "Test6", brand: "X5", years: 26 }

    ]

};

Цей об'єкт може мати інші марки автомобілів, кожна з яких має масив з інформацією про власника, модель та кількість років володіння.

Вимоги
Функція повинна приймати три аргументи: бренд (рядок), модель (рядок) та об'єкт автомобілів. Приклад countAutoByBrand("Audi","TT",cars)
Функція повинна повертати новий об'єкт { countOfModel: numberOfModel }, де:
countOfModel - ключ.
numberOfModel - значення типу number, яке містить кількість автомобілів цієї моделі для вказаного бренду.
Вихідні дані

{ countOfModel: 2 }
*/

const cars = {
    Audi: [
        { ownerName: "Test", brand: "TT", years: 14 },
        { ownerName: "Test1", brand: "Q3", years: 2 },
        { ownerName: "Test2", brand: "TT", years: 7 }

    ],
    BMW: [
        { ownerName: "Test3", brand: "Z3", years: 24 },
        { ownerName: "Test5", brand: "X5", years: 25 },
        { ownerName: "Test6", brand: "X5", years: 26 }
    ]
};

function countAutoByBrand(brand, model, cars){
    let result = 0;

    for (let key in cars){
        if (key === brand){
            for (let car of cars[key]){
                if (car["brand"] === model){
                    result++;
                }
            }
        }
    }
    return { countOfModel: result }
}

console.log(countAutoByBrand("Audi","TT",cars));
