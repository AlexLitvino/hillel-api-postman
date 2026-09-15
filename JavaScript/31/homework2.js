/*
Опис задачі: Припустимо, у нас є об'єкт hairSalon. Властивості об'єкта - назва послуги та її вартість:

const hairSalon = {
	haircut:"100 грн",
	shaving:"50 грн",
	washHair: "50 грн"
}
"Послуги" можуть додаватися по ходу роботи: services['clean shoes'] = "200 грн"
Уявімо що формат value в обєкті, завжди буде “число грн” - “100 грн”
Умови виконання:

Створіть функцію totalPrice(object), яка може приймати аргумент у вигляді об'єкту hairSalon та обчислювати і повертати загальну вартість "наданих послуг".
Метод повинен повертати число.
*/

const hairSalon = {
	haircut:"100 грн",
	shaving:"50 грн",
	washHair: "50 грн"
}

// Напишіть ваш код тут
function totalPrice(obj){
    let total = 0;
    for (let key in obj){
        let value = obj[key];
        value = Number(value.split(' ')[0]);
        total += value;
    }
    return total;
}

export { hairSalon, totalPrice }; // Не видаляти цей рядок
