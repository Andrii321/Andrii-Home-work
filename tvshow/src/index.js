const tvShows = [
  "Мастер Шеф",
  "Х Фактор",
  "Дизель шоу",
  "Вечірній квартал",
  "Вар'яти"
];
const customShow = window.prompt("Введіть ще одне шоу");
tvShows.push(customShow);

console.log(tvShows.join(", "));
