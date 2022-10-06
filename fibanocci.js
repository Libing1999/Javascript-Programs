
const n = parseInt(prompt("Enter a positive number: "));
let a = 0, b = 1, c;
document.write("<b><h2>fibanocci series :</h2></b><br>");
for (let i = 1; i <= n; i++) {
    document.write(a);
    document.write("<br>");
    c = a + b;
    a = b;
    b = c;
} 