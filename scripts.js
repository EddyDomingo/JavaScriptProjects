document.getElementById("btn1").addEventListener("click", inputFunc)
document.getElementById("btn2").addEventListener("click", displayFunc)



var studentList = new Object()

function inputFunc(){

    var fname = document.getElementById("name").value 
    var email = document.getElementById("email").value
    var math = document.getElementById("math").value
    var eng = document.getElementById("eng").value
    var sstd = document.getElementById("sstd").value

    var x = Math.floor((Math.random() * 100) + 1);
    var y = x.toString();
    studentID = "student".concat(y)
    
    studentNumber = "student".concat(y)
    
    var studentID = new Object();
    studentID.name = fname
    studentID.email = email
    studentID.math = math
    studentID.eng = eng
    studentID.sstd = sstd
    
    studentList[studentNumber] = studentID
    console.log(studentList[studentNumber] = studentID)


}

function displayFunc(){


    // variable of javascript object, place each element in a variable with stringfy
    studentInformation = studentList[studentNumber]
    
    console.log(studentInformation)
    var obj = String(studentInformation.name)
    var obj1 = String(studentInformation.email)
    var obj2 = String(studentInformation.math)
    var obj3 = String(studentInformation.eng)
    var obj4 = String(studentInformation.sstd)


    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = obj;
    cell2.innerHTML = obj1;
    cell3.innerHTML = obj2;
    cell4.innerHTML = obj3;
    cell5.innerHTML = obj4;


}



// Create a table dynamically

    // var x = document.createElement("TABLE");
    // x.setAttribute("id", "myTable");
    // document.body.appendChild(x);
  
    // var table = document.getElementById("myTable");
    // var row = table.insertRow(0);
    // var cellx1 = row.insertCell(0)
    // var cellx2 = row.insertCell(1);
    // var cellx3 = row.insertCell(2);
    // var cellx4 = row.insertCell(3);
    // var cellx5 = row.insertCell(4);
  
    // cellx1.innerHTML = "Name";
    // cellx2.innerHTML = "Email";
    // cellx3.innerHTML = "Math Grade";
    // cellx4.innerHTML = "English Grade";
    // cellx5.innerHTML = "Social Studies Grade";