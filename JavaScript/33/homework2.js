/*
Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.

Приклади
Вхід: ["hello", "world"]  → Вихід: ["Hello", "World"]

Вимоги

Функція повинна приймати масив рядків як аргумент.
Функція повинна повертати новий масив, де кожен рядок відформатований так, щоб перша літера була у верхньому регістрі, а решта літер - у нижньому регістрі.
Якщо масив порожній, функція повинна повернути порожній масив.
Вхідні дані завжди будуть масивом рядків.
*/
function capitalize(s){
    if (s === '') return '';

    let firstLetter = s[0].toUpperCase();
    let lastPart = s.slice(1).toLowerCase();
    return firstLetter + lastPart;
}


function capitalizeStrings(arr){
    let result = [];
    for (let i of arr){
        result.push(capitalize(i));
    }
    return result;
}

export default capitalizeStrings; // Не видаляти цей рядок
