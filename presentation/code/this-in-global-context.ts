// in the browser environment
console.log(this === window); // true
this.a = 1;
console.log(window.a); // 1

// in Node environment
console.log(this === module.exports); // true
this.a = 1;
console.log(module.exports.a); // 1