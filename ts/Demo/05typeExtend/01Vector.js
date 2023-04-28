function getComponent(vector, axis) {
    return vector[axis];
}
// let x_vec = 'x'; // error
var x_vec = 'x'; // let限制
// const x_vec = 'x'; // const 限制常量
var vec = { x: 10, y: 20, z: 30 };
getComponent(vec, x_vec);
