// an object can be passed as the first argument to call or apply and this will be bound to it
const myCustomContext = { myProperty: 'custom' };

// this property is set on the global object
global.myProperty = 'global';

function whatsThis() {
  return this.myProperty; // the value of this is dependent on how the function is called
}

console.log(whatsThis()); // 'global'
console.log(whatsThis.call(myCustomContext)); // 'custom'
console.log(whatsThis.apply(myCustomContext)); // 'custom'

const boundWhatsThis = whatsThis.bind(myCustomContext);
console.log(boundWhatsThis()); // 'custom'