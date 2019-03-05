const drawer = {
  isOpen: false,
  open: function(): void {
    this.isOpen = true;
  },
  close: function(): void {
    this.isOpen = false;
  },
  toggle: function(): void {
    this.isOpen = !this.isOpen;
  }
};

drawer.open();
console.log(drawer.isOpen); // true - this points to the object when called as an object method

const closeDrawer = drawer.close;
closeDrawer();
console.log(drawer.isOpen); // that won't work, closeDrawer is just a function
// furthermore, global.isOpen property will be created 💩

// this will not work either - we'll learn how to fix this in a moment
document.getElementById('button').addEventListener('click', drawer.toggle);