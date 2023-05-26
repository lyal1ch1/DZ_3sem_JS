"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

function getCubeNumber(num) {
  const cubeNum = Math.pow(num, 3);
  return cubeNum;
}
const userNumber = +prompt("Enter you number: ");
console.log(getCubeNumber(userNumber));
