let a: void; 
let b: number = a; // Error

// 你只能为它赋予null和undefined（在strictNullChecks未指定为true时）。
// 声明一个void类型的变量没有什么大用，我们一般也只有在函数没有返回值时去声明

// 方法没有返回值将得到undefined，但是我们需要定义成void类型，而不是undefined类型。否则将报错
function fun(): undefined {
    console.log("this is TypeScript");
};
fun(); // Error