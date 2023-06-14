
// //   3. Spread + Rest
// //   Напишіть функцію getMinNumber яка приймає довільну кількість чисел
// //   та повертає найменше із них
// // */
// // function getMinNumber(...rest){
// //     return Math.min(...rest)
// // }
// // console.log(getMinNumber(26,7774.3,0,83747, -74838))


// /*
//   4. Деструктуризація об'єктів, які проблеми вирішує
//   Напишіть деструктуризуюче присвоювання, яке:
//   властивість firstName присвоїть у змінну firstName
//   властивість age присвоїть у змінну userAge
//   властивість isAdmin присвоїть у змінну isAdmin (false, по дефолту
//   якщо, у об'єкта данної властивості не буде)
//   всі інші властивості зібрати у об'єкт features
// */

// // const user = {
// //   firstName: "Andrii",
// //   lastName: "Shevchuk",
// //   age: 30,
// //   eyeColor: "green",
// //   hobbies: [],
// //   isAdmin: true,
// // };
// // const {firstName, age: userAge, isAdmin = false, ...features } = user;
// // console.log(firstName, userAge, isAdmin, features)






// /*
//   5. Глубока деструктуризація об'єктів
//   Потрібно дістати значення усіх властивостей, включно
//   з вкладеними у об'єкт langs
// */

// // const team = {
// //   number: 4,
// //   flag: "./images/flag.jpg",
// //   employees: ["Anton", "Oleg", "Ronnie", "Carr"],
// //   langs: {
// //     original: "uk",
// //     secondary: "en",
// //   },
// // };
// // const {number, flag, employees, langs: {original, secondary}} = team; 
// // console.log(number, flag, employees, original, secondary)


// /*
//   6. Деструктуризація масивів
// */

// /*
//   Дістати перший та третій елементи масиву, всі інші після 
//   третього занести в окремий масив
// */

// // const names = [
// //   "Herbert Todd",
// //   "Belle Soto",
// //   "Roger Marsh",
// //   "Ethan Lindsey",
// //   "Leo Dicaprio",
// //   "Arnold Polo",
// // ];

// // const [first, , third, ...rest] = names;
// // console.log(first, third, rest)



// /*
//   У нас є об'єкт salaries з зарплатами
//   Створіть функцію topSalary(salaries), яка повертає ім'я найбільш
//   високооплачуваного працівника
//   Якщо об'єкт salaries пустий то повернути null
//   Якщо декілька людей з одною тою самою зарплатою є найбільш високооплачуваними, 
//   можна повернути будь-якого з них
 
//   Використовуйте Object.entries та деструктуризацію, щоб перебрати пари ключ/значение.
// */

// // const salaries = {
// //   John: 100,
// //   Pete: 300,
// //   Mary: 250,
// // };

// // function topSalary(salariesData) {
// //     let topSalary = 0;
// //     let topPaidEmployeeName = 0;
// //     const entries = Object.entries(salaries)
// //     for (let [name, salary] of entries) {
        
// //         if (topSalary < salary) {
// //             topSalary = salary;
// //             topPaidEmployeeName = name;
// //         }
// //     }
// //     return topPaidEmployeeName;
// // }
// // console.log(topSalary(salaries))



// /*
//   7. Паттерн 'об'єкт параметрів', яку проблему вирішує
//   Перепишіть функцію sayHi, щоб вона відповідала заданому паттерну
// */

// // function sayHi({name, age, height, weight}) {
// //   console.log(
// //     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
// //   );
// // }

// // sayHi({ name: "Zoya", age: 25, height: 170, weight: 55 });

// // const skoda = {
// //     make: "Skoda",
// //     model: "Fabia",
// //     year: 2011,
// //     color: "black",
// //     passangers: 4,
// //     convertible: false,
// //     mileage: 5000,
// //     started: false,
// //     fuel: 0,
// //     light: function() {
// //         console.log("Фари ввімкнеі")

// //     },
// //     start() {
// //         this.started = true
// //     },
// //     stop() {
// //         this.started = false
// //     },
// //     drive() {
// //         if (this.started) {
// //             if (this.fuel > 0) {
// //                 alert(`${this.make} ${this.model}  поїхала`);
// //                 this.fuel = this.fuel - 1;
// //             } else {
// //                 alert("Потрібно дозаправити");
// //                 this.stop();
// //             }
// //             } else {
// //             alert("Потрібно завести двигун");
// //             }
// //         } ,
    
// //     addFluel (ammount) {
// //         this.fuel = this.fuel + ammount
// //     },






// // };
// // skoda.start();
// // skoda.drive();
// // skoda.addFluel(3);
// // skoda.start();
// // skoda.drive();
// // skoda.drive();
// // skoda.drive();
// // skoda.drive();
// // skoda.stop();

// // const buttonSend = document.querySelector(".js-button")
// // const clickBtnNew = function () {
// //   console.log("Клик по кнопке")
// // }
// // buttonSend.addEventListener(`click`, clickBtnNew )

// const arr = [1, 3, 5, 7, 9];
// function each(arr, callback) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i += 1){
//     total = callback(total, arr[i])
//   }
//   return total
// }
// console.log(each(arr, add))
// console.log(each(arr, sum))
// console.log(each(arr, division))
// function add(firstNumber, secondNumber) {
//   return firstNumber + secondNumber
// }

// function sum(firstNumber, secondNumber) {
//   return firstNumber * secondNumber
// }

// function division(firstNumber, secondNumber) {
//   return firstNumber / secondNumber
// }
 