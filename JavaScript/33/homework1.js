/*
Напишіть функцію sumArray, яка приймає масив чисел і повертає їх суму. Якщо масив порожній, функція повинна повернути 0.

Приклад

const arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr)); // Виведе 15
*/
// Напишіть ваш код тут
function sumArray(arr){
    let total = 0;
    for (let i of arr){
        total += i;
    }
    return total;
}

export default sumArray; // Не видаляти цей рядок
