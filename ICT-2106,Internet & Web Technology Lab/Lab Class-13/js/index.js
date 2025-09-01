// function addStyle(){
//     var paraId=document.querySelector('#paraId');
//     paraId.style.color="red";
//     paraId.style.fontSize="3rem";
//     paraId.style.fontWeight="bold";
//     paraId.style.fontStyle="italic";
// }
// function removeStyle(){
//     var paraId=document.querySelector('#paraId');
//     paraId.style=" ";
// }
//better approach
function addStyle() {
  // var paraId = document.querySelector('#paraId');
    paraId.classList.add("para-style");
}

function removeStyle(){
    paraId.classList.remove("para-style");
}

function next(){
 location.href="templates/next.html" ;
}

function back(){
 location.href="../index.html";
}
function peacockclick(){
    location.href="images/peacock.webp";
}

// //add event listener
 // var paraId=document.querySelector('button');
//if i have multiple buttons to recognize use button Id

var buttonId=document.querySelector('#addButton');
buttonId.addEventListener("click",addStyle);

function toggleStyle(){
   var paraId=document.querySelector('#paraId')
   paraId.classList.toggle("para-style");
}


// document.addEventListener("click",function(a,b){
//     var paraId=document.querySelector('#paraId');
//     paraId.innerHTML=(a+b)}(1,3)
// );
 var button=document.querySelector('#addButton');
button.addEventListener("click", function() {
    var paraId = document.querySelector('#paraId');
    paraId.innerHTML = 1+3;
});

const names=['ASD','gsv','svxhsn'];
//for of
for(let a of names){
    document.writeln(a);
}
//for in

let person={
    id:1,
    name: 'Sabara Badhon',
    profession:"teaching"
};
for (let x in person){
    document.writeln("</br>" + x+ ":"+person[x]);
}

//for each looop

var numbers=[1,,2,3,4,5];

numbers.forEach(function(x){
 document.writeln(x+"</br>")   
})

//arrow
const display=()=>{
    return "<br/> hello bjhabk";
}
document.writeln(display());

add=(a,b)=> document.writeln("Add: "+(a+b),"Sub"+(a-b));
add(1,2);
