

document.write(`<h1>Условный оператор</h1>`);
let a = Number(prompt(`Enter number A`));
let b = Number(prompt(`Enter number B`));
let c = Number(prompt(`Enter number C`));
let d = Number(prompt(`Enter number D`));
let k = Number(prompt(`Enter number K`));


document.write(`<h2>A = ${a}, B = ${b}, C =${c}  D = ${d}, K = ${k}</h2>`);

document.write(`<h3>Task #1</h3>`);
document.write(`Дано целое число. Если оно является положительным, то вычесть из него 8; в противном случае не изменять его. Вывести полученное число.<br>`);
if (a>0){
    a-=8;
  document.write(`a+8 = ${a}`);  
} else {
     document.write(`${a}`);
}


document.write(`<h3>Task #2</h3>`);
document.write(`Дано целое число. Если оно является положительным, то вычесть из него 8; в противном случае прибавить к нему 6. Вывести полученное число.  <br>`);
if (a>0){
    a-=8;
  document.write(`a-8 = ${a}`);  
} else {
    a+=6;
     document.write(`a+6 = ${a}`);
}


document.write(`<h3>Task #3</h3>`);
document.write(`Дано целое число. Если оно является положительным, то вычесть из него 8; если отрицательным, то прибавить к нему 6; 
если нулевым, то заменить его на 10. Вывести полученное число.  <br>`);
if (a>0){
    a-=8;
  document.write(`a-8 = ${a}`);  
} else if(a<0){
    a+=6;
     document.write(`a+6 = ${a}`);
}else if(a==0){
    a=10;
     document.write(`a = ${a}`);
}


document.write(`<h3>Task #4</h3>`);
document.write(`Даны три целых числа. Найти количество положительных чисел в исходном наборе.  <br>`);
(a>0)? a=1:a=0;
(b>0)? b=1:b=0;
(c>0)? c=1:c=0;
document.write(`количество положительных чисел в исходном наборе ${a+b+c}<br>`);


document.write(`<h3>Task #5</h3>`);
document.write(`Даны три целых числа. Найти количество положительных и количество отрицательных чисел в исходном наборе. <br>`);
let a1=0;
let b1=0;
let c1=0;
(a>0)? a=1:a1=1;
(b>0)? b=1:b1=1;
(c>0)? c=1:c1=1;
//второй вариант
/*if(a>0){
    a=1;
}else {
    a1=1;
}
if(b>0){
    b=1;
}else {
    b1=1;
}

if(c>0){
    c=1;
}else{
    c1=1;
}*/ 
document.write(`количество положительных чисел в исходном наборе ${a+b+c}<br> отрицательных чисел ${a1+b1+c1}`);


document.write(`<h3>Task #6</h3>`);
document.write(`Даны два числа. Вывести большее из них. <br>`);
//(d>k)? document.write(d):document.write(k);
if (d>k){
    document.write(`${d} > ${k}`);
}else{
    document.write(`${d} < ${k}`);
}


document.write(`<h3>Task #7</h3>`);
document.write(`Даны два числа ${d} и ${k}. Вывести порядковый номер меньшего из них. <br>`);
(d>k)? document.write("2) "+k):document.write("1)  "+d);



document.write(`<h3>Task #8</h3>`);
document.write(`Даны два числа ${d} и ${k}. Вывести вначале большее, а затем меньшее из них. <br>`);
(d>k)? document.write(`${d} и ${k}`):document.write(`${k} и ${d}`);


document.write(`<h3>Task #9</h3>`);
document.write(`Даны две переменные вещественного типа: A= ${a=9}  и B=${b=7}. 
Перераспределить значения данных переменных так, чтобы в A оказалось меньшее из значений, а в B — большее. Вывести новые значения переменных A и B. <br>`);
if (a>b){
    c=a;
    a=b;
    b=c;
    document.write(`A= ${a}   B=${b}`);
}else {
 document.write(`A= ${a}   B=${b}`);
}


document.write(`<h3>Task #10</h3>`);
document.write(` Даны две переменные целого типа: A= ${a}   B=${b}. Если их значения не равны, то присвоить каждой переменной сумму этих значений,
 а если равны, то присвоить переменным нулевые значения. Вывести новые значения переменных A и B. <br>`);

 if(a!=b){
     a+=b;
     b=a;
     document.write(`A= ${a}   B=${b}`);
 }else if (a==b){
     a=0;
     b=0;
     document.write(`A= ${a}   B=${b}`);
 }

