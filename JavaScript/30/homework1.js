/*
Напишіть функцію removeRepetition(), яка приймає строку і видаляє з неї будь-які подвоєння або потроєння букв.

Наприклад:
emmmmma → ema
*/

function removeRepetition(line){
    if(line.length === 1){
        return line;
    }

    let result = line[0];
    let current = line[0];
    for(let i = 1; i < line.length; i++){
        if (current !== line[i]){
            result += line[i];
            current = line[i];
        }
    }
    return result
}