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

try {
  someOperation();
} catch (error) {
  console.error(error);
} finally {
  tearDown();
}