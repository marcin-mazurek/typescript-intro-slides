class MyClass {
    private privateField: string;
    protected protectedField: number;
    publicField: boolean; // 'public' keyword is optional and generally discouraged
    
    constructor(privateField: string, protectedField: number) {
        this.privateField = privateField;
        this.protectedField = protectedField;
    }
    myMethod(): string {
        return 'value';
    }
    get customGetter(): string {
        return 'custom value';
    }
    set customSetter(value: number) {
        this.protectedField = value;
    }
}

const myClass = new MyClass('a', 1);
console.log(myClass.customGetter); // -> 'custom value'
myClass.customSetter = 5; // this.protectedField will be updated