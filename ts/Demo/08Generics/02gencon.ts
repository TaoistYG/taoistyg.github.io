/**
 * 想打印出参数的 size 属性, 如果完全不进行约束 TS 是会报错的
 * T 理论上是可以是任何类型的，不同于 any，你不管使用它的什么属性或者方法都会报错（除非这个属性和方法是所有集合共有的）
 */
function trace<T>(arg: T): T {
    console.log(arg.size); // Error: Property 'size doesn't exist on type 'T'
    return arg;
}

/**
 * 使用类型约束
 * 使用 extends 关键字可以做到这一点。简单来说就是你定义一个类型，然后让 T 实现这个接口即可
 */
interface Sizeable {
    size: number;
}

interface Ageable extends Sizeable {
    age: number;
}

function trace_1<T extends Ageable >(arg: T): T {
    console.log(arg.size);
    console.log(arg.age);
    return arg;
}