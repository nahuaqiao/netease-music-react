// 1. 在内存中创建一个新对象
// 2. 新对象__proto__赋值为构造函数的prototype
// 3. 构造函数内部的this被赋值为新对象
// 4. 执行构造函数内部的代码
// 5. 返回构造函数的返回值, 若不存在, 则返回新创建的对象

// class Foo() { }
// const foo = {}
// foo.__proto__ = Foo.prototype
// constructor.this = foo
// // 执行构造函数内部代码
// const res = constructor() || foo
