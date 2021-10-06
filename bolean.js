
let a=Number(prompt(`Enter number A`));
let b=Number(prompt(`Enter number B`));
let c =Number(prompt(`Enter number C`));
document.write(`<h2>Введенные числа  A = ${a}, B = ${b}, C = ${c}</h2>`);

document.write(`<h3>Task #1</h3>`);
document.write(`Дано целое число A. Проверить истинность высказывания: «Число A является положительным». <br>`);
if (a>0){
  document.write(`число а = ${a}, положительное`);
}else{
  document.write(`число а = ${a}, отрицательное`);
} 


document.write(`<h3>Task #2</h3>`);
document.write(`Дано целое число A. Проверить истинность высказывания: «Число A является нечетным». <br>`);
if(a%2!=0){
   document.write(`число а = ${a}, нечетное`);
}else{
  document.write(`число а = ${a}, четное`);
}



document.write(`<h3>Task #3</h3>`);
document.write(`Дано целое число A. Проверить истинность высказывания: «Число A является четным». <br>`);
a%2==0 ?  (document.write(`число а = ${a}, четное`)) : (  document.write(`число а = ${a}, нечетное`));


document.write(`<h3>Task #4</h3>`);
document.write(`Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A > 2 и B ≤ 3». <br>`);
if (a > 2 && b <= 3) {
 document.write("Истинно");
 }
 else {
  document.write("Ложь");
 }


document.write(`<h3>Task #5</h3>`);
document.write(`Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A ≥ 0 или B < −2». <br>`);

if (a >= 0 || b < -2) {
 document.write("Истинно");
 }
 else {
  document.write("Ложь");
 }

document.write(`<h3>Task #6</h3>`);
document.write(`Даны три целых числа: A, B, C. Проверить истинность высказывания: «Справедливо двойное неравенство A < B < C». <br>`);

(a<b && b<c) ?  (document.write(`Истинно`)) : (  document.write(`Ложь`));

document.write(`<h3>Task #7</h3>`);
document.write(`Даны три целых числа: A, B, C. Проверить истинность высказывания: «Число B находится между числами A и C».<br>`);
((a<b && b<c) || (c<b && b<a)) ?  (document.write(`Истинно`)) : (  document.write(`Ложь`));


document.write(`<h3>Task #8</h3>`);
document.write(`Даны два целых числа: A, B. Проверить истинность высказывания: «Каждое из чисел A и B нечетное».<br>`);
(a%2!=0 && b%2!=0) ?  (document.write(`Истинно`)) : (  document.write(`Ложь`));


document.write(`<h3>Task #9</h3>`);
document.write(`Даны два целых числа: A, B. Проверить истинность высказывания: «Хотя бы одно из чисел A и B нечетное».<br>`);
(a%2!=0 || b%2!=0) ?  (document.write(`Истинно`)) : (  document.write(`Ложь`));


document.write(`<h3>Task #10</h3>`);
document.write(`Даны два целых числа: A, B. Проверить истинность высказывания: «Каждое из чисел A и B нечетное».<br>`);
((a % 2 != 0 && b % 2 == 0) || (a % 2 == 0 && b % 2 != 0)) ?  (document.write(`Истинно`)) : (  document.write(`Ложь`));



document.write(`<h3>Task #11</h3>`);
document.write(`Даны два целых числа: A, B. Проверить истинность высказывания: «Числа A и B имеют одинаковую четность».<br>`);
(a % 2 == 0 && b % 2 == 0) ?  (document.write(`Истинно`)) : (  document.write(`Ложь`));

document.write(`<h3>Task #12</h3>`);
document.write(`Даны три целых числа: A, B, C. Проверить истинность высказывания: «Каждое из чисел A, B, C положительное»<br>`);
(a > 0 && b>0 && c >0) ?  (document.write(`Истинно`)) : (  document.write(`Ложь`));


document.write(`<h3>Task #13</h3>`);
document.write(`Даны три целых числа: A, B, C. Проверить истинность высказывания: «Хотя бы одно из чисел A, B, C положительное» <br>`);
(a > 0 || b>0 || c >0) ?  (document.write(`Истинно`)) : (  document.write(`Ложь`));



document.write(`<h3>Task #14</h3>`);
document.write(`Даны три целых числа: A, B, C. Проверить истинность высказывания: «Ровно одно из чисел A, B, C положительное». <br>`);
(a > 0 || b>0 && c >0)|| (a > 0 && b>0 || c >0) || (a > 0 && c>0 || b >0) ?  (document.write(`Истинно`)) : (  document.write(`Ложь`));


document.write(`<h3>Task #15</h3>`);
document.write(`Даны три целых числа: A, B, C. Проверить истинность высказывания: «Ровно два из чисел A, B, C являются положительными» <br>`);
(a > 0 || b>0 && c <0)|| (a < 0 && b>0 || c >0) || (a > 0 && c>0 || b <0) ?  (document.write(`Истинно`)) : (  document.write(`Ложь`));


document.write(`<h3>Task #16</h3>`);
document.write(`Дано целое положительное число. Проверить истинность высказывания: «Данное число является четным двузначным». <br>`);
if(a>10 && a<100 && a%2==0){
  document.write(`a = ${a} Данное число является четным двузначным`);
}else{
   document.write(`a = ${a} Данное число не является четным двузначным`);
}



document.write(`<h3>Task #17</h3>`);
document.write(`Дано целое положительное число. Проверить истинность высказывания: «Данное число является нечетным трехзначным». <br>`);
(b<1000 && b>100 && b%2!=0 ) ? (`b = ${b} Данное число является нечетным трехзначным`):(`b = ${b} Данное число не является нечетным трехзначным`);



document.write(`<h3>Task #18</h3>`);
document.write(`Проверить истинность высказывания: «Среди трех данных целых чисел есть хотя бы одна пара совпадающих». <br>`);
(a==b || b==c || c==a) ? document.write(true): document.write(false);




document.write(`<h3>Task #19</h3>`);
document.write(` Проверить истинность высказывания: «Среди трех данных целых чисел есть хотя бы одна пара взаимно противоположных».<br>`);
(a==(-1)*b || b==(-1)*c || c==(-1)*a) ? document.write(true): document.write(false);


document.write(`<h3>Task #20</h3>`);
document.write(` Дано трехзначное число. Проверить истинность высказывания: «Все цифры данного числа различны».<br>`);
if((a / 100) != (a % 100 / 10) && (a / 100) != (a % 10) && (a % 100 / 10) != (a % 10)){
  document.write(true);
}else{
  document.write(false);
}