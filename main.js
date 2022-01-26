// //                                                  lesson-2
// //Работа с переменными
// console.log('LESSON-2');
// let user = "John Doe";
// console.log(user);
// let student = "Artem Ermachonak";
// console.log(student);
// user = student; //Artem Ermachonak
// console.log(user);
// console.log('\n');
// //Работа с примитивами
// let test = 1;
// test += 1;
// test = test + '1'; // 21
// console.log(test);
// test = test -  1; // 20
// console.log(test);
// Boolean(test); //true (right answer: 20)
// console.log(test)
// console.log('\n');
//
// testMas = [2, 3, 5, 8];
// let prMas = testMas[0];
// for(let i = 1; i < testMas.length; i++){
//     prMas = prMas * testMas[i];
// }
// console.log('произведение элементов этого массива: ' + prMas);
//
// console.log('\n');
//
// console.log('вывести в консоль те элементы массива, которые больше 5-ти, но меньше 10-ти');
// testMas2 = [2, 5, 8, 15, 0, 6, 20, 3];
// for(let i = 0; i < testMas2.length; i++){
//     if(testMas2[i] > 5 && testMas2[i] < 10){
//         console.log(testMas2[i]);
//     }
// }
// console.log('СПОСОБ №2:')
// for(let i of testMas2){
//     if(i > 5 && i < 10){
//         console.log(i);
//     }
// }
// console.log('\n');
//
// console.log('вывести в консоль четные элементы массива');
// let testMas3 = [2, 5, 8, 15, 0, 6, 20, 3];
// for(let i = 0; i < testMas2.length; i++){
//     if (testMas3[i] % 2 === 0){
//         console.log(testMas3[i]);
//     }
// }
// console.log("СПОСОБ №2:");
// for(let i of testMas3){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }
//                                                  // lesson-3
// console.log('\n');
// console.log('LESSON-3');
// console.log('\n');
// console.log('Функция palindrome, которая возвращает bool значение.');
// let str = 'madam';
// str = str.toLowerCase();
// function polindrom(str){
//    if(str.length === 1) {
//        return true;
//    }
//    if(str.length === 2) {
//        return str[0] === str[1];
//    }
//    if(str[0] === str.slice(-1)) {
//        return polindrom(str.slice(1, -1))
//    }
//     return false;
// }
// console.log(`Слово ${str} полиндром: ${polindrom(str)}`);
//
// console.log('\n');
// console.log(`Функция min(a,b), которая возвращает меньшее из чисел.`);
// function  minValue(a, b){
//     if (a < b){return a;}
//     return b;
// }
// console.log(`Минимальное число: ${minValue(3, 5)}`);
// console.log(`Способ №2. Тернарный оператор.`);
// function  minValue2(a, b){
//     return (a < b) ? a : b;
// }
// console.log(`Минимальное число: ${minValue2(3, 5)}`);
//
// console.log(`Функция max(a,y), которая возвращает большее из чисел.`);
// function  maxValue(a, y){
//     if (a > y){return a;}
//     return y;
// }
// console.log(`Максимальное число: ${maxValue(3, 5)}`);
// console.log(`Способ №2. Тернарный оператор.`);
// function  maxValue2(a, y){
//     return (a > y) ? a : y;
// }
// console.log(`Максимальное число: ${maxValue2(3, 5)}`);
//
// console.log('\n');
// console.log('Замена элементов массива.');
// let newMas = [];
// const lowLimit = 0;
// const highLimit = 100;
// for(let i = 0; i < 10; i++){
//     newMas.push(Math.floor(Math.random() * (highLimit + 1) + Math.ceil(lowLimit)));
// }
// console.log(`Массив из 10-и случайных чисел от 0 до 100:`)
// console.log(newMas);
// function funZero(newArray){
//     let zeroMas = [];
//     for(let elementArray of newArray){
//         if(elementArray.toString().includes("0")){
//             elementArray = elementArray.toString();
//         let reg = `0`;
//         elementArray = elementArray.replaceAll(reg, "zero");
//     }
//         zeroMas.push(elementArray);
//     }
//     return zeroMas;
// }
// console.log(`Замена нулей на 'zero' при помощи функции:`)
// console.log(funZero(newMas));



                                                    // lesson-4
// Напишите функцию sum, которая возвращает сумму чисел следующим образом:
// console.log(sum(5)(2)); // 7

// const curry = fun => valueA => valueB => (fun(valueA, valueB));
// // использование
// const funSum = (valueA, valueB) => valueA + valueB;
// let sum = curry(funSum);
// let num1 = 5;
// let num2 = 8;
// console.log(sum(num1)(num2));
//
// module.exports = funSum;

// //Покрасьте абзацы по клику.
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// //method №1
// function changeColor(color){
//     let index;
//     const currentColorIndex = colors.indexOf(color);
//     if(currentColorIndex === colors.length - 1 || currentColorIndex === -1){
//         index = 0;
//     } else {
//         index = currentColorIndex + 1;
//     }
//     return colors[index];
// }
// document.getElementById("text1").addEventListener('click', (event) => {
//     event.preventDefault();
//     event.target.style.color = changeColor(event.target.style.color);
// });
//
// //method №2
// function changeColor2(){
//         let indexText2 = 0;
//         return function () {
//             if ( indexText2 === colors.length) {
//                 document.getElementById('text2').style.color = 'black';
//                 indexText2 = 0;
//             } else {
//                 document.getElementById('text2').style.color = colors[indexText2];
//                 indexText2++;
//             }
//         }
// }
// document.getElementById("text2").addEventListener('click', changeColor2());
//
// //method №3
// let newText3 = document.getElementById("text3");
// function changeColor3 () {
//     let color = 0;
//     return function () {
//         this.style.color = colors[color];
//         color++;
//         if (color === colors.length) {
//             color = 0;
//         }
//     }
// }
// newText3.addEventListener('click', changeColor3());

                                                    // lesson-5

//Преобразование формата даты:
// let data = '2020-11-26';
// console.log(`Первоначальный вид даты: ${data}`);
//
// function transformData(startData){
//     let newData = [];
//     let arrayData = data.split(/(-)/);
//     for(let i = arrayData.length - 1; i >= 0; i--){
//         if(arrayData[i] === '-'){
//             newData.push('.');
//         } else{
//             newData.push(arrayData[i]);
//         }
//     }
//     return newData.join('');
// }
// console.log(`Преобразоавнный вид даты: ${transformData(data)}`);
// console.log(`\n`)
// //Поиск объектов размещения:
// console.log(`Результат поиска:`);
// const dataBase = [
//     {
//         country: 'Russia',
//         city: 'Saint Petersburg',
//         hotel: 'Hotel Leopold',},
//     {
//         country: 'Spain',
//         city: 'Santa Cruz de Tenerife',
//         hotel: 'Apartment Sunshine',},
//     {
//         country: 'Slowakia',
//         city: 'Vysokie Tatry',
//         hotel: 'Villa Kunerad',},
//     {
//         country: 'Germany',
//         city: 'Berlin',
//         hotel: 'Hostel Friendship',},
//     {
//         country: 'Indonesia',
//         city: 'Bali',
//         hotel: 'Ubud Bali Resort&SPA',},
//     {
//         country: 'Netherlands',
//         city: 'Rotterdam',
//         hotel: 'King Kong Hostel',},
//     {
//         country: 'Marocco',
//         city: 'Ourika',
//         hotel: 'Rokoko Hotel',},
//     {
//         country: 'Germany',
//         city: 'Berlin',
//         hotel: 'Hotel Rehberge Berlin Mitte',
//     },
// ];
//
// function search(select, array) {
//     let matches = [];
//     const foundWord = select.toLowerCase();
//     for (let hotelData of array) {
//         for (let value of Object.values(hotelData)) {
//             if (value.toLowerCase().includes(foundWord)) {
//                 matches.push(Object.values(hotelData).join(' '));
//             }
//         }
//     }
//     return matches;
// }
// console.log(search("Hotel", dataBase));

                                                    // lesson-6
// console.log('Функция palindrome, которая возвращает bool значение.');
// let str = 'шалаш';
// function polindromStr(someStr){
//     someStr = someStr.toLowerCase();
//     if(someStr.split('').reverse().join('') === someStr){
//         return true;
//     }    return false;
// }
// console.log(`Слово ${str} полиндром: ${polindromStr(str)}`);
//
//
// //Поиск объектов размещения:
// const arrHotels = [
//     {
//         name: 'Hotel Leopold',
//         city: 'Saint Petersburg',
//         country: 'Russia',
//     },
//     {
//         name: 'Apartment Sunshine',
//         city: 'Santa Cruz de Tenerife',
//         country: 'Spain',
//     },
//     {
//         name: 'Villa Kunerad',
//         city: 'Vysokie Tatry',
//         country: 'Slowakia',
//     },
//     {
//         name: 'Hostel Friendship',
//         city: 'Berlin',
//         country: 'Germany',
//     },
//     {
//         name: 'Radisson Blu Hotel',
//         city: 'Kyiv',
//         country: 'Ukraine',
//     },
//     {
//         name: 'Paradise Hotel',
//         city: 'Guadalupe',
//         country: 'Mexico',
//     },
//     {
//         name: 'Hotel Grindewald',
//         city: 'Interlaken',
//         country: 'Switzerland',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Virgin Hotel',
//         city: 'Chicago',
//         country: 'USA',
//     },
//     {
//         name: 'Grand Beach Resort',
//         city: 'Dubai',
//         country: 'United Arab Emirates',
//     },
//     {
//         name: 'Shilla Stay',
//         city: 'Seoul',
//         country: 'South Korea',
//     },
//     {
//         name: 'San Firenze Suites',
//         city: 'Florence',
//         country: 'Italy',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Black Penny Villas',
//         city: 'BTDC, Nuca Dua',
//         country: 'Indonesia',
//     },
//     {
//         name: 'Koko Hotel',
//         city: 'Tokyo',
//         country: 'Japan',
//     },
//     {
//         name: 'Ramada Plaza',
//         city: 'Istanbul',
//         country: 'Turkey',
//     },
//     {
//         name: 'Waikiki Resort Hotel',
//         city: 'Hawaii',
//         country: 'USA',
//     },
//     {
//         name: 'Puro Hotel',
//         city: 'Krakow',
//         country: 'Poland',
//     },
//     {
//         name: 'Asma Suites',
//         city: 'Santorini',
//         country: 'Greece',
//     },
//     {
//         name: 'Cityden Apartments',
//         city: 'Amsterdam',
//         country: 'Netherlands',
//     },
//     {
//         name: 'Mandarin Oriental',
//         city: 'Miami',
//         country: 'USA',
//     },
//     {
//         name: 'Concept Terrace Hotel',
//         city: 'Rome',
//         country: 'Italy',
//     },
//     {
//         name: 'Ponta Mar Hotel',
//         city: 'Fortaleza',
//         country: 'Brazil',
//     },
//     {
//         name: 'Four Seasons Hotel',
//         city: 'Sydney',
//         country: 'Australia',
//     },
//     {
//         name: 'Le Meridien',
//         city: 'Nice',
//         country: 'France',
//     },
//     {
//         name: 'Apart Neptun',
//         city: 'Gdansk',
//         country: 'Poland',
//     },
//     {
//         name: 'Lux Isla',
//         city: 'Ibiza',
//         country: 'Spain',
//     },
//     {
//         name: 'Nox Hostel',
//         city: 'London',
//         country: 'UK',
//     },
//     {
//         name: 'Leonardo Vienna',
//         city: 'Vienna',
//         country: 'Austria',
//     },
//     {
//         name: 'Adagio Aparthotel',
//         city: 'Edinburgh',
//         country: 'UK',
//     },
//     {
//         name: 'Steigenberger Hotel',
//         city: 'Hamburg',
//         country: 'Germany',
//     },
// ];
//
// function search(select) {
//     let matches = [];
//     const foundWord = select.toLowerCase();
//     for (let element of arrHotels) {
//         for (let key of Object.values(element)) {
//             if (key.toLowerCase().includes(foundWord)) {
//                 matches.push(Object.values(element).join(' '));
//             }
//         }
//     }
//     return matches;
// }
// console.log(search("Hotel"));
//
// const hotelsArr = [
//     {
//         name: 'Hotel Leopold',
//         city: 'Saint Petersburg',
//         country: 'Russia',
//     },
//     {
//         name: 'Apartment Sunshine',
//         city: 'Santa Cruz de Tenerife',
//         country: 'Spain',
//     },
//     {
//         name: 'Villa Kunerad',
//         city: 'Vysokie Tatry',
//         country: 'Slowakia',
//     },
//     {
//         name: 'Hostel Friendship',
//         city: 'Berlin',
//         country: 'Germany',
//     },
//     {
//         name: 'Radisson Blu Hotel',
//         city: 'Kyiv',
//         country: 'Ukraine',
//     },
//     {
//         name: 'Paradise Hotel',
//         city: 'Guadalupe',
//         country: 'Mexico',
//     },
//     {
//         name: 'Hotel Grindewald',
//         city: 'Interlaken',
//         country: 'Switzerland',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Virgin Hotel',
//         city: 'Chicago',
//         country: 'USA',
//     },
//     {
//         name: 'Grand Beach Resort',
//         city: 'Dubai',
//         country: 'United Arab Emirates',
//     },
//     {
//         name: 'Shilla Stay',
//         city: 'Seoul',
//         country: 'South Korea',
//     },
//     {
//         name: 'San Firenze Suites',
//         city: 'Florence',
//         country: 'Italy',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Black Penny Villas',
//         city: 'BTDC, Nuca Dua',
//         country: 'Indonesia',
//     },
//     {
//         name: 'Koko Hotel',
//         city: 'Tokyo',
//         country: 'Japan',
//     },
//     {
//         name: 'Ramada Plaza',
//         city: 'Istanbul',
//         country: 'Turkey',
//     },
//     {
//         name: 'Waikiki Resort Hotel',
//         city: 'Hawaii',
//         country: 'USA',
//     },
//     {
//         name: 'Puro Hotel',
//         city: 'Krakow',
//         country: 'Poland',
//     },
//     {
//         name: 'Asma Suites',
//         city: 'Santorini',
//         country: 'Greece',
//     },
//     {
//         name: 'Cityden Apartments',
//         city: 'Amsterdam',
//         country: 'Netherlands',
//     },
//     {
//         name: 'Mandarin Oriental',
//         city: 'Miami',
//         country: 'USA',
//     },
//     {
//         name: 'Concept Terrace Hotel',
//         city: 'Rome',
//         country: 'Italy',
//     },
//     {
//         name: 'Ponta Mar Hotel',
//         city: 'Fortaleza',
//         country: 'Brazil',
//     },
//     {
//         name: 'Four Seasons Hotel',
//         city: 'Sydney',
//         country: 'Australia',
//     },
//     {
//         name: 'Le Meridien',
//         city: 'Nice',
//         country: 'France',
//     },
//     {
//         name: 'Apart Neptun',
//         city: 'Gdansk',
//         country: 'Poland',
//     },
//     {
//         name: 'Lux Isla',
//         city: 'Ibiza',
//         country: 'Spain',
//     },
//     {
//         name: 'Nox Hostel',
//         city: 'London',
//         country: 'UK',
//     },
//     {
//         name: 'Leonardo Vienna',
//         city: 'Vienna',
//         country: 'Austria',
//     },
//     {
//         name: 'Adagio Aparthotel',
//         city: 'Edinburgh',
//         country: 'UK',
//     },
//     {
//         name: 'Steigenberger Hotel',
//         city: 'Hamburg',
//         country: 'Germany',
//     },
// ];
//
// function searchCity(array) {
//     return array.reduce((acc, item) => {
//         if (!acc.hasOwnProperty(item.country)) {
//             acc[item.country] = [item.city];
//         } else {
//             if(!acc[item.country].includes(item.city)){
//             acc[item.country].push(item.city);
//             }
//         }
//         return acc;
//     }, {})
// }
// console.log(searchCity(hotelsArr));
//
// function sortHot(arr){
//
// }
// //способ 2
// const cityInCountry = {};
// hotelsArr.forEach((el) => {
//     if (cityInCountry[el.country] && !cityInCountry[el.country].includes(el.city)) {
//         cityInCountry[el.country].push(el.city);
//     } else {
//         cityInCountry[el.country] = [el.city];
//     }
// })
//
// console.log(cityInCountry);

                                                    //LESSON-7
// const obj1 = {
//     a: 'a',
//     b: {
//         a: 'a',
//         b: 'b',
//         c: {
//             a: 1,
//         },
//     },
// };
// const obj2 = {
//     b: {
//         c: {
//             a: 1,
//         },
//         b: 'b',
//         a: 'a',
//     },
//     a: 'a',
// };
// const obj3 = {
//     a: {
//         c: {
//             a: 'a',
//         },
//         b: 'b',
//         a: 'a',
//     },
//     b: 'b',
// };
//
// const deepEqual = (object1, object2) => {
//     const props1 = Object.getOwnPropertyNames(object1);
//     const props2 = Object.getOwnPropertyNames(object2);
//
//     if (props1.length !== props2.length) {
//         return false;
//     }
//
//     for (let i = 0; i < props1.length; i ++) {
//         const prop = props1[i];
//         const bothAreObjects =
//             typeof(object1[prop]) === 'object' && typeof(object2[prop]) === 'object';
//
//         if ((!bothAreObjects && (object1[prop] !== object2[prop]))
//             || (bothAreObjects && !deepEqual(object1[prop], object2[prop]))) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(deepEqual(obj1, obj2));
// console.log(deepEqual(obj1, obj3));
//
//
//                                                    // LESSON-8
// //пузырьковая сортировка
// const arr = [11,82,23,6,48,12,13,55,45,39,76,88,37];
// console.log(arr);
// function sort (a) {
//     for (let i = 0; i < a.length - 1; i++){
//         for(let j = 0; j < a.length - 1 - i; j++){
//             if(a[j] > a[j + 1]){
//                 let tmp = a[j];
//                 a[j] = a[j + 1];
//                 a[j + 1] = tmp;
//             }
//         }
//     }
//     return a;
// }
// console.log(sort(arr));
//
//
// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
//
// class Student extends User{
//     constructor({firstName, lastName, admissionYear, courseName}){
//         super (firstName, lastName);
//         this.admissionYear = admissionYear;
//         this.courseName = courseName;
//     }
//     get course(){
//         let xYear = new  Date().getFullYear();
//         return xYear - this.admissionYear;
//     }
// }
//
// class Students {
//     constructor(students) {
//         this.students = students;
//     }
//
//     getInfo() {
//         this.students.sort((a, b) => a.course - b.course);
//         return this.students.forEach((student) => {
//             console.log(
//                     `${student.getFullName()} - ${student.courseName}, ${student.course} курс`
//             );
//         });
//     }
// }
//
// const studentsData = [
//     {
//         firstName: 'Василий',
//         lastName: 'Петров',
//         admissionYear: 2019,
//         courseName: 'Java',
//     },
//     {
//         firstName: 'Иван',
//         lastName: 'Иванов',
//         admissionYear: 2018,
//         courseName: 'JavaScript',
//     },
//     {
//         firstName: 'Александр',
//         lastName: 'Федоров',
//         admissionYear: 2017,
//         courseName: 'Python',
//     },
//     {
//         firstName: 'Николай',
//         lastName: 'Петров',
//         admissionYear: 2019,
//         courseName: 'Android',
//     }
// ];
//
// const studentInstances = studentsData.map((student) => new Student(student));
// const students = new Students(studentInstances);
// students.getInfo();

//                                                  LESSON-9

let newText1 = document.getElementById("text1");
let newText2 = document.getElementById("text2");
let newText3 = document.getElementById("text3");

const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        return this.data;
    },

    next(){
        if (this.current === undefined) {
            this.current = 0;
        }

        if(this.current < this.data.length){
            return {done: false, value: this.data[this.current++]};
        }

        if(this.current === this.data.length){
            this.current = 0
            return this.next();
        }
        return {done: true};

    },
};

const changeStyle  = colors => event => {
    event.target.style.color = colors.next().value;
};

newText1.addEventListener('click', changeStyle(colors));
newText2.addEventListener('click', changeStyle(colors));
newText3.addEventListener('click', changeStyle(colors));









