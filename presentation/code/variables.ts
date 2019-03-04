// var is an oldschool, flexible way of declaring variables
function fn(): void {
    a = 5;
    var a: number;
    if (1 === 1) {
        var b: number = 10; // var is function scoped
    }
    console.log(b); // 10
}
console.log(b); // ReferenceError: b is not defined

// let is a strict way of declaring variables
function fn2(): void {
    let counter: number = 0;
    counter++;
    if (1 === 1) {
        let innerVariable: number = 1; // let is block scoped ({}) 
    }
    console.log(innerVariable); // ReferenceError: innerVariable is not defined
}