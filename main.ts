 //~~~~~~~~~Step 00~~~~~~~~~~~~~
 //<<<<<<<<<Hello World<<<<<<<<<<<<<

 console.log("Hello World"); 

 //~~~~~~~~~~~Step 00a~~~~~~~~~
 //JSON stands for Javascript Object Notation.

 //JSON is a text-based data format that is used to store and transfer data.

 // JSON syntax

 {  
 "name": "Niba farooq",
 "age": 18,
 "gender": "female",
 } 

 //In JSON (JavaScript Object Notation), keys are always represented as strings.

 //~~~~~~~~~~~~~~~~~~Step 00b~~~~~~~~~~~~~
 //<<<<<<<<<<<<Syntax error>>>>>>>>>>>>>>
 //If we incorrectly write a reserved keyword, it will result in a syntax error in TypeScript.
 //Missing or Incorrect Punctuation: Missing parentheses, brackets, braces, commas, semicolons, or quotation marks can all lead to syntax errors
 lett message = "This is me niba farooq" //syntax error
 console.log(message);

 let message = "Hello, World!"  // SyntaxError: Missing semicolon

 function addNumbers(a: number, b: number {   // SyntaxError: Expected ")" after parameter list
 return a + b;
 }

 //~~~~~~~~~~~~~~Step 00c~~~~~~~~~~~~~~~~~
 //<<<<<<<<<<<<<<Type error>>>>>>>>>>>>>>
 //The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
 let age: number = 18;
 //console.loger(age) // Type error

 //Function parameter
 function personName(name:string) {
    return "Hello, " + name;
 }

 //personName(42); // Argument of type 'number' is not assignable to parameter of type 'string'
 
 //~~~~~~~~~~~~~~~~~Step 00d~~~~~~~~~~~~~
 //<<<<<<<<<<<<<<<<Assignibility error>>>>>>>>>>>>>>><<
 //Assignability error occurs when TypeScript determines that a value cannot be assigned to a variable or parameter due to a type mismatch or violation of type constraints.


 let myNAme = "nibakhan";
 myNAme = 15               //Assignibilty error
 console.log(myNAme)
 
 let userName = "Niba khan"
 if(true){
    console.log(userName)   // It seems there are assignibility errors; we are accessing it inside a block.
 };

 //~~~~~~~~~~~~~~~Step 01~~~~~~~~~~~~~~
 //=============Strong typing==============
 //Explicit typing =====> strong typing
 //In strong typing, we are required to specify the type of a variable explicitly.

 let myName :string = "Niba";
 let myAge : number = 18;
 let isStudent : boolean = true;

 //===========Type inference===========
 //implicit typing =======> weak typing
 //Implicit typing in TypeScript refers to the ability of the TypeScript compiler to automatically infer the type of a variable based on its initialization value. 

 let myname = "niba khan";
 let myage = 18;
 let isstudent = true;

 //~~~~~~~~~~~~~~~Step 02~~~~~~~~~~~~~
 //============let and const============
 //-------let-------
 //The let keyword introduces block-scoped variables in TypeScript, which means they are accessible only within the block (such as a for loop, function, or if block) where they are declared.Variables declared with let cannot be redefined later, but their value can be updated.

 let teacherName = "Hamza Alvi";  // Variable declaration using let
        //or
 let TeacherName: string = "Hamza Alvi"   

 // let block scope:

 if(true){
    let age = 18
 }
 console.log("age" age)  //error

 //-------const-------
 // const is used to declare constants, which are variables whose values cannot be reassigned once they are initialized.

 const num:number = 4
 console.log(num);
 num = 2; // it will show an error Cannot assign to "num" because it is a constant.

