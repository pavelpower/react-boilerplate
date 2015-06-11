class A {
    constructor(foo) {
        this.foo = foo
    }

    foo() {
        console.log('Foo!', this.foo);
    }

    render() {
        return '<A />'
    }
}

class B {
    constructor() {
        return Object.assign(this, A)
    }
}

var b = new B('haha');

console.log(A.prototype.Constructor);
