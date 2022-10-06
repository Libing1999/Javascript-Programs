let n = parseInt(prompt("Enter a number: "));
let a, b, t = 0;
b = n;
while (n > 0) {
    a = n % 10;
    n = parseInt(n / 10);
    t = t * 10 + a;
}
if (t == b) {
    document.write("<b><h1>Pallindrome</h1></b>");
} else {
    document.write("<b><h1>Not pallindrome</h1></b>");
}
