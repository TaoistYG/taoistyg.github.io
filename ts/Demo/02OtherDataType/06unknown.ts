/**
 * unknown与any一样，所有类型都可以分配给unknown
 */
let notSure: unknown = 4;
notSure = "maybe a string instead"; // OK
notSure = false; // OK

/**
 * unknown与any的最大区别是： 
 * 任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。
 * unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any
 */
let notSure1: unknown = 4;
let uncertain1: any = notSure1; // OK

let notSure2: any = 4;
let uncertain2: unknown = notSure2; // OK

let notSure3: unknown = 4;
let uncertain3: number = notSure3; // Error

//dog 被声明为 unknown 类型，并赋值
//编译器无法推断其具体类型，因此在访问 dog.hello 属性时会报错
//如果不缩小类型，就无法对unknown类型执行任何操作：
function getDog() {
    return '123';
}
const dog: unknown = {hello: getDog};
console.log(dog.hello())

//这种机制起到了很强的预防性，更安全，这就要求我们必须缩小类型，我们可以使用typeof、类型断言等方式来缩小未知范围
function getDogName(): unknown {
    let x: unknown;
    return x;
}
const dogName = getDogName();
// 直接使用
const upName = dogName.toLowerCase(); // Error
// typeof
if(typeof dogName === 'string') {
    const upName = dogName.toLowerCase();
}
// 类型断言
const upName1 = (dogName as string).toLowerCase();