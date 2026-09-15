//Функція - це ЗНАЧЕННЯ, таке саме, як number або string
/*function test() {
    console.log("Тестова функція!");
}

let x = "String value";
//x(); //Ошибка!
x = test;
x();
console.log('x=' + x);*/

//Відповідно - методом може бути і функція, оголошена будь-де!
/*function test(){
    console.log("Hello, world!");
}

let user = {
    login: 'root',
    sayHello: test
}

user.sayHello();*/

//Хотілося б, щоб МЕТОДИ об'єкта працювали з властивостями об'єкта.
/*let login = 'global login';
let sName = 'global sName';

let user = {
    login: "John",
    sName: "Dow",
    age: 25,
    greet: function (greet1) {
        console.log(greet1 + ', object! from ' + login + ' ' + sName); // Свойства это НЕ переменные!
        console.log(greet1 + ', object! from ' + user.login + ' ' + user.sName);
    }
}
user.greet('hello');*/

//this - контекст виконання.
/*let user={
    name: "John",
    sName: "Dow",
    age: 25,
    greet: function(greet){
        console.log(greet+', object! from '+this.name+' '+this.sName);
    }
}
user.greet('hello');*/

//Контекст залежить лише від того, звідки викликано функцію.
/*let login='global Login';
function test() {
    console.log('this.login=' + this.login);
}

test();//Помилка! Однак, варто вимкнути use strict...

//А тепер – фокус!
let user = {
    login: 'Вася',
    age: 25,
    sayHello: test
}
user.sayHello();*/

//"Жонглюємо" методами.
/*let user1 = {
    login: 'Вася',
    age: 25,
    getInfo: function () {
        console.log('my name is ' + this.login + ', my age=' + this.age)
    }
}

let user2 = {
    login: 'Петя',
    age: 25
}

user2.getInfo = user1.getInfo;

user1.getInfo();
user2['getInfo']();*/


//Як дізнатися, чи є в об'єкті необхідна нам властивість?
/*let user = {
    login: "JohnSnow",
    age: 25,
    admin: undefined
}
console.log("User second name: " + user.sName);
if (user.sName === undefined) {
    console.log('Такого свойства в объекте нет');
}*/

//Однак що робити із властивістю admin?
/*var user = {
    login: "JohnSnow",
    age: 25,
    admin: undefined
}*/

/*console.log('Перевіримо властивість "admin"');
if ("admin" in user)
    console.log("Є така властивість");
else
    console.log("немає такої властивості");*/

/*console.log('Перевіримо властивість "sName"');
if ("sName" in user)
    console.log("Є така властивість");
else
    console.log("немає такої властивості");*/

//Перебір властивостей об'єкту
/*let obj = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    7: "another",
    x: 12,
    y: 34,
    z: 45
}*/

//Чогось не вистачає, якщо використовувати методику роботи як з масивами, але...
/*for (let i = 0; i in obj; i++) {
    console.log(i + ': ' + obj[i]);
}*/

//А ось так краще, звісно. Новий for для нас!
/*for (let key in obj)
    console.log(key + ': ' + obj[key]);*/

// Об'єкт - тип посилання!
/*let user = {
    name: "John",
    age: 25,
    admin: true
}

let x = user;
// Тепер давайте подивимося на об'єкт юзер
for (const i in x) {
    console.log(x[i])
}

// А тепер змінимо об'єкт x та об'єкт user
x.admin = false;
user.age = 105;

console.log("User is:");

console.log(x);
console.log(user);*/

// І трошки про методи для роботи з об'єктом
// Метод keys - повертає всі ключі об'єкта
/*const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    print: function (){
        console.log(this.groupName);
    },
    get studentCount() {
        return this.students;
    },
    set count(count){
        this.students = count;
    }
}

let keys = Object.keys(group);
console.log(keys);*/

// Ітерація ключів за допомогою forEach
/*
Object.keys(group).forEach(key => {
    console.log(key, group[key]);
});
*/

// Метод values - повертає всі значення об'єкта
/*const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    print: function (){
        console.log(this.groupName);
    },
    get studentCount() {
        return this.students;
    },
    set count(count){
        // this.students = count;
    }
}

let values = Object.values(group);
console.log(values);*/

// Ітерація значень за допомогою forEach
/*Object.values(group).forEach(value => {
    console.log(value);
});*/

// Метод entries - повертає пари ключ значення
/*const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    print: function (){
        console.log(this.groupName);
    },
    get studentCount() {
        return this.students;
    },
    set count(count){
        this.students = count;
    }
}

let values = Object.entries(group);
console.log(values);

// Ітерація entries за допомогою forEach

Object.entries(group).forEach(([key, value]) => {
    console.log(key, value);
});*/
