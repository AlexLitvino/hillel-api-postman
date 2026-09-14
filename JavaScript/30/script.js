// Методи String
//Найпростіший рядок
/*let str = "Бачиш лапки - значить це рядок";
console.log(str);
console.log('І не важливо, які саме лапки');
console.log(str);*/

//Екранування спеціальних символів
/*let str="Особливі символи на кшталт \"лапок\"\n" +
    "або, власне, символу \\";
console.log(str);*/

// length - вказує на кількість символів (для рядка)
/*const myString = "Hello, world!";
console.log(myString.length);*/

// charAt - дозволяє отримати символ за певним індексом у рядку.
/*const str = "Hello, world!";
console.log(str.charAt(0));
console.log(str.charAt(6));
console.log(str.charAt(13)); // Пустий рядок
*/

//А тепер докладніше. charAt()
/*let str = "Якийсь рядок просто для прикладу";
console.log(str);
console.log("Символ номер три: " + str.charAt(3));
console.log("Те саме по іншому: " + str[3]);*/

//І не обов'язково бути змінною

/*
console.log("я також рядок".charAt(20)); //пустий рядок
console.log("я також рядок"[20]); //undefined
*/

// charAt() та for
/*let str = "Hello, World!";

for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}*/

// repeat - дозволяє повторити вміст рядка декілька разів і створити новий рядок
/*const str = "QA pro ";
const repeatStr = str.repeat(3);
console.log(repeatStr);*/

// Всім відома конкатенація
/*let str = 'QA ';
console.log(str.concat('Pro!'));
console.log(str.concat('Pro!', ' in Hillel school!'));*/

// endWith - використовується для перевірки, чи закінчується рядок заданим підрядком.
/*const str = "script.js";
console.log(str.endsWith(".js"));
console.log(str.endsWith("script"));
console.log(str.endsWith("js", 6)); //  параметр, який вказує довжину основного рядка, яку слід враховувати при пошуку.
console.log(str.endsWith("js", 9));
console.log(str.endsWith('ript',6))*/

// includes - дозволяє перевірити, чи міститься певний підрядок (для рядків)
/*const str = "Hello, world!";
console.log(str.includes("world"));
console.log(str.includes("World"));
console.log(str.includes("world", 8)); // позицію, з якої почати пошук
console.log(str.includes("world", 7));*/

// indexOf - дозволяє знайти індекс першого входження певного підрядка у вихідному рядку.
/*const str = "Hello, world!";
console.log(str.indexOf("world"));
console.log(str.indexOf("World")); // А ось тут цікаво !
console.log(str.indexOf("o", 5));
console.log(str.indexOf("o", 9));*/

//lastIndexOf
/*const str = "Hello, world!";
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));*/

//padStart/padEnd - - це методи для рядків в JavaScript,
// які використовуються для додавання додаткових символів
// (зазвичай пробіли) до початку або кінця рядка
/*console.log('example'.padStart(8));
console.log('example'.padEnd(8));
console.log('example'.padStart(8,'*'));
console.log('example'.padEnd(8,'*'));*/

// trim, trimStart, trimEnd - це методи для рядків які використовуються
// для видалення пробілів.
/*
console.log('   hello'.trimStart());
console.log('hello   '.trimEnd());
console.log('  hello  '.trim());
*/

// toLowerCase/toUpperCase - це методи для рядків які використовуються для зміни регістру символів у рядку.
/*var str = "Ось така дивна строчка";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log("І один у полі воїн"[3].toUpperCase());
console.log("  А ще можна Ось так  ".toUpperCase().trim().concat("!"))*/

// replace -  використовується для заміни певного підрядка або паттерну
// у вихідному рядку іншим рядком або значенням
//У рядку не можна нічого змінити
/*let str = "рядок";
console.log("str[4]=" + str[4]);
str[5] = "F";   //Помилка
console.log(str);*/
//Ну а якщо ДУЖЕ хочеться? (практика)
/*let str = "Якийсь рядок просто для прикладу";
let res = str.replace(' ', '_');
console.log(res);
console.log(str);
let replaceAll = str.replaceAll('','*');
console.log(replaceAll);*/

//substring/substr/slice - ці методи дозволяють вам вирізати частину рядка,
// починаючи з певного індексу і закінчуючи іншим індексом.
//У найпростішому випадку всі три працюють однаково
/*let str = "стрибок з хитроперепідвивертом";
console.log(str.substr(9));
console.log(str.substring(9));
console.log(str.slice(9));*/


//Негативний аргумент
/*let str = "стрибок з хитроперепідвивертом";
console.log(str.substr(-9)); //відраховує з кінця
console.log(str.substring(-9)); //з нуля
console.log(str.slice(-9)); //відраховує з кінця*/


//Другий аргумент
/*let str = "стрибок з хитроперепідвивертом";
console.log(str.substr(10, 14)); // другий аргумент - довжина
console.log(str.substring(10, 14)); // другий аргумент – номер символу
console.log(str.slice(10, 14)); //  другий аргумент – номер символу*/

// А якщо відємне ?
/*let str = "стрибок з хитроперепідвивертом";
console.log(str.substring(9, -1)); //  -1<9 вони міняються місцями. Крім того -1 наводиться до 0
console.log(str.substr(9, -2)); //Взагалі гадає не розуміє відємне число, тобто в мене міє 9 та -2 нічого не має - пустий рядок
console.log(str.slice(9, -1)); // Бере значення з кінця*/

// split використовується для розбиття рядка на масив підрядків на основі заданого роздільника.
/*
let str = "Hello World JavaScript";
let words = str.split(" ");
console.log(words);
console.log(words.length);
*/

// Обмеження кількості елементів
/*let str = "one, two, three, four";
let parts = str.split(", ", 2);
console.log(parts); // Виведе: ["one", "two"]*/


//Якщо роздільник є порожнім рядком "", метод split розіб'є рядок на окремі символи.
/*let str = "hello";
let chars = str.split("");
console.log(chars); // Виведе: ["h", "e", "l", "l", "o"]*/


