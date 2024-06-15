// 2
function regularFunction(param) {
    // Function body
    return param;
}
  
const arrowFunction = (param) => {
    // Function body
    return param;
}

// 3
const person = {
    name: "Lirone",
    greetArrow: () => {
        console.log(this.name); 
        // 'this' refers to the global object (or undefined in strict mode)
    },

    greetRegular: function() {
        console.log(this.name); 
        // 'this' refers to the 'person' object
    }
};

person.greetArrow(); // Output: undefined
person.greetRegular(); // Output: Lirone


// 4
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3)); // Output: 6

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
};

console.log(sum(1, 2, 3)); // Output: 6


// 5
function RegularFunction() {
    this.value = 5;
}

const instance = new RegularFunction(); // Valid

const ArrowFunction = () => {
    this.value = 5;
}

const instance = new ArrowFunction(); // Error


// 7
const obj = {
    value: 10,
    regularFunction: function() {
        console.log(this.value); // 10
    },
    arrowFunction: () => {
        console.log(this.value); // undefined
    }
}

obj.regularFunction();
obj.arrowFunction();

// bind
const obj = { value: 10 };

function regularFunction() {
    console.log(this.value);
}

const boundFunction = regularFunction.bind(obj);
boundFunction(); // 10

const arrowFunction = () => {
    console.log(this.value);
}

const boundArrowFunction = arrowFunction.bind(obj);
boundArrowFunction(); // undefined
