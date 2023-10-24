function createStack() {
    let stack = [];
    return stack;
}

function checkEmpty(stack) {
    return stack.length == 0;
}

function push(stack, item) {
    stack.push(item);
    console.log("Push " + item + " in Stack");
}

function pop(stack) {
    if (checkEmpty(stack)) {
        console.log("Stack Empty");
    } else {
        stack.pop();
        console.log("Pop Item from Stack")
    }
}


stack = createStack();
push(stack, 1);
push(stack, 5);
pop(stack);
// pop(stack);

console.log(stack);

