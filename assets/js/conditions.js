// Розгалуження
// if - умовний оператор, розгалуженний

// const isOnline = false;

// debugger;
// if (isOnline){
//     document.write(`<p>Користуч в мережі</p>`)
// }else{
//     document.write(`<p>Користуч не в мережі</p>`)
// }

// Task: Задана змінна
// const isEnoughMoney = true;
// Якщо грошей достатньо, вивести “Операцію схвалено)”
// Якщо недостатньо, то вивести “Операцію відхилено(”

// const isEnoughMoney = true;

// if (isEnoughMoney){
//     console.log("Операцію схвалено)")
// } else {
//     console.log("Операцію відхилено(");
// }

// console.log(color);

// if (isOnline){
//     document.write(`<p>Користуч в <span style="color:${color};">мережі</span></p>`)
// }else{
//     document.write(`<p>Користуч <span style="color:${color};">не в мережі</span></p>`)
// }

// const isOnline = true;

// let color = null;
// let status = null;

// if(isOnline){
//     color = "green";
//     status = "online";
// } else {
//     color = "red";
//     status = "offline"
// }

// document.write(`<p> User is <span style="color:${color};">${status}</span></p>`);

// const isOnline = true;
// const color = isOnline ? "green" : "red";
// const status = isOnline ? "online" : "offline";
// document.write(`<p> User is <span style="color:${color};">${status}</span></p>`);
// console.log(color, status);

// const age = +prompt("Скільки вам років?")

// if (age >= 18){
//     console.log("Старік");
// } else{
//     console.log("Пити не можна!");
// }

// const RIGHT_NUMBER = 2;
// const guessnumber = +prompt('Вкажіть число')

// if (RIGHT_NUMBER === guessnumber){
//     document.write("<p>Ви вгадали число</p>")
// } else {
//     document.write("<p>Ви не вгадали число</p>")
// }

// const RIGHT_NUMBER = 2;
// const guessnumber = +prompt('Вкажіть число')

// const isRightNumber = RIGHT_NUMBER === guessnumber;

// document.write(`<p>Ви ${isRightNumber ? "" : "не"}вгадали число</p>`);

// Ввести 2 числа і знак операції.
// Якщо введено "+", то порахувати і вивести суму цих чисел,
// інакше вивести їхню різницю

// const firstNumber = +(prompt("Введіть перше число"));
// const secondNumber = +(prompt("Введіть друге число"));
// const sumbol = prompt("Введіть символ");

// if (sumbol === "+") {
//   document.write(firstNumber + secondNumber);
// } else {
//   document.write(firstNumber - secondNumber);
// }

// const firstNumber = +(prompt("Введіть перше число"));
// const secondNumber = +(prompt("Введіть друге число"));
// const sumbol = prompt("Введіть символ");

// const result = (sumbol === "+") ? (firstNumber + secondNumber) : (firstNumber - secondNumber);

// document.write(result);

// const firstNumber = +(prompt("Введіть перше число"));
// const secondNumber = +(prompt("Введіть друге число"));
// const sumbol = prompt("Введіть символ");

// if (sumbol === "+") {
//   document.write(firstNumber + secondNumber);
// } else if (sumbol === "-"){
//     document.write(firstNumber - secondNumber);
// } else if (sumbol === "*"){
//     document.write(firstNumber * secondNumber)
// } else {
//   document.write('Некоректний знак операції!!!!');
// }

// const firstNumber = +(prompt("Введіть перше число"));
// const secondNumber = +(prompt("Введіть друге число"));
// const sumbol = prompt("Введіть символ");

// const result = sumbol === "+" ? firstNumber + secondNumber : sumbol === "-" ? firstNumber - secondNumber : sumbol === "*" ? firstNumber * secondNumber : 'Некоректний знак операції!!!!';
// document.write(result);


// const isMale = false;
// const isMarried = false;
// const name = 'Test';
// let = appeal = "";


// if (isMale){
//     appeal = "Mr";
// } else if (isMarried){
//     appeal = "Mrs";
// } else {
//     appeal = "Ms";
// }
// document.write(`<p>Hello ${appeal} ${name}</p>`)

// const userAge = 17;
// const fullPrice = 500;
// let discount = 0;

// if (userAge < 18 || userAge > 65) {
//   discount = 100;
// }

// resultPrice = fullPrice - discount;
// document.write(`<p>${resultPrice}</p>`);

const day = 'friday';
const date = 13;

if (day === 'friday' && date === 13){
    document.write('Вітаємо, у вас є знижка 100%')
}