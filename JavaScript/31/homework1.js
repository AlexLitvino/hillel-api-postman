/*
Опис задачі: Створіть об'єкт з назвою schoolClassInfo, який представляє інформацію про клас у школі. Він повинен містити наступну інформацію:

schoolName - назва школи, де буде зберігатися строкове значення.
address - адреса школи, де буде зберігатися строкове значення.
isPublicSchool - чи загальноосвітня школа, булеве значення.
class - вкладений об'єкт, який міститиме наступну інформацію:
className - ім'я класу, де буде зберігатися строкове значення.
mainTeacher - головний вчитель, де буде зберігатися строкове значення.
studentCount - кількість студентів, числове значення.
*/

let schoolClassInfo = {
    schoolName: "ZOSc 142",
    address: "Kharkiv",
    isPublicSchool: true,
    "class": {
        className: "7A",
        mainTeacher: "Ivanov I. I.",
        studentCount: 24
    }
};

console.log(typeof schoolClassInfo.schoolName);
console.log(typeof schoolClassInfo.address);
console.log(typeof schoolClassInfo.isPublicSchool);
console.log(typeof schoolClassInfo.class.className);
console.log(typeof schoolClassInfo.class.mainTeacher);
console.log(typeof schoolClassInfo.class.studentCount);
