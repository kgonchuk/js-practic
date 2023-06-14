//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const message = prompt("Яка офіційна назва JavaScript?");
// console.log(message);
// if(message === 'ECMAScript'){
// alert ("Вірно!");
// }else{
//     alert("Не знаєте? ECMAScript!");
// }

// ===========================================
//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const max = 20;
// const min = 5;
// let sum = 0;


// for(let i =  max; i >= min; i -= 1) {
//    console.log(i);

//    if(i % 2 === 0) {
// sum += i;
//    }
   
// }
// console.log(sum);




// const max = 20;
// const min = 5;
// let sum = 0;


// for(let i =  max; i >= min; i -= 1){
//    console.log(i);
//    if(i % 2 !== 0){
// continue;
//    }
//    sum += i
// }
// console.log(sum);

// ============================================

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = Number(prompt("Введіть число від 1 до 4"));
// let result = "";
// switch(num){
// case 1:
//         result = 'Зима';
//         break;

//  case 2:
//             result = 'весна'
//             break;
// case 3:
//     result = 'літо';
//     break;
//     case 4:
//         result = 'Осінь'
//         break;
// }

// console.log(result);

// ==================================

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const login = prompt("Введіть логін");
// console.log(login);
// if(login === "Адмін"){
//     const password = prompt("ВВедіть пароль");
//     if(password === 'Я головний' ){
//          alert("Вітаю!");
//     } else{
//         alert("Невірний пароль!");
//     }
// } else if(login === null || login === ""){
//     alert("Скасовано");
// } else{
//     alert("Я вас не знаю")
// }

// const login = prompt("Введіть логін");
// console.log(login);
// switch(login){
//     case "Адмін":
//         const password = prompt("ВВедіть пароль");
//         password === "Я головний" ? "Вітаю!" : "Невірний пароль!"   
//         if(password === "Я головний"){
//             alert("Вітаю!")
//     } else{
//         alert("Невірний пароль!")
//     }
//     break;
//     case null:
//         case "":
//             alert("Скасовано")
//             break;
//             default : 
//            alert("Я вас не знаю") 
// }
//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
// const number = prompt("введіть число");
// console.log(number);

// const hours = Math.floor (number / 60);
// console.log(hours);

// const minutes = number % 60;
// console.log(minutes);

// const modifiedHours = String(hours).padStart(2, "0");
// const modifiedMinutes = String(minutes).padStart(2, "0");
// console.log(`${modifiedHours} : ${modifiedMinutes}`)
/******************************************************************* */
//При завантаженні сторінки користувачу пропонується
//в prompt ввести число. Ввод додається к значенню
//змінної total.
//Операція вводу числа продовжується до тих пір,
//доки користувач не натисне кнопку Cancel в prompt.
//Після того як користувач закінчив ввод натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сумма введенних чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.

// let num = prompt("Введіь число");
// let total = 0;
// while(num){
//     if (!Number.isNaN(Number(num))) {
//         total += Number(num);
//     }
    
//     num = prompt("Введіть число")
// }
// alert(`Загальна сумма введенних чисел дорівнює ${total}.`)
// =================================================
// В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
// console.log(minuteValue);
// if(minuteValue >= 0 && minuteValue < 15){
//     console.log("Перша чверть");
// } else if(minuteValue >= 16 && minuteValue < 30){
//     console.log("Дргуа четверть");
// }  else if (minuteValue >=31 && minuteValue < 45 ){
//     console.log("Третя четверть");
// }else{
//     console.log("Четверта четверть");
// }

/******************************************** */


// В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
// console.log(minuteValue);

// if (minuteValue <= 15) {
// 	alert("Перша чверть");
// } else if (minuteValue <= 30) {
// 	alert("Друга чверть");
// } else if (minuteValue <= 45) {
// 	alert("Третя чверть");
// } else {
// 	alert("Четверта чверть");
// }

// if (minuteValue >= 0 && minuteValue <= 15) {
// 	alert("Перша чверть");
// }
// if (minuteValue >= 16 && minuteValue <= 30) {
// 	alert("Друга чверть");
// }
// if (minuteValue >= 31 && minuteValue <= 45) {
// 	alert("Третя чверть");
// }
// if (minuteValue >= 46 && minuteValue <= 59) {
// 	alert("Четверта чверть");
// }

// +================================
//Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо користувач ввів інше число - попросити
//ввести ще раз и так далі.
//Цикл повинен питати число, доки користувач не
//введе число більше 100, чи не натисне кнопку
//Cancel в prompt
// let num = prompt("ВВедіть число більше 100")
// while(num < 100){
//     if(num === null){
//         break;
//     }

//     num =  prompt("ВВедіть число більше 100");
// }
// alert(num || "Скасовано")

// =====================================
// Є рядок, який складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є літера 'a'.
// Якщо це так - виведіть 'Так', в іншому випадку - 'Ні'.

// const message = "Ahgkdkd";
// if(message[0].toLowerCase() === "a"){
//     alert("Yes")
// } else{
//     alert("No")
// }

/******************************************* */



// 3. Напиши скрипт, який приводить у консоль рядок 'Це додатнє число', якщо
// в prompt користував ввів число більше за нуль. Якщо було введено нуль,
// виводь у консоль рядок 'Це нуль'. Якщо передали від'ємне число, у консолі
// має бути рядок 'Це від`ємне число'
// const num = Number(prompt("Get a number")) ;
// if(num > 0){
//     console.log("Це додатнє число");
// } else if (num === 0){
//     console.log("'Це null'");
// }else{
//     console.log("'Це відємне число'");
// }
// const numberFromPrompt = Number(prompt("Write your random number"));

// if (numberFromPrompt > 0) {
//   console.log("Це додатнє число");
// } else if (numberFromPrompt === 0) {
//   console.log("Це нуль");
// } else {
//   console.log("Це від`ємне число");
// }

// ================================================
// 4. Напиши скрипт, який перевіряє чи закінчується значення змінної link
//   символом '/'. Якщо ні, додай у кінець посилання цей символ  
// */

// let link = "https://instagram.com/andrii_shevchukk";
// if(!link.endsWith("/")){
//     link += "/"
// }
// console.log(link)

// =========================
// 5. Напиши скрипт для відображення дедлайну - часу здачі проєкту. Використовуй
//   конструкцію switch...case
// Якщо до дедлайну 0 днів - виведи рядок C
//   Якщо до дедлайну 1 день - виведи рядок 'Завтра'
//   Якщо до дедлайну 2 дні - виведи рядок 'Післязавтра'
//   Якщо до дедлайну 3+ днів - виведи рядок 'Можна відпочити :)'
// const dedlDays = 0;
// switch(dedlDays){
//     case 0:
//         console.log('Сьогодні');
//         break;
//     case 1:
//         console.log('Завтра')
//         break;
//     case 2:
//         console.log('Післязавтра');
//         break;
//     default:
//         console.log("Можна відпочити:)") ;    
//         break; 
// }
// console.log(dedlDays)
// ===============================================

// 6. Напиши скрипт котрий порахує суму чисел від 1 до 10 та виведе у консоль результат 
// */
// let total = 0;
// for(let i = 1; i <= 10; i += 1 ){
//     total += i;
// }
// console.log(total)
// +++++++++++++++++++++++++++++++++++++++++++++++++++

// 7. Напиши цикл for який виводить у консоль браузера числа за зростанням від
//   min дo max, але якщо число кратне 5
// */
 
// let min = 1;
// let max = 53;
// for(let i = min; i < max; i += 1){
//     if(i % 5 !== 0){
//         continue;
//     }console.log(i)
// }

// 8. Напишіть скрипт який порахує скільки на проміжку від from до to було чисел,
// які є кратними 7
// const from = 11;
// const to = 115;
// let total = 0;
// for(let i = from; i <= to; i += 1){
//     if(i % 7 === 0){
// total += i;
//     }
//     console.log(total)
// }
// ========================================================
// 9. Напишіть скрипт для світлофора, де користувач може ввести назву кольору
//   у prompt і в залежності від того який був введений колір відображатимуться
//   різні повідомлення через alert. Використовуй конструкцію switch case
//   const trafficLight = prompt("Введіть колір")
//   switch(trafficLight){
//     case "red":
//         alert("Stop!");
//         break;
//     case "orange":
//         alert("Attation!");
//         break;
//     case "green":
//         alert("GO!");
//         break;
//         default:
//             alert(" Undefined color");
//             break;        
//   }
//   console.log(trafficLight)

// ===========================