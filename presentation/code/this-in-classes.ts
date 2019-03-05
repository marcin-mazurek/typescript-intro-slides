class Drawer {
  isOpen: boolean = false;
  open(): void {
    this.isOpen = true;
  }
  close(): void {
    this.isOpen = false;
  }
  toggle(): void {
    this.isOpen = !this.isOpen;
  }
};

const drawer = new Drawer();
drawer.open();

const closeDrawer = drawer.close;
closeDrawer(); // again, that won't work as expected
console.log(drawer.isOpen); // true