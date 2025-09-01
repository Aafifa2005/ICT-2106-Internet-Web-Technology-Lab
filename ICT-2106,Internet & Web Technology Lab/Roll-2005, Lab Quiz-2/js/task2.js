function Student(id,name, section, year) {
    this.id=id;
    this.name = name;
    this.section = section;
    this.year = year;

    this.display = function() {
        //document.writeln('Name: <span style: color:green>" + this.name + "<br>");
        document.writeln('id:'+this.id+"<br>");
        document.writeln('Name: <span style="color:green">' + this.name + '</span><br>');
        document.writeln("Section: " + this.section + "<br>");
        document.writeln("Course: " + this.year + "<br>");
    }
}
var students = [];

students.push(new Student(1,"Aafifa", "a", 1));
students.push(new Student(2,"Rahim", "b", 4));
students.push(new Student(3,"Karim", "c", 3));

for (var i = 0; i < students.length; i++) {
    students[i].display();
    document.writeln("</br>")
}

function addnew(){
students.push(new Student(1,"Maliha", "a", 1)); 
for (var i = 0; i < students.length; i++) {
    students[i].display();
    document.writeln("</br>")
}
}
function Delete(){
students.shift(new Student(1,"Aafifa", "a", 1)); 
for (var i = 0; i < students.length; i++) {
    students[i].display();
    document.writeln("</br>")
}
}



