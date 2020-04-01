const income = [324, 568, 8900, 34];
const expenses = [8000, 555, 889, 12, 56, 453];

let totalIncome = 0;
let totalExpenses = 0;

for (let i = 0; i < income.length; i++) {
  totalIncome = totalIncome + income[i];
}

for (let i = 0; i < expenses.length; i++) {
  totalExpenses = totalExpenses + expenses[i];
}

let balance = totalIncome - totalExpenses;

if (balance >= 0) {
  console.log("Вітаю ваш баланс плюсовий і =", balance);
} else {
  console.log("Нажаль ваш баланс нижче нуля і =", balance);
}
