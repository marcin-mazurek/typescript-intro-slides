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
const closeDrawer = () => drawer.close();

closeDrawer(); // that works!

// the below works too
document.getElementById('button').addEventListener('click', () => drawer.toggle());