document.write(`<h2>Задача №11</h2>`);
let x=-10;
let y=8;
document.write(`Даны два ненулевых числа. x = ${x}, y = ${y} Найти сумму, разность, произведение и частное их модулей. <br>`);
document.write(`Сумма ${Math.abs(x)+Math.abs(y)} <br>`);
document.write(`Разность ${Math.abs(x)-Math.abs(y)}<br>`);
document.write(`Произведение  ${Math.abs(x)*Math.abs(y)}<br>`);
document.write(`Деление ${Math.abs(x)/Math.abs(y)}<br>`);

document.write(`<h2>Задача №12</h2>`);
let a=3;
let b=4;
document.write(`Даны катеты прямоугольного треугольника a = ${a} и  b = ${b}. Найти его гипотенузу c и периметр P: c = (a2 + b2)1/2,   P = a + b + c.<br>`);
let c=(a**2+b**2)**0.5;
let p=a+b+c;
document.write(`Гипотенуза с= ${c} и периметр = ${p} <br>`);


document.write(`<h2>Задача №13</h2>`);
document.write(`Даны два круга с общим центром и радиусами R1 и R2 (R1 > R2).<br> Найти площади этих кругов S1 и S2, а также площадь S3 кольца, внешний радиус которого равен R1, а внутренний радиус равен R2:
S1 = π·(R1)2,        S2 = π·(R2)2,        S3 = S1 − S2. <br>`);
let r1=9;
let r2=6;
const PI=3.14;
document.write(`r1 = ${r1}  и r2 = ${r2} <br>`);
let s1=PI*(r1**2);
let s2=PI*(r2**2);
let s3=s1-s2;
document.write(`S1 = ${s1}  и  S2 = ${s2}  и  S3 = ${s3} <br>`);


document.write(`<h2>Задача №14</h2>`);
document.write(`Дана длина L окружности. Найти ее радиус R и площадь S круга, ограниченного этой окружностью, учитывая, что L = 2·π·R,    S = π·R2. <br> В качестве значения π использовать 3.14. <br>`);
let length=8;
let radius=length/2*PI;
let circleC=PI*(radius**2);
document.write(`длина L окружности=${length}, радиус = ${radius.toFixed(2)}, площадь = ${circleC.toFixed(2)} `);

document.write(`<h2>Задача №15</h2>`);
document.write(`Дана площадь S круга. Найти его диаметр D и длину L окружности, ограничивающей этот круг, учитывая, что L = π·D,    S = π·D2/4.<br>
 В качестве значения π использовать 3.14.`);
let area=10;
let diametr=4*area/PI;
let circleL=PI*diametr;
document.write(`площадь S круга = ${area}, диаметр D = ${diametr.toFixed(2)}, длина L окружности = ${circleL}  (не смогда вычислить корень из числа) `);


document.write(`<h2>Задача №16</h2>`);
document.write(`Найти расстояние между двумя точками с заданными координатами x1 и x2 на числовой оси: |x2 − x1|. <br>`);
let x1=8;
let x2=19;
let rasst=Math.abs(x1-x2);
document.write(`расстояние между двумя точками x1 = ${x1} и x2 = ${x2} равна ${rasst} <br>`);

document.write(`<h2>Задача №17</h2>`);
document.write(`Даны три точки A, B, C на числовой оси. Найти длины отрезков AC и BC и их сумму. <br>`);
let ac=Math.abs(c-a);
let bc=Math.abs( c-b);
let abc=ac+bc;
document.write(`длины отрезков AC = ${ac} и BC = ${bc} и их суммa = ${abc}. <br>`);
