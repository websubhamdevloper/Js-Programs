let globalVar = "I'm a global";
console.log("Global var : ", globalVar);

function testFunctionScope() {
  let functionVar = "I'm in a function";
  console.log("Inside a function:", functionVar);

  if (true) {
    let blockVar = "I'm in a block";
    console.log("Inside a block:", blockVar);
  }
}

testFunctionScope();

if (true) {
  let insideIf = "Inside if block";
  const insideIfConst = "Also inside if";
  console.log("Inside if:", insideIf);
}

for (let i = 0; i < 3; i++) {
  console.log("Inside the loop:", i);
}

