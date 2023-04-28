/**
 * 想打印出参数的 size 属性, 如果完全不进行约束 TS 是会报错的
 * T 理论上是可以是任何类型的，不同于 any，你不管使用它的什么属性或者方法都会报错（除非这个属性和方法是所有集合共有的）
 */
function trace(arg) {
    console.log(arg.size); // Error: Property 'size doesn't exist on type 'T'
    return arg;
}
function trace_1(arg) {
    console.log(arg.size);
    console.log(arg.age);
    return arg;
}
