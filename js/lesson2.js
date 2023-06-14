// Example 1 - Базові операції з масивом
//   [] літерал масиву
//   Властивість length та індексація
  
//   Створіть масив genres з елементами Jazz і Blues
//   Додайте 'Rock&roll' у кінець масиву
//   Виведіть у консоль перший елемент масиву
//   Виведіть у консоль останній елемент масиву. 
//   Код має працювати для масиву довільної довжини.
//   Вставте 'Contry' та 'Reggie' на початок масиву
//   Подивиттсь методи push unshift shift splice
// */

// const genres = ["jazz", "blues"];
// genres [genres.length] = "Rock&Roll";
// genres.push("Rock&Roll")
// genres.unshift("Contry", 'Reggie', "Rock&Roll", "Rock&Roll");
// console.log(genres);
// console.log(genres[3]);
// genres.pop();
// genres.splice(0, 2, 12)
// console.log(genres)
// console.log(genres[genres.length -1]);





// =================================================
/*  
  Example 2 - Масиви та рядки
  Напиши скрипт для обчислення площі прямокутника зі сторонами, 
  значення яких зберігаються в змінній величин у вигляді рядка.
  Значення гарантовано розділені пробілом. 
  Метод split
*/
// const values = "10 120";
// const array = values.split(" ");
// const result = array[0] * array[1];
// console.log(result)

// ==================================================
/*
  Example 3 - Перебір масиву
  Напиши скрипт для перебору масиву fruits циклом for.
  Для кожного елемента масиву виведіть у консоль рядок у 
  форматі номер_елемента: значення_елемента. 
  
  Нумерація елементів має починатися з першого.
*/

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// for(let i = 0; i < fruits.length ; i += 1){
//     console.log(`${i + 1} : ${fruits[i]}`)
// }
// ===========================================================

//   Example 4 - Масиви та цикли
//   Напиши скрипт, який виводить у консоль ім'я та телефонний 
//   номер користувача. У змінних names і phones зберігаються 
//   рядки імен та телефонних номерів, розділені комами. 
  
//   Порядковий номер імен та телефонів у рядках вказують на 
//   відповідність. Кількість імен та телефонів гарантовано однакова.
//   Метод split
// */

// const names = "Jacob,William,Solomon,Kate";
// const phones = "38001234567,38001112233,380055566377,38099912233";

// const namesList = names.split(",");
// const phonesList = phones.split(",");
// for(let i = 0; i < namesList.length; i += 1){
//     console.log(`${namesList[i]} : ${phonesList[i]}`)
// }
// =========================================================
/*
  Example 5 - Масиви та рядки
  Напиши скрипт який виводить у консоль усі слова рядка крім першого 
  та останнього. Результуючий рядок не повинен починатися або закінчуватися 
  пробілом. Скрипт повинен працювати для будь-якого рядка.
  методи pop shift join
*/

// const string = " Welcome to the future ";
// const stringList = string.trim().split(" ")
// for (let i = 1; i < stringList.length -1; i += 1){
//     console.log(stringList[i])
// }

// stringList.pop();
// stringList.shift();

// console.log(stringList);

// ==========================================================
/*
  Example 6 - Масиви та рядки
  Напиши скрипт, який «розвертає» рядок (зворотній порядок літер)
  і виводить його в консоль.
  Методи split reverse join
*/
// const string = "Welcome to the future";
// const stringList = string.split(" ").reverse().join(" ")
// console.log(stringList)

// const reversedString = string.split(" ").reverse().join(" ");
// console.log(reversedString);

// ========================================================
/*
  Example 7 - Пошук елемента
  Напиши скрипт пошуку найменшого числа у масиві. 
  Код має працювати для будь-якого масиву чисел. 
  Використовуй цикл for of для розв'язання задачі.
*/

// const numbers = [5, 11, 9, 7, 78, 3, -1 ];
// let smallersNumber = Infinity;
// for(const value of numbers){
// if(value < smallersNumber){
//     smallersNumber = value;

// }
// } console.log(smallersNumber)

// =========================================
/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const array3 = array1.concat(array2);
// for(const value of array3 ){
//     total += value
// }
// console.log(total);
// =============================================
/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';
// const normalizeTitle = title.normalize().toLowerCase().split(" ").join("-")
// console.log(normalizeTitle)

// =====================================================
/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'кАТЯ чУБАЧ';
// let invertedString = "";
// const stringList = string.split("");
// for(const letter of stringList){
//     if(letter === letter.toLowerCase()){
//         invertedString += letter.toUpperCase()
//     }else{
//         invertedString += letter.toLowerCase() 
//     }
// }

// console.log(invertedString)
// ==============================================
// * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
//  * Элементов может быть произвольное кол-во.
//  * Пусть элементы массива  в строке будут разделены запятой.
//  * - Сначала через for
//  * - Потом через join()
//  */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = "";

// for(const friend of friends){
//     string += friend
// }
// string = friends.join(",")
// console.log(string)
// ====================================================
// * Напиши скрипт поиска логина
//  * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
//  * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
//  *
//  * - Сначала через for
//  * - Потом через for...of
//  * - Логика break
//  * - Метод includes() с тернарным оператором
//  */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';
// let message = 'Пользователь [логин] не найден.';

// const message = logins.includes(loginToFind) ? 'Пользователь ${loginToFind} не найден.' : 'Пользователь ${loginToFind} найден.'
// console.log(message)

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);
// ===================================================
// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   }
  
//   count(1, 5); // countFrom = 1, countTo = 5, step = 1
//   count(2); // countFrom = 2, countTo = 10, step = 1
//   count(); // countFrom = 0, countTo = 10, step = 1



// =====================================
// function checkAge(age){
//     if(age >= 20){
//     console.log("You are an adult")
//         return ;
//     }
//     console.log ("You are a minor")
// }
// checkAge(10)
// ==================================
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
// if(password === ADMIN_PASSWORD ){
//     console.log("Welcome!")
//     return 
// }
// console.log("Access denied, wrong password!")

// }
// checkPassword("jqam")
// ====================================
// function checkStorage(available, ordered){
//    if (ordered === 0){
//     console.log ("Your order is empty!")
//         return ;
//     }
//     if (ordered > available){
//         console.log("Your order is too large, not enough goods in stock!")
//         return ;
//     }
//     console.log("The order is accepted, our manager will contact you")
   
// }

// checkStorage(100, 13)
// ==================================
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0]
// console.log(firstElement)
// const secondElement = fruits[2]
// console.log(secondElement)
// const lastElement = fruits[3]
// console.log(lastElement)
// ============================

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[0] = 'banana'
// fruits[3] = "peach"
// console.log(fruits)
// ==============================
// const fruits = ["apple", "plum", "pear", "orange"];
// const fruitsArrayLength = fruits.length
// console.log(fruitsArrayLength)
// ==========================
// const fruits = ["apple", "plum", "pear", "orange"];
// const lastElementIndex = fruits.length -1;

// const lastElement = fruits[lastElementIndex]
// console.log(lastElement);
// ===============================
// function getExtremeElements(array){
//     const arrayBack = [array[0], array[array.length -1]]
// console.log(arrayBack)
// }
// getExtremeElements([1, 2, 3, 4, 5])

// getExtremeElements(["Earth", "Mars", "Venus"])
// ========================================
// function splitMessage(message, delimiter) {
//     let words;
//     words = message.split(delimiter)
//     console.log(words)
// }
// splitMessage("Mango hurries to the train", " ")
// splitMessage("Mango", "")
// splitMessage("best_for_week", "_")
// =================================
// function calculateEngravingPrice(message, pricePerWord){
//     messageList = message.split(" ").length;
//     messageList *= pricePerWord;
//     console.log(messageList)
// }
// calculateEngravingPrice("JavaScript is in my blood", 10)
// calculateEngravingPrice("JavaScript is in my blood", 20)
// calculateEngravingPrice("Web-development is creative work", 40)
// calculateEngravingPrice("Web-development is creative work", 20)
// ============================================
// function makeStringFromArray(array, delimiter) {
//     let string;
//     string = array.join(" ");
//     console.log(string)
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// makeStringFromArray(["M", "a", "n", "g", "o"], "")
// makeStringFromArray(["top", "picks", "for", "you"], "_")
// ==============================================
// function slugify(title){
//     let string = "";
//     string = title.toLowerCase().split(" ").join("-")
//     console.log(string)
// }
// slugify("Arrays for begginers")
// slugify("English for developer")
// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")
// ========================================
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.splice(0, 3)
// console.log(firstTwoEls)
// const nonExtremeEls = fruits.splice(1, 4)
// console.log(nonExtremeEls)

// const lastThreeEls = fruits.splice(-3)
// console.log(lastThreeEls)

// =====================================
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients)
// console.log(allClients)
// =================================
// function makeArray(firstArray, secondArray, maxLength){
//     const newArray = firstArray.concat(secondArray)
//     if(newArray.length > maxLength){
// console.log(newArray.slice(0, maxLength))
//     }else{
//        console.log(newArray) 
// } 
//     } 
//     makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
//     makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
//     makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
//     makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
    
// ==========================================
// const start = 3;
// const end = 7;
// for(let i = start; i < end; i +=1){
//     console.log(i)
// }
// ===================================
// function calculateTotal(number){
//     let total = 0;
//     for(let i = 1; i <= number; i += 1){
// total += i
//     }console.log(total)
// }

// calculateTotal(1)
// calculateTotal(3)
// calculateTotal(7)
// calculateTotal(18)
// calculateTotal(24)
// calculateTotal()
// =========================================
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for(let i = 0; i < fruits.length; i += 1){
//     const fruit = fruits[i]
//     console.log(fruit)
// }
// ===============================
// function calculateTotalPrice(order){
// let total = 0;
// for(let i = 0; i < order.length; i += 1){
//     total += order[i]
   
// }
//  console.log(total)
// }
// calculateTotalPrice([12, 85, 37, 4])
// calculateTotalPrice([164, 48, 291])
// calculateTotalPrice([412, 371, 94, 63, 176])
// calculateTotalPrice()
// ========================================
// function findLongestWord(string) {
//     // Change code below this line
//   const words = string.split(" ")
//   let longesWord = "";
// for(const word of words ){
//      if (word.length > longesWord.length){
//         longesWord = word
//       }
// }
//       console.log(longesWord) 
//   }

// findLongestWord("The quick brown fox jumped over the lazy dog")
// findLongestWord("Google do a roll")
// findLongestWord("May the force be with you")
// ==========================================================
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
// for(let i = min; i <= max; i += 1)
//      numbers.push(i)
//     console.log(numbers)
// }
// createArrayOfNumbers(1, 3)
// createArrayOfNumbers(14, 17)
// createArrayOfNumbers(29, 34)

// ====================================
// function filterArray(numbers, value) {
   
//   const biggestNumbers = [];
//   for(let i = 0; i < numbers.length; i += 1){
// if(numbers[i] > value){
//      biggestNumbers.push(numbers[i])
// }
//   }
//   console.log(biggestNumbers)
// }
// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)
// filterArray([12, 24, 8, 41, 76], 38)
// filterArray([12, 24, 8, 41, 76], 20)
// ===============================================
