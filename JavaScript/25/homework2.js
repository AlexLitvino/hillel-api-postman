/*
Вам необхідно написати програму, яка буде визначати кінцеву ціну товару, за даними -  ціною та знижкою.

Створіть три змінні:

price - значення типу number

discount - значення типу number

priceAfterDiscount - повинна зберігати ціну зі знижкою
*/

// Оголосіть та ініціалізуйте свої зміні тут

export { price , discount , priceAfterDiscount }; // цей рядок не має змінюватись

let price;
let discount;
let priceAfterDiscount = price * (1 - discount);
