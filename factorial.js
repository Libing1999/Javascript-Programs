let n = parseInt(prompt("Enter a number: "));
let s = 1;
for (let i = 1; i <= n; i++) {
    s = s * i;

}
document.write("<h4>FACTORIAL IS = </h4>" + s);