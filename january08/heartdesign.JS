let str="";
var n = 6; // as it will 6 rows? idk
// for 2 lines which represents a heart 
/*outer loop*/ for (let i = n / 2; i < n; i += 2) {
//for 1st line 1 space and second line 0 space "basiclly we have to run it only once"
for (let j = 1; j < n - i; j += 2)  {
str += ' ';
}
// for 1st line 3 stars and seond line 5 stars
for (let j = 1; j < i + 1; j++) {
str += `*`;
}
//for first line 3 space and second line 1 space
for (let j = 1; j < n - i + 1; j++) {
str += " ";
}
// copied from upper part 
for (let j = 1; j < i + 1; j++) {
str += `*`;
}
str += "\n";
}
// inverse pyramid
for (let i = n; i > 0; i--) {
for (let j = 0; j < n - i; j++) {
str += ' ';
}
//for **
for (let j = 1; j < i * 2; j++) {
str += `*`;
}
str += "\n"
}
console.log(str);