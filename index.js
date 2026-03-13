// LOGIN FUNCTION
function login(){

let username = document.getElementById("username").value
let password = document.getElementById("password").value

if(username === "admin" && password === "1234"){
window.location="dashboard.html"
}else{
alert("Invalid Login")
}

}



// --------------------
// STUDENT MANAGEMENT
// --------------------

function addStudent(){

let fname = document.getElementById("fname").value
let lname = document.getElementById("lname").value
let className = document.getElementById("class").value

let students = JSON.parse(localStorage.getItem("students")) || []

students.push({
fname:fname,
lname:lname,
className:className
})

localStorage.setItem("students",JSON.stringify(students))

displayStudents()

}



function displayStudents(){

let students = JSON.parse(localStorage.getItem("students")) || []

let table = document.getElementById("studentTable")

if(!table) return

table.innerHTML=""

students.forEach(s => {

table.innerHTML += `
<tr>
<td>${s.fname}</td>
<td>${s.lname}</td>
<td>${s.className}</td>
</tr>
`

})

}

displayStudents()



// --------------------
// TEACHER MANAGEMENT
// --------------------

function addTeacher(){

let name = document.getElementById("tname").value
let subject = document.getElementById("subject").value

let teachers = JSON.parse(localStorage.getItem("teachers")) || []

teachers.push({
name:name,
subject:subject
})

localStorage.setItem("teachers",JSON.stringify(teachers))

displayTeachers()

}



function displayTeachers(){

let teachers = JSON.parse(localStorage.getItem("teachers")) || []

let table = document.getElementById("teacherTable")

if(!table) return

table.innerHTML=""

teachers.forEach(t => {

table.innerHTML += `
<tr>
<td>${t.name}</td>
<td>${t.subject}</td>
</tr>
`

})

}

displayTeachers()