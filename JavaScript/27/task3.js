/**
 Напишіть програму, яка буде мати дві змінні:

 - totalWorkHours - кількість годин, напрацьованих за день,
 - pricePerHour - розмір годинної ставки.

 Програма має обчислити та вивести оплату за день. Задачу необхідно вирішити тільки за допомогою циклу.
 */

let totalWorkHours = 8;
let pricePerHour = 15;
let totalPay = 0;

for (let i = 0; i < totalWorkHours; i++) {
    totalPay += pricePerHour;
}

console.log("Оплата за день: " + totalPay + " грн");