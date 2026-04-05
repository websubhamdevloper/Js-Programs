const n = 3400 // 'const' keyword is used for variables that won't change
let userName = "Subham" // 'let' keyword is used the most nowadays for variable declaration
var Status = "online" // 'var' keyord is mostly avoided nowadays to prevent accidental errors

console.log(n);
console.log(typeof n);
console.log(userName);
console.log(Status);

{
    let userName = "Subham Kundu" //'let' created a new variable scoped to this block
    console.log(userName);
    
}
console.log(userName);

{
    var Status = "offline"; // 'var' changed the value of Status globally
    console.log(Status);
    
}
console.log(Status);
