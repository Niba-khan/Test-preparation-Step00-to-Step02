//~~~~~~~~~Step 00~~~~~~~~~~~~~
//<<<<<<<<<Hello World<<<<<<<<<<<<<
console.log("Hello World");
//~~~~~~~~~~~Step 00a~~~~~~~~~
//JSON stands for Javascript Object Notation.
//JSON is a text-based data format that is used to store and transfer data.
// JSON syntax
//{  
//"name": "Niba farooq",
//"age": 18,
//"gender": "female",
//} 
//~~~~~~~~~~~~~~~~~~Step 00b~~~~~~~~~~~~~
//<<<<<<<<<<<<Syntax error>>>>>>>>>>>>>>
//If we incorrectly write a reserved keyword, it will result in a syntax error in TypeScript.
//Missing or Incorrect Punctuation: Missing parentheses, brackets, braces, commas, semicolons, or quotation marks can all lead to syntax errors
//lett message = "This is me niba farooq" //syntax error
//console.log(message);//
var message = "Hello, World!"; // SyntaxError: Missing semicolon
//function addNumbers(a: number, b: number {   // SyntaxError: Expected ")" after parameter list
//return a + b;
//}
//~~~~~~~~~~~~~~Step 00c~~~~~~~~~~~~~~~~~
//<<<<<<<<<<<<<<Type error>>>>>>>>>>>>>>
//The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
var age = 18;
//age = "Eighteen";  // Type 'string' is not assignable to type 'number'
//Function parameter
function personName(name) {
    return "Hello, " + name;
}
//personName(42); // Argument of type 'number' is not assignable to parameter of type 'string'
//~~~~~~~~~~~~~~~~~Step 00d~~~~~~~~~~~~~
//<<<<<<<<<<<<<<<<Assignibility error>>>>>>>>>>>>>>><<
//Assignability error occurs when TypeScript determines that a value cannot be assigned to a variable or parameter due to a type mismatch or violation of type constraints.
var userName = "Niba khan";
if (true) {
    console.log(userName); // It seems there are assignibility errors; we are accessing it inside a block.
}
;
//~~~~~~~~~~~~~~~Step 01~~~~~~~~~~~~~~
//=============Strong typing==============
//Explicit typing =====> strong typing
//In strong typing, we are required to specify the type of a variable explicitly.
var myName = "Niba";
var myAge = 18;
var isStudent = true;
//===========Type inference===========
//implicit typing =======> weak typing
//Implicit typing in TypeScript refers to the ability of the TypeScript compiler to automatically infer the type of a variable based on its initialization value. 
var myname = "niba khan";
var myage = 18;
var isstudent = true;
//~~~~~~~~~~~~~~~Step 02~~~~~~~~~~~~~
//============let and const============
//-------let-------
//The let keyword introduces block-scoped variables in TypeScript, which means they are accessible only within the block (such as a for loop, function, or if block) where they are declared.Variables declared with let cannot be redefined later, but their value can be updated.
var teacherName = "Hamza Alvi"; // Variable declaration using let
//or
var TeacherName = "Hamza Alvi";
// let block scope:
if (true) {
    var userName_1 = "nibakhan";
    console.log("userName", userName_1);
}
console.log("userName", userName);
