// the Java way
class MyClass {
    publicField: string;
    private privateField: number;

    constructor(publicField: string, privateField: number) {
        this.publicField = publicField;
        this.privateField = privateField;
    }
}

// the TypeScript way
class MyClass {
    constructor(public publicField: string, private privateField: number) {
    }
}