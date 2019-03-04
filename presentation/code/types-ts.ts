const myNumber: number = 1;
const myString: string = 'string';
const myBoolean: boolean = false;
const myArray: number[] = [1, 2, 3];

let myAny: any = 4;
myAny = 'maybe a string instead?';

enum Color { Red, Green, Blue };
const myEnumValue = Color.Red;

const myMap: { [key: string]: string } = {
    key1: 'value',
    key2: 'value'
};

// discouraged/hardly used in TypeScript
const myObject: object = { key1: 'value' };
const myUndefined: undefined = undefined;
const myNull: null = null;