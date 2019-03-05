// a single line comment
/* a multi-line
   comment */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

if (a > 0) {
  console.log('a is positive');
} else if (a === 0) {
  console.log('a is zero');
} else {
  console.log('a is negative');
}

if (1 == '1') {
  console.log('this will execute');
}
if (1 === '1') {
  console.log("this won't execute");
}