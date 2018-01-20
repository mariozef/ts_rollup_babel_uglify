import ClassA from './ClassA';

class B {
    private a: ClassA;

    constructor() {
        this.a = new ClassA();
    }

    public init(): void {
        console.log('init');
    }
}

export default B;