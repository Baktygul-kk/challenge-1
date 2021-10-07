document.write(`<h2>Task #1</h2>`);
let dayOfWeek=+prompt(`Enter number from 1 to 7 weekday`);

document.write(`Дано целое число в диапазоне 1–7. Вывести строку — название дня недели, соответствующее данному числу (1 — «понедельник», 2 — «вторник» и т. д.). <br>`);
switch(dayOfWeek){
    case 1:
    document.write(`Понедельник <br>`);
    break;
    case 2:
    document.write(`Вторник <br>`);
    break;
    case 3:
    document.write(`Среда <br>`);
    break;
    case 4:
    document.write(`Четверг <br>`);
    break;
    case 5:
    document.write(`Пятница <br>`);
    break;
    case 6:
    document.write(`Суббота <br>`);
    break;
    case 7:
    document.write(`Воскресенье <br>`);
    break;
    default:
    document.write(`Нет такого дня недели <br>`);
    break;
}


 document.write(`<h2>Task #2</h2>`);
let mark=+prompt(`Enter mark from 1 to 5`);
 document.write(`Дано целое число K. Вывести строку-описание оценки, соответствующей числу K (1 — «плохо», 2 — «неудовлетворительно»,
  3 — «удовлетворительно», 4 — «хорошо», 5 — «отлично»). Если K не лежит в диапазоне 1–5, то вывести строку «ошибка».<br>`);
switch(mark){
    case 1:
    document.write(`плохо <br>`);
    break;
    case 2:
    document.write(`неудовлетворительно <br>`);
    break;
    case 3:
    document.write(`удовлетворительно <br>`);
    break;
    case 4:
    document.write(`хорошо <br>`);
    break;
    case 5:
    document.write(`отлично <br>`);
    break;
    default:
    document.write(`ошибка <br>`);
    break;
}


 document.write(`<h2>Task #3</h2>`);
let month=+prompt(`Enter month num from 1 to 12`);
 document.write(`Дан номер месяца — целое число в диапазоне 1–12 (1 — январь, 2 — февраль и т. д.).
  Вывести название соответствующего времени года («зима», «весна», «лето», «осень»). <br>`);

  switch(month){
      case 12:
      case 1:
      case 2:
             document.write(`зима`);
             break;
      case 3:
      case 4:
      case 5:
             document.write(`весна`);
             break;
      case 6:
      case 7:
      case 8:
             document.write(`лето`);
             break;
      case 9:
      case 10:
      case 11:
             document.write(`осень`);
             break;
      default:
       document.write(`ошибка <br>`);
       break;
             
  }

 document.write(`<h2>Task #4</h2>`);
 document.write(`Дан номер месяца — целое число в диапазоне 1–12 (1 — январь, 2 — февраль и т. д.). 
 Определить количество дней в этом месяце для невисокосного года. <br>`);
  switch(month){
      case 1:
       document.write(`31`);
       break;
      case 2:
             document.write(`28`);
             break;
      case 3:
             document.write(`31`);
       break;
      case 4:
             document.write(`30`);
       break;
      case 5:
             document.write(`31`);
             break;
      case 6:
             document.write(`30`);
       break;
      case 7:
             document.write(`31`);
       break;
      case 8:
             document.write(`31`);
             break;
      case 9:
             document.write(`30`);
       break;
      case 10:
             document.write(`31`);
       break;
      case 11:
             document.write(`30`);
             break;
      case 12:
             document.write(`31`);
       break;
      default:
       document.write(`ошибка <br>`);
       break;
             
  }    


 document.write(`<h2>Task #5</h2>`);
 document.write(`Арифметические действия над числами пронумерованы следующим образом: 1 — сложение, 2 — вычитание, 3 — умножение, 4 — деление.
  Дан номер действия N (целое число в диапазоне 1–4) и вещественные числа A и B (B не равно 0).
  Выполнить над числами указанное действие и вывести результат.<br>`);
  let a=9;
  let b=3;
  let result;
  let n=+prompt(`Enter action num from 1 to 4`);
  switch(n){
      case 1:
      result=a+b;
      document.write(`${a}+${b}=${result}`);
      break;
       case 2:
      result=a-b;
      document.write(`${a}-${b}=${result}`);
      break;
       case 3:
      result=a*b;
      document.write(`${a}*${b}=${result}`);
      break;
       case 4:
      result=a/b;
      document.write(`${a}/${b}=${result}`);
      break;
      default:
      document.write(`ошибка`);
  }

document.write(`<h2>Task #6</h2>`);
document.write(`Единицы длины пронумерованы следующим образом: 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр.
 Дан номер единицы длины (целое число в диапазоне 1–5) и длина отрезка в этих единицах (вещественное число). Найти длину отрезка в метрах. <br>`);
let metrica=+prompt(`Введите номер единицы длины (целое число в диапазоне 1–5)`);
let length=30;
let m;
switch(metrica){
    case 1:
    m=length/10;
    document.write(`${length} дециметров = ${m} метров  `);
    break;
    case 2:
    m=length*1000;
    document.write(`${length} километров = ${m} метров  `);
    break;
    case 3:
    m=length/1;
    document.write(`${length} метров = ${m} метров  `);
    break;
    case 4:
    m=length/1000;
    document.write(`${length} миллиметров = ${m} метров  `);
    break;
    case 5:
    m=length/100;
    document.write(`${length} сантиметров = ${m} метров  `);
    break;
     default:
      document.write(`ошибка`);
}


document.write(`<h2>Task #7</h2>`);
document.write(`Единицы массы пронумерованы следующим образом: 1 — килограмм, 2 — миллиграмм, 3 — грамм, 4 — тонна, 5 — центнер.
 Дан номер единицы массы (целое число в диапазоне 1–5) и масса тела в этих единицах (вещественное число). Найти массу тела в килограммах. <br>`);
 let kg=+prompt(`Введите номер единицы массы (целое число в диапазоне 1–5)`);
 let massa=400;
 let k;
 switch(kg){
    case 1:
    k=massa/1;
    document.write(`${massa} килограмм = ${k} килограмм  `);
    break;
    case 2:
    k=massa/10000;
    document.write(`${massa} миллиграмм = ${k} килограмм  `);
    break;
    case 3:
    k=massa/1000;
    document.write(`${massa} грамм = ${k} килограмм  `);
    break;
    case 4:
    k=massa*1000;
    document.write(`${massa} тонна = ${k} килограмм  `);
    break;
    case 5:
    k=massa*10;
    document.write(`${massa} центнер = ${k} килограмм  `);
    break;
     default:
      document.write(`ошибка`);
}