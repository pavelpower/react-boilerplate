'use strict';

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

var A = (function () {
    function A(foo) {
        _classCallCheck(this, A);

        this.foo = foo;
    }

    _createClass(A, [{
        key: 'foo',
        value: function foo() {
            console.log('Foo!', this.foo);
        }
    }, {
        key: 'render',
        value: function render() {
            return '<A />';
        }
    }]);

    return A;
})();

var B = function B() {
    _classCallCheck(this, B);

    return Object.assign(this, A);
};

var b = new B('haha');

console.log(A.prototype.Constructor);
