var name_of_the_student= [];

function Submit() {

var name1 = document.getElementById("student1").value;
var name2 = document.getElementById("student2").value;
var name3 = document.getElementById("student3").value;
var name4 = document.getElementById("student4").value;

name_of_the_student.push(name1);
name_of_the_student.push(name2);
name_of_the_student.push(name3);
name_of_the_student.push(name4);

document.getElementById("display_names").innerHTML = name_of_the_student;
document.getElementById("submit_names").style.display="none";
document.getElementById("sort_names").style.display="inline-block";
}

function sort() {
    name_of_the_student.sort();
    document.getElementById("display_names").innerHTML = name_of_the_student;
}
