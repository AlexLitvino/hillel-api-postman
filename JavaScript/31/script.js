"use strict"
/**
 Об'єкт в JavaScript - це складний тип даних, який дозволяє зберігати колекцію значень та функцій,
 що пов'язані між собою. Об'єкти дозволяють організовувати дані у вигляді пар ключ-значення,
 де кожен ключ - це рядок (іноді називають "властивість"),
 а значення може бути різного типу даних, включаючи інші об'єкти, масиви, числа, рядки, функції тощо.
 */

/*let user = {
    name: "John",
    sName: "Snow"
};

console.log(user.name);
console.log(user['sName']);

//"через точку" можна не тільки звертатися до властивостей, але і "створювати" їх
user.age = 25;

console.log(typeof user);
console.log(user.name + " " + user.sName);
console.log("User age= " + user.age);*/

// Ми можемо замінити властивість на інше значення
/*let user = {
    name: "John",
    sName: "Snow"
};
user.sName = 'Dou';
console.log(user.sName);*/

// Якщо ми можемо додавати, змінювати нові властивості, то як нам їх видаляти
/*let user = {
    name: "John",
    sName: "Snow"
};

delete user.sName;
console.log(user.sName);*/

//Властивістю об'єкта може бути інший об'єкт!
/*var obj = {
    name: 'Test',
    lastName: 'Test',
    credentials: {
        login: "test.test",
        password: 'Test123'
    }
}
console.log(obj.name);
console.log(obj.credentials);
console.log(obj.credentials.login);*/

// Дуже цікава штука обчислювані імена властивостей
/*let userType = 'admin';
let obj = {
    name: 'Test',
    lastName: 'Test',
    credentials: {
        login: "test.test",
        password: 'Test123'
    },
    [userType]:true
}
console.log(obj[userType]);*/


// Властивістю об'єкта може навіть функція, точніше сказати метод
/*let group = {
    name: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo: function () {
        console.log('Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor);
    }
}

group.teachersInfo();*/

// Інший спосіб запису, для нас в цілому нічого не зміниться!
/*var group = {
    name: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo () {
        return 'Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor;
    }
}

console.log(group.teachersInfo());*/

// Цілком собі законі та всім відомі гетери та сетери
/*var group = {
    name: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo() {
        return 'Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor;
    },
    getName() {
        return this.name;
    },
    setName(name) {
        this.name = name;
    }
}
console.log(group.getName());
group.setName('Cucucu');
console.log(group.getName());*/

// Але є також два цікавих методи! get, set !!
/*const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    get studentCount() {
        return this.students;
    }
}
// Виглядає як звичайна властивість, але це не властивість
console.log(group.studentCount);
group.studentCount = 'Alex'; // Cannot set property teachersInfo of #<Object> which has only a getter*/

// Додамо set
/*const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    get studentCount() {
        return this.students;
    },
    set studentCount(count){
        this.students = count;
    }
}
console.log(group.studentCount);
group.studentCount = 44;
console.log(group.studentCount);*/


