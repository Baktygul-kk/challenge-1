let k =+prompt(`Enter k`);
let n =+prompt(`Enter n`);
document.write(`<h3>Task #1</h3>`);
document.write(`Даны целые числа K и N (N > 0). Вывести N раз число K.<br>`);
for (let i=0; i<n; i++){
  document.write(`${k} <br>`);
}



document.write(`<h3>Task #2</h3>`);
 let a=7;
 let b=11;
document.write(`Даны два целых числа A = ${a} и B = ${b} (A < B).
 Вывести в порядке возрастания все целые числа, расположенные между A и B (включая сами числа A и B), а также количество N этих чисел.<br>`);
 document.write((b-a+1)+"количество чисел<br>");
 for(a; a<b+1; a++){
   document.write(a+"<br>");
 }


document.write(`<h3>Task #3</h3>`);
document.write(`Даны два целых числа A и B (A < B). Вывести в порядке убывания все целые числа, расположенные между A и B (не включая числа A и B),
  а также количество N этих чисел. <br>"`);
  a=15;
  b=19;
   document.write((b-a-1)+" количество чисел <br>");
 for(let i=b-1; a<i; i--){
   document.write(i+"<br>");
 }


document.write(`<h3>Task #4</h3>`);
document.write(`Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1, 2, …, 10 кг конфет. <br>`);
let price=40;
for(let kg=1; kg<11; kg++){
  let gener=kg*price;
  document.write(`цена за ${kg} kg ${gener}сом <br>`);
}

document.write(`<h3>Task #5</h3>`);
document.write(`Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1, 2, …, 10 кг конфет. <br>`);
for(let kg=1; kg<11; kg++){
  let gener=kg*price;
  document.write(`цена за ${kg/10} kg ${gener/10}сом <br>`);
}

document.write(`<h3>Task #6</h3>`);
document.write(`Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1.2, 1.4, …, 2 кг конфет. <br>`);
for(let kg=1.2; kg<2.0; kg+=0.2){
  let gener=kg*price;
  document.write(`цена за ${kg.toFixed(1)} kg ${gener.toFixed(0)} сом <br>`);
}


document.write(`<h3>Task #7</h3>`);
document.write(`Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно. <br>`);
let sum=0;
a=5;
b=8;
for(let i=a; i<b+1; i++){
sum+=i;
document.write(sum+"<br>");
console.log(sum);
}



