const _number_: number = 1;
const _string_: string = 'string';
const _boolean_: boolean = false;
const _array_: number[] = [1, 2, 3];

let _any_: any = 4;
_any_ = 'maybe a string instead?';

enum Color { Red, Green, Blue };
const _enumValue_ = Color.Red;

const _map: { [key: string]: string } = {
    key1: 'value',
    key2: 'value'
};

// discouraged/hardly used in TypeScript
const _object_: object = { key1: 'value' };
const _undefined_: undefined = undefined;
const _null_: null = null;