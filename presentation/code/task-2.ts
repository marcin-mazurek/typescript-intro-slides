class MyClass {
    private privateField: string;
    protected protectedField: number;
    publicField: boolean;
    
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