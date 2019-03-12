function init() {
  const myVariable = 'I can be accessed within "init" function';
  function showName() {
    alert(myVariable);
  }
  showName();
}

init(); // alerts "I can be accessed within "init" function"
console.log(myVariable); // throws "Uncaught ReferenceError: myVariable is not defined"