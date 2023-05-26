"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const userNumber1 = prompt("Enter you number: ");
const userNumber2 = prompt("Enter you number: ");
const userNumber3 = prompt("Enter you number: ");

// 1 способ
// function maxNumber(num1, num2, num3) {
//   if (num1 > num2) {
//     if (num1 > num3) {
//       return num1;
//     } else return num3;
//   }
//   if (num2 > num3) {
//     return num2;
//   } else return num3;
// }
// console.log(maxNumber(userNumber1, userNumber2, userNumber3));
