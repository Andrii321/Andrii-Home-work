const squareWidth = 10;
const heightWidth = 10;
function showCalculatedPerimeter(algoritm, width, height) {
  console.log("Довжина квадрата = " + width);
  console.log("Ширина квадрата = " + height);
  console.log("Периметер квадрата = " + algoritm(width, height));
}
showCalculatedPerimeter(perimeterSquare, squareWidth, heightWidth);

function perimeterSquare(squareWidht, heightWidht) {
  return (squareWidht + heightWidht) * 2;
}
