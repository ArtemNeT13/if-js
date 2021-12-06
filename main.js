//lesson-2
//Работа с переменными
let user = "John Doe";
console.log(user);
let student = "Artem Ermachonak";
console.log(student);
user = student; //Artem Ermachonak
console.log(user);
console.log('\n');
//Работа с примитивами
let test = 1;
test += 1;
test = test + '1'; // 21
console.log(test);
test = test -  1; // 20
console.log(test);
Boolean(test); //true (right answer: 20)
console.log(test)
console.log('\n');

testMas = [2, 3, 5, 8];
let prMas = testMas[0];
for(let i = 1; i < testMas.length; i++){
    prMas = prMas * testMas[i];
}
console.log('произведение элементов этого массива: ' + prMas);
console.log('\n');

console.log('вывести в консоль те элементы массива, которые больше 5-ти, но меньше 10-ти');
testMas2 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i = 0; i < testMas2.length; i++){
    if(testMas2[i] > 5 && testMas2[i] < 10){
        console.log(testMas2[i]);
    }
}
console.log('\n');

console.log('вывести в консоль четные элементы массива');
let testMas3 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i = 0; i < testMas2.length; i++){
    if (testMas3[i] / 2 > 0 && testMas3[i] % 2 === 0){
        console.log(testMas3[i]);
    }
}