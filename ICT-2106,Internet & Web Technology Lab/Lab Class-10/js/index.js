var a=Number(prompt("Enter the number"));
var a=12;
if(a>10)
    document.writeln("A is greater than 10");
else
 document.writeln("A is less than or equal to 10");

( a>10 )? ((a==12)? document.writeln("A is equal to 12 "):document.writeln("A is not equal to 12 ")):document.writeln("A is less than or equal to 10");
//function
square(a);
function square(a){
    document.writeln("</br>"+a*a+a*a*a+"</br>");
}
function cube(a){
   return a*a*a; 
}
var a = Number(prompt("Enter the number"));
 document.writeln( a + " is: " + cube(a));
//  immediately invokable  function expression
 (function square(a){
   document.writeln("Cube of ief " + a + " is: " + a*a);
})(a);
//array
let names=['Aaa','Bbb','Ccc'];
document.writeln("names"+names);
let firstName= new Array();
 firstName[0]='Eee';
document.writeln(firstName);
let firstArray= new Array();//dynamic,not needed to fix place
let secondArray= new Array();
firstArray[0]="Asd";
firstArray[1]="Asdewe";
firstArray[2]=12;
secondArray[0]="Asd";
secondArray[1]="Asdewe";
document.writeln(firstArray.concat(secondArray));
document.writeln(firstArray);

for(i=0;i<firstArray.length;i++){
   document.writeln(firstArray[i]+" ");
 
}
document.writeln(firstArray.push("Fifo"));

//sorting numbers
let numbers=['233','3334','9877'];
numbers.sort(function(a,b){
    return a-b;
})

document.writeln("</br>"+numbers);

var array2d=[[1,'A'],[2,'B'],[3,'C'],[4,'D']];
for( j=0;j<array2d.length;j++){
   for(k=0;k<array2d[j].length;k++) {
    document.writeln(array2d[j][k]);
   }
   document.writeln("</br>");
}