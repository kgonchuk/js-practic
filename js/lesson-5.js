// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement


const list = document.createElement('ul')
const btnAdd = document.createElement('button');
btnAdd.textContent = 'add';
const btnRemove = document.createElement('button');
btnRemove.textContent = 'Remove';
const inputEl = document.createElement('input');
document.body.append(btnAdd, btnRemove, inputEl, list)














// const list = document.createElement("ol");
// const btnAdd = document.createElement("button");
// btnAdd.textContent = "Add";
// const btnRemove = document.createElement("button");
// btnRemove.textContent = "Remove";
// const input = document.createElement("input");
// document.body.append(input, btnAdd, btnRemove, list);
// btnAdd.addEventListener("click", addItem);
// function addItem() {
//   if (input.value === "") return;
//   const item = document.createElement("li");
//   item.textContent = input.value;
//   list.append(item);
//   input.value = "";
// //   if (list.children.length % 2 === 0) {
// //     item.style.backgroundColor = "yellow";
// //   } else {
// //     item.style.backgroundColor = "blue";
// //   }
// item.style.backgroundColor = list.children.length % 2 === 0 ? "yellow" : "blue";
// }
// btnRemove.addEventListener("click", removeItem);
// function removeItem() {
//   if (list.lastChild) {
//     list.lastChild.remove();
//   }
// }