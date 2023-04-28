function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity(3); // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 });
