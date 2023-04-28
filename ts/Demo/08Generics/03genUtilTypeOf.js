var sem = { name: 'aaa', age: 20 };
var lolo = { name: "lolo", age: 5 };
// 对嵌套对象操作
var Message = {
    name: "jimmy",
    age: 18,
    address: {
        province: '四川',
        city: '成都'
    }
};
/*
type message = {
    name: string;
    age: number;
    address: {
        province: string;
        city: string;
    };
}
*/
// 获取函数对象的类型
function toArray(x) {
    return [x];
}
