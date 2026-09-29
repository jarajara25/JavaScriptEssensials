var globalVar = "Soy una variable global"
let globalLet = "También soy una variable global, pero con ámbito de let"
const globalConst = "Soy una constante global"

{
//Ámbito de bloque
var blockVar = "Soy un var con ámbito de bloque"
let blockLet = "Soy una let con ámbito de bloque"
const  blockConst = "Soy un const con ámbito de bloque"    
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block scope
//console.log(blockVar);
//console.log(blockLet);


function show(){
var functionVar = "Soy una var con alcance de bloque"
let functionLet = "Soy una let con alcance de bloque"
const functionConst = "Soy una const con alcance de bloque"
}

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);
