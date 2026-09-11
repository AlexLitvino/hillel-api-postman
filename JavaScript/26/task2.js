/**
 Опис задачі:

 Створіть програму, яка приймає оплату за товар наступними способами:

 1. готівка: додаткова комісія не стягується.
 2. картка: стягується додаткова комісія 2% від суми купівлі.
 3. рахунок: стягується додаткова комісія 5% від суми купівлі.

 Програма повина порахувати нову вартість товару з урахуванням знижки. Також подумайте про механізи якщо людина буде передавати щось інще окрім готівка,
 карта, рахунок.
 */

// Варіант 1
/*const paymentMethod = "картка";
const purchaseAmount = 1000;

let finalAmount;

switch (paymentMethod) {
    case "готівка":
        finalAmount = purchaseAmount;
        break;
    case "картка":
        finalAmount = purchaseAmount * 1.02;
        break;
    case "рахунок":
        finalAmount = purchaseAmount * 1.05;
        break;
    default:
        console.log("Помилка: Невідомий спосіб оплати");
        finalAmount = null;
}

console.log(finalAmount);
*/

// Варіант 2
/*
const paymentMethod = "картка";
const purchaseAmount = 1000;

let finalAmount;

if (paymentMethod === "готівка") {
    finalAmount = purchaseAmount;
} else if (paymentMethod === "картка") {
    finalAmount = purchaseAmount * 1.02;
} else if (paymentMethod === "рахунок") {
    finalAmount = purchaseAmount * 1.05;
} else {
    console.log("Помилка: Невідомий спосіб оплати");
    finalAmount = null;
}

console.log(finalAmount);*/
