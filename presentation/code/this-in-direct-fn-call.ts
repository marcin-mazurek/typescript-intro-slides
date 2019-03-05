function getContext() {
  return this;
}

// In browser environment
console.log(getContext() === window); // true 

// In Node
console.log(getContext() === global); // true

function getContextInStrictMode() {
  'use strict';
  return this;
}

console.log(getContextInStrictMode() === undefined); // true
