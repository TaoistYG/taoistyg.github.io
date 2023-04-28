interface Vector3 {
    x: number;
    y: number;
    z: number;
}

function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z') {
    return vector[axis];
}

// let x_vec = 'x'; // error
let x_vec: 'x' = 'x'; // let限制
// const x_vec = 'x'; // const 限制常量
let vec = { x: 10, y: 20, z: 30 };


getComponent(vec, x_vec)