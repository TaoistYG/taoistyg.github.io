/**
 * 任意属性
 */
interface Person_any {
    name: string;
    age?: number;
    [propName: string]: any;
}

let mark: Person_any = {
    name: 'mark',
    age: 12,
    gender: 'male',
}

/**
 * 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
 * 
 */
interface Person_total {
    name: string;
    age?: number;
    [propName: string]: string | number | undefined;
}

let mark_1: Person_total = {
    name: 'mark_1',
    age: 25,
    gender: 'male',
};