function sum(x: number, y: number, z: number): number {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6