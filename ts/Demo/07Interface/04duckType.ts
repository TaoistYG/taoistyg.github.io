/**
 * 在参数里写对象就相当于是直接给labeledObj赋值，这个对象有严格的类型定义，所以不能多参或少参
 * 
 * 当你在外面将该对象用另一个变量myObj接收，myObj不会经过额外属性检查，但会根据类型推论为let myObj: { size: number; label: string } = { size: 10, label: "Size 10 Object" };
 * 然后将这个myObj再赋值给labeledObj，此时根据类型的兼容性，两种类型对象，参照鸭式辨型法，因为都具有label属性，所以被认定为两个相同
 * 用此法来绕开多余的类型检查
 */


interface LabeledValue {
    label: string;
}
function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); // OK

printLabel({ size: 10, label: "Size 10 Object" }); // Error

