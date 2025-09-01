var person = {
  Name: "John",
   age: 50,
  courses:["os","dsa","alu"]
}
document.writeln(person.Name+" "+person.age+" "+person.courses);

//using constructor

function Person(Name,age,courses){
    this.Name=Name;
    this.age=age;
    this.courses=courses;

    // this.display =function(){
    //     document.writeln(this.name+" "+this.age+" "+this.courses);}
     

    this.display =function(){
        document.writeln(this.Name+"has taken"+ " "+this.courses[0]+" "+"in this semester");
    }
}

var person2= new Person("Aafifa",20,["os","dsa","alu"]);
person2.display();

//math function

//document.writeln("</br>"+document.getElementById("header1"));
var text=document.getElementById("header1");
document.writeln(text);
text.innerHTML="hello";


let Text=document.querySelectorAll(".h3");
for(var i=0;i<Text.length;i++ ){

//var text1=document.getElementsByTagName("h3");
document.writeln(Text[i].innerHTML);
//document.getElementByTagName("h3").style.color = "red";
 Text[i].style.color = "red";

}

document.getElementById("p1").style.color = "blue";


//student object


function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;

    this.display = function() {
        //document.writeln('Name: <span style: color:green>" + this.name + "<br>");
        document.writeln('Name: <span style="color:green">' + this.name + '</span><br>');
        document.writeln("Age: " + this.age + "<br>");
        document.writeln("Course: " + this.course + "<br>");
    }
}
var students = [];

students.push(new Student("Aafifa", 20, "OS"));
students.push(new Student("Rahim", 22, "DLD"));
students.push(new Student("Karim", 21, "DSA"));

for (var i = 0; i < students.length; i++) {
    students[i].display();
}
//docment same tag-differennt head


document.querySelector();
var text2=document.querySelector('.header3');
document.writeln(text2.innerText);

var text3=document.querySelectorAll('.header3')[1];
document.writeln(text3.innerText);

var text4=document.querySelectorAll('.header3')[1];
document.writeln(text4.innerText);

var text5=document.querySelectorAll('.header3')[1];
document.writeln(text5.innerText);

// document.querySelector("p a");
document.querySelector(".my-div a").innerHTML=newContact;