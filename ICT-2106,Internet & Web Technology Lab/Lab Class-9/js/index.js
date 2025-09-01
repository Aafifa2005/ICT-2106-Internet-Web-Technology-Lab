var a=10;
var a=12;
document.writeln(a);

typecasting

number to string
 let b=100;

 let s=b.toString();
 document.writeln(s);

s to num
 let x="100";
 x=parseInt(x);
 document.writeln(typeof(x));
 document.writeln(x);

string to num
let y=100.00
 y=parseFloat(y);
 document.writeln(y);

 document.writeln("</br>"+y.toFixed(1));

user input

 let stuFirstName=prompt("Enter your first name");
 let stuLastName=prompt("Enter your last name");
 document.writeln("</br> <p style='color:red'>"+ stuFirstName+" "+stuLastName + "</p>");

task 1
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

num1 = parseInt(num1);
num2 = parseInt(num2);

let num3 = num1 + num2;
document.writeln("summation of the numbers"+" "+num3);

task 3
let temp=prompt("enter the celcius scale");
temp=parseFloat(temp);
let f=((temp*9)/5)+32;
document.writeln(f);

document.writeln(Number(prompt("enter the first number"))+Number(prompt("enter the second number")));
var digit=Number(prompt("enter any digit"));
var print = digit > 0 ? "<br/>Positive<br/>": "<br/>Negative<br/>";
document.writeln(print);
var print = (!firstNumber && digit  > digit) ? digit > 0 ? "<br/>A<br/>":"<br/> B <br/>":"<br/>Negative<br/>";
var i=10;
 do{
     document.writeln(i + "<br>");
 }
 while(i <= 10)