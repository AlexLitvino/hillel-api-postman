// Методи примітивів!
// Але давайте трохи згадаємо про об'єкти
/*
let houseAddress = {
    country: "Ukraine",
    city: "Odessa",
    street: "Kanatna 22",
    getFullHouseAddress: function () {
        console.log("My address is - country:", houseAddress.country, ", city:", houseAddress.city,
        ", street:", houseAddress.street);
    }
}

houseAddress.getFullHouseAddress();*/

// Методи Number
// Способи запису чисел
// console.log("hex FF=" + 0Xff); // 0x вказує на те, що число записане у шістнадцятковому форматі.
// console.log("науковий формат: " + 2e3); // Це можна розшифрувати так: 2 * 10^3, що дорівнює 2000.

//Нічого страшного, якщо ми всі перемішаємо до купи
/*let res = 0Xff + 1e1 + 5;
console.log(res);*/

/*
Метод isNaN (is Not-a-Number) в JavaScript використовується для перевірки, чи є передане значення нечисловим (NaN) типом.
Цей метод повертає true, якщо значення є NaN, і false, якщо значення може бути конвертовано в число.
 */
//let a = 'qwerty' / 10;
//console.log(a);
// console.log(isNaN(a));
// console.log(isNaN(undefined)); // Цікаво. Все тому що цей тип не можна конвертувати в число
// console.log(isNaN(NaN));
// console.log(isNaN("qwerty"));

// Але, ми будемо використовувати це трохи інакше
// console.log(Number.isNaN(a));
//console.log(Number.isNaN(undefined)); // Цікаво. Все тому що цей тип не можна конвертувати в число
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN("qwee"));

/* Метод isNaN спробує перетворити передане значення в число,
 метод Number.isNaN() не перетворює значення, а просто перевіряє, чи воно є NaN
 */
// Number.isInteger - використовується для перевірки, чи є передане значення цілим числом.
// console.log(Number.isInteger(42));
// console.log(Number.isInteger(42.3));
// console.log(Number.isInteger("qwer"));
// console.log(Number.isInteger(true));
// console.log(Number.isInteger(NaN));
// console.log(Number.isInteger(Infinity));

// Number.isFinite - використовується для перевірки, чи є передане значення скінченим числом
// console.log(Number.isFinite(5));
// console.log(Number.isFinite(5.5));
// console.log(Number.isFinite("5"));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(-Infinity));
// console.log(Number.isFinite("abc"));

//Number.isSafeInteger - перевіряє, чи є передане число "безпечним цілим числом".
// Безпечне ціле число включає в себе всі цілі числа від -2^53 + 1 до 2^53 - 1

// console.log(Number.isSafeInteger(5));
// console.log(Number.isSafeInteger(5.5));
// console.log(Number.isSafeInteger("5"));
// console.log(Number.isSafeInteger(2 ** 53));
// console.log(Number.isSafeInteger(2 ** 53 - 1));

//Number.parseInt() - його призначення конвертувати рядок в ціле число,
// використовуючи десяткову систему числення.
// console.log(Number.parseInt('12.45'));
// console.log(Number.parseFloat('12.3.4'));
// console.log(Number.parseInt('12px'));
// console.log(Number.parseInt('a123'));
// console.log(Number.parseInt('10', 2)); // Двійкова система
// console.log(Number.parseInt('ff', 16));
// console.log(Number.parseInt('100', 32));

// Number.parseFloat - його призначення конвертувати рядок в число з плаваючою точкою
// console.log(Number.parseFloat("3.14"));
// console.log(Number.parseFloat("0.5"));
// console.log(Number.parseFloat("123.456"));
// console.log(Number.parseFloat("3.14abc"));

//Хотілось би також розібрати бібліотеку Math
//Округлення
/*console.log("floor: из 3.6 до " + Math.floor(3.6)); //вниз
console.log('ceil: из 3.1 до ' + Math.ceil(3.1)); //вгору
console.log('round: из 3.4 до ' + Math.round(3.4)); //до найближчого
console.log('round: из 3.7 до ' + Math.round(3.7)); //до найближчого*/

//заокруглення до заданого знака.
/*let n = 12.66467;
let str = n.toFixed(1); //скільки знаків після коми залишити
console.log(n + ' => ' + str);*/

//Генератор случайных чисел.
/*let rnd = Math.random();
console.log('rnd=' + rnd);*/

//Більш практична задача: ціле випадкове число від 1 до 10:
/*let rnd = Math.random();
rnd *= 10;
console.log(rnd)
rnd = Math.floor(rnd);
console.log(rnd);*/

/*
//Корисні функції з бібліотеки Math
Math.sqrt(x)		Повертає квадратний корінь із x.
Math.pow(x, exp)	Зводить число до ступеня
Math.abs(x)			Повертає абсолютне значення числа (модуль)
Math.max(a, b, c...)Повертає найбільший із списку аргументів
Math.min(a, b, c...)Повертає найменший зі списку аргументів
*/
