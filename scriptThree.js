
document.write(`<h2>Задача № 18</h2>`);
let a=10;
let b=16;
let c=25;
document.write(` Даны три точки A, B, C на числовой оси. Точка C расположена между точками A и B. Найти произведение длин отрезков AC и BC.<br>`);
let ac=Math.abs(a-c);
let cb=Math.abs(c-b);
let multiply=ac*cb;
document.write(`произведение длин отрезков AC и BC = ${multiply} <br>`);


document.write(`<h2>Задача № 19</h2>`);
document.write(`Даны координаты двух противоположных вершин прямоугольника: (x1, y1), (x2, y2). Стороны прямоугольника параллельны осям координат. Найти периметр и площадь данного прямоугольника.<br>`);
let x1y1=5;
let x2y2=4;
let perimetr=2*(x1y1+x2y2);
let area=x1y1*x2y2;
document.write(`периметр = ${perimetr} и площадь = ${area} данного прямоугольника`);


document.write(`<h2>Задача № 20</h2>`);
document.write(`Найти расстояние между двумя точками с заданными координатами (x1, y1) и (x2, y2) на плоскости. <br> Расстояние вычисляется по формуле
((x2 − x1)2 + (y2 − y1)2)1/2. <br>`);
 let x2=10;
 let x1=8;
 let y2=9;
 let y1=7;
 let rasst=((x2-x1)**2+(y2-y1)**2)**0.5;
 document.write(`Расстояние = ${rasst.toFixed(2)}`);


 document.write(`<h2>Задача № 21</h2>`);
 document.write(`Даны координаты трех вершин треугольника: (x1, y1), (x2, y2), (x3, y3). <br> Найти его периметр и площадь, используя формулу для расстояния между двумя точками на плоскости (см. задание Begin20).<br> Для нахождения площади треугольника со сторонами a, b, c использовать формулу Герона:
S = (p·(p − a)·(p − b)·(p − c))1/2,
где p = (a + b + c)/2 — полупериметр. <br>`);
let p=(a+b+c)/2;
let s=(p*(p-a)*(p-b)*(p-c))**0.5;
document.write(` площадь треугольника  = ${s.toFixed(2)}`);

document.write(`<h2>Задача № 22</h2>`);
document.write(`Поменять местами содержимое переменных A и B и вывести новые значения A и B. <br>`);
let elemA=7;
let elemB=4;
document.write(`до A = ${elemA}  B = ${elemB} <br>`);
let elemC=elemA;
elemA=elemB;
elemB=elemC;
document.write(`после A = ${elemA}  B = ${elemB} <br>`);


document.write(`<h2>Задача № 23</h2>`);
document.write(` Даны переменные A, B, C. Изменить их значения, переместив содержимое A в B, B — в C, C — в A, и вывести новые значения переменных A, B, C. <br>`);
elemA=8;
elemB=9;
elemC=3;
document.write(`до A = ${elemA},  B = ${elemB},  C = ${elemC} <br>`);
let elemD=elemC;
elemC=elemB;
elemB=elemA;
elemA=elemD;
document.write(`после A = ${elemA},  B = ${elemB},  C = ${elemC} <br>`);


document.write(`<h2>Задача № 24</h2>`);
document.write(`Даны переменные A, B, C. Изменить их значения, переместив содержимое A в C, C — в B, B — в A, и вывести новые значения переменных A, B, C.<br>`);
document.write(`до A = ${elemA},  B = ${elemB},  C = ${elemC} <br>`);
elemD=elemB;
elemB=elemC;
elemC=elemA;
elemA=elemD;
document.write(`после A = ${elemA},  B = ${elemB},  C = ${elemC} <br>`);



document.write(`<h2>Задача № 25</h2>`);
document.write(`Найти значение функции y = 3x6 − 6x2 − 7 при данном значении x.<br>`);
let x=2;
let funcY=3*x**6-6*x**2-7;
document.write(`значение функции y = ${funcY}`);


document.write(`<h2>Задача № 26</h2>`);
document.write(` Найти значение функции y = 4(x−3)6 − 7(x−3)3 + 2 при данном значении x.<br>`);
x=4;
funcY=4*(x-3)**6-7*(x-3)**3+2;
document.write(`значение функции y = ${funcY}`);


document.write(`<h2>Задача № 27</h2>`);
document.write(`Дано число A. Вычислить A8, используя вспомогательную переменную и три операции умножения. Для этого последовательно находить A2, A4, A8. Вывести все найденные степени числа A. <br>`);
a=2;
let a2=a*a;
let a4=a2*a2;
let a8=a4*a4;
let qw=a**8;
document.write(`A= ${a}, A2 = ${a2}, A4 = ${a4} <br>`);
document.write(` A8 = ${a8}, проверка =  ${qw} <br>`);


document.write(`<h2>Задача № 28</h2>`);
document.write(`Дано число A. Вычислить A15, используя две вспомогательные переменные и пять операций умножения. Для этого последовательно находить A2, A3, A5, A10, A15. Вывести все найденные степени числа A.<br>`);
a=2;
a2=a*a;
let a3=a2*a;
let a5=a2*a2*a;
let a10=a5*a5;
let a15=a5*a5*a5;
let check=a**15;
document.write(`A= ${a}, A2 = ${a2}, A3 = ${a3}, A5 = ${a5}, A10 = ${a10}, A15 = ${a15} <br>`);
document.write(`проверка =  ${check} <br>`);



document.write(`<h2>Задача № 29</h2>`);
document.write(`Дано значение угла α в градусах (0 ≤ α < 360). Определить значение этого же угла в радианах, учитывая, что 180° = π радианов. В качестве значения π использовать 3.14.<br>`);
let deg=280;
const PI=3.14;
let radian=(deg*PI)/180;
document.write(`Угол а = ${deg} в градусах, ${radian.toFixed(2)} в радианах `);


document.write(`<h2>Задача №30</h2>`);
document.write(`Дано значение угла α в радианах (0 ≤ α < 2·π). Определить значение этого же угла в градусах, учитывая, что 180° = π радианов. В качестве значения π использовать 3.14.<br>`);
radian= 8;
deg=radian*180/PI;
document.write(`Угол а = ${deg.toFixed(2)} в градусах, ${radian} в радианах `);

document.write(`<h2>Задача №31</h2>`);
document.write(`Дано значение температуры T в градусах Фаренгейта. Определить значение этой же температуры в градусах Цельсия. Температура по Цельсию TC и температура по Фаренгейту TF связаны следующим соотношением:
TC = (TF − 32)·5/9. <br>`);
let tempF= 100;
let tempC=(tempF-32)*5/9;
document.write(`Дано в градусах Фаренгейта = ${tempF}, в градусах Цельсия = ${tempC.toFixed(2)} <br>`);


document.write(`<h2>Задача №32</h2>`);
document.write(`Дано значение температуры T в градусах Цельсия. Определить значение этой же температуры в градусах Фаренгейта. Температура по Цельсию TC и температура по Фаренгейту TF связаны следующим соотношением:
TC = (TF − 32)·5/9. <br>`);
tempC=37.78;
tempF=tempC*1.8+32;
document.write(`Дано в градусах Цельсия = ${tempC}, в градусах Фаренгейта = ${tempF.toFixed(2)} <br>`);