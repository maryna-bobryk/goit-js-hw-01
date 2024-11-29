function getElementWidth(content, padding, border) {
const contentWidth = parseFloat(content);
const paddingtWidth = parseFloat(padding) * 2;
const bordertWidth = parseFloat(border) * 2;
const elementWidth = contentWidth + paddingtWidth + bordertWidth;

return elementWidth
}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200