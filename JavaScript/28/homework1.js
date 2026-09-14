/*
Напишіть функцію isPrime(), яка приймає число і повертає true, якщо число є простим, і false — якщо ні.
Просте число — це натуральне число більше 1, яке має тільки два дільники: 1 і саме себе.
Інакше кажучи, просте число ділиться без залишку лише на 1 і на себе.
*/

export { isPrime }; // Не видаляти цей рядок

function isPrime(n){
    let result = true;

    if (n <= 1) {
        return false;
    }


    if( n == 2) {
        return true;
    }

    for(let i = 2; i <= Math.ceil(Math.sqrt(n)); i++){
        if (n % i === 0){
            result = false;
            break
        }
    }
    return result;
}
