/*
Завдання 2. Знижка при оплаті
Складність: Середня

Опис задачі:

Створіть програму, яка приймає оплату за товар наступними способами:

готівка: додаткова комісія не стягується.
картка: стягується додаткова комісія 2% від суми купівлі.
рахунок: стягується додаткова комісія 5% від суми купівлі.
Програма повина порахувати нову вартість товару з урахуванням знижки. Також подумайте про механізи якщо людина буде передавати щось інще окрім готівка, карта, рахунок.
*/

let paymentType = '';
let payment = 100;
let updatedPayment;

switch (paymentType){
    case 'cash':
        updatedPayment = payment;
        break;
    case 'card':
        updatedPayment = 1.02 * payment;
        break;
    case 'account':
        updatedPayment = 1.05 * payment;
        break;
    default:
        console.log("Unknown payment type");
        updatedPayment = null;
}
