

let sideA=+prompt("Введите сторону A ");
let sideB=+prompt("Введите сторону B ");
let sideC=+prompt("Введите сторону C ");


document.write(`<h3>Задача 1 </h3>`);
const FOUR_SIDE=4;
let perimetr =sideA*FOUR_SIDE;
document.write(`Дана сторона квадрата a =  ${sideA} <br>`);
document.write(`Найти его периметр P = 4·a <br>`);
document.write(`Результат ${perimetr} <br>`);


document.write(`<h3>Задача 2 </h3>`);
let square =sideA**2;
document.write(`Дана сторона квадрата a =  ${sideA} <br>`);
document.write(`Найти его площадь S = a2 <br>`);
document.write(`Результат ${square} <br>`);


document.write(`<h3>Задача 3 </h3>`);
let rectangleS =sideA*sideB;
let rectangleP = 2*(sideA+sideB);
document.write(`Даны стороны прямоугольника a = ${sideA} и b = ${sideB}<br>`);
document.write(`Найти его площадь S = a·b и периметр P = 2·(a + b) <br>`);
document.write(`Результат площадь = ${rectangleS} <br>  периметр = ${rectangleP} `);


document.write(`<h3>Задача 4 </h3>`);
let diameter =+prompt(`Введите диаметр окружности`);
const PI=3.14;
let length=PI*diameter;
document.write(`Дан диаметр окружности d = ${diameter}. В качестве значения π использовать = 3.14. <br>`);
document.write(`Найти ее длину L = π·d. <br>`);
document.write(`Результат ${length.toFixed(1)} <br>`);


document.write(`<h3>Задача 5 </h3>`);
document.write(`Дана длина ребра куба a = ${sideA}. <br> Найти объем куба V = a3 и площадь его поверхности S = 6·a2. <br>`);
let volumeCube=sideA**3;
let cubeS=6*(sideA**2);
document.write(`Результаты:  объем куба V = ${volumeCube} <br>  и площадь его поверхности S = ${cubeS} `);


document.write(`<h3>Задача 6 </h3>`);
document.write(`Даны длины ребер a, b, c прямоугольного параллелепипеда.<br> Найти его объем V = a·b·c и площадь поверхности S = 2·(a·b + b·c + a·c). <br>`);
let parallelepipedV=sideA*sideB*sideC;
let parallelepipedS=2*(sideA*sideB+sideB*sideC+sideA*sideC);
document.write(`Результаты прямоугольного параллелепипеда:  объем V = ${parallelepipedV} <br>  и площадь его поверхности S = ${parallelepipedS} `);


document.write(`<h3>Задача 7 </h3>`);
document.write(`Найти длину окружности L и площадь круга S заданного радиуса R:L = 2·π·R, S = π·R2.<br> В качестве значения π использовать 3.14. <br>`);
let radius=+prompt(`Введите радиус окружности`);
let circleLength=2*PI*radius;
let circleS=PI*radius**2;
document.write(`Длина окружности L = ${circleLength.toFixed(2)} и площадь круга S = ${circleS.toFixed(2)} `);


document.write(`<h3>Задача 8 </h3>`);
document.write(`Даны два числа a и b. Найти их среднее арифметическое: (a + b)/2. <br>`);
let average = (sideA+sideB)/2;
document.write(`Их среднее арифметическое = ${average}`);


document.write(`<h3>Задача 9 </h3>`);
document.write(`Даны два неотрицательных числа a и b. <br>Найти их среднее геометрическое, т. е. квадратный корень из их произведения: (a·b)1/2. <br>`);
let geometric =(sideA*sideB)**0.5;
document.write(`Их среднее геометрическое = ${geometric.toFixed(2)}`);


document.write(`<h3>Задача 10 </h3>`);
document.write(`Даны два ненулевых числа. Найти сумму, разность, произведение и частное их квадратов. <br>`);
let plus= sideB**2+sideC**2;
let minus=sideB**2-sideC**2;
let multiply=sideB**2-sideC**2;
let divide=sideB**2-sideC**2;


document.write(`сумма:        ${sideB}^2 + ${sideC}^2 = ${plus} <br>`);
document.write(`разность:     ${sideB}^2 - ${sideC}^2 = ${minus}<br>`);
document.write(`произведение: ${sideB}^2 * ${sideC}^2 = ${multiply}<br>`);
document.write(`частное:      ${sideB}^2 / ${sideC}^2 = ${divide}<br>`);