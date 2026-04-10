let message = "Hello World";
console.log(message);
console.log(message.length);
let length_message = message.length;
console.log(length_message);

let upperMessage = message.toUpperCase();
let lowerMessage = message.toLowerCase();
console.log(upperMessage);
console.log(lowerMessage);

let firstChar = message.charAt(0);
console.log(firstChar);
let fifthChar = message.charAt(4);
console.log(fifthChar);
let lastChar = message.charAt(length_message - 1);
console.log(lastChar);

let pos1 = message.indexOf("W");
let pos2 = message.indexOf("r");
console.log(pos1);
console.log(pos2);

let valueAt = message[6];
let valueIn = message[2];
console.log(valueAt);
console.log(valueIn);
