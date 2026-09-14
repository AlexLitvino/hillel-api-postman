/*
Напишіть функцію countWords(), яка приймає рядок і повертає кількість слів у цьому рядку. Вважається, що слова розділені пробілами.

Наприклад:
“Test example qwerty” → поверне значення 3
*/

export default countWords; // Не видаляти цей рядок

function countWords(line){
    let count = 0;
    line = line.trim();
    let words = line.split(' ');
    for (const word of words){
        if (word !== ''){
            count++;
        }
    }

    return count;
}
