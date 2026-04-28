function outer() {
    let message = "Hello from outer function"

    function inner() {
        console.log(message)
    }
    return inner;
}

let myfunction = outer();
myfunction();

console.log("Closure remembers: message variable still accessible");

function greet(greeting) {
    return function (name) {
        return greeting + " " + name;
    }
}

let sayHello = greet("Hello");
console.log(sayHello("Subham"));
console.log(sayHello("Viraj"));

let sayGoodBye = greet("GoodBye");
console.log(sayGoodBye('raja'));

function makeCalculator(operator){
    let result = 0;
    return function(number){
        if (operator === "add"){
            result += number;
        } else if(operator === "multiply"){
            result *= number;
        }
        return result;
    };
}

let adder = makeCalculator("add");
console.log(adder(5))
console.log(adder(10))
console.log(adder(15))

let multiplier = makeCalculator("multiply");
console.log(multiplier(5))
console.log(multiplier(10))
console.log(multiplier(20))

function createMultiplier(factor){
    return function(number){
        return number * factor;
    }
}

let double = createMultiplier(2)
let triple = createMultiplier(3)

console.log(double(5))
console.log(double(10))
console.log(double(34))

console.log(triple(5))
console.log(triple(10))
console.log(triple(20))

