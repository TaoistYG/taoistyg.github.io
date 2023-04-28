/**
 * Readonly<T> 的作用是将某个类型所有属性变为只读属性，
 * 也就意味着这些属性不能被重新赋值。
 */
type Readonly_demo<T> = {
    readonly [P in keyof T]: T[P];
};


interface Todo_read {
    title: string;
}

const todo_read: Readonly<Todo_read> = {
    title: "Delete inactive users"
};

todo_read.title = "Hello"; // Error: cannot reassign a readonly property
