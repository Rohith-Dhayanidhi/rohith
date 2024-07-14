let id1=document.getElementById("nam")
let id2=document.getElementById("age")
let id3=document.getElementById("mail")
let id4=document.getElementById("npass")
let id5=document.getElementById("cpass")
let id6=document.getElementById("but")

function regist(){
    let namlen=id1.value
    let agelen=id2.value

    // name
    if(namlen===""){
        alert("Please enter your name")
        return false
    }
    
    if(namlen.length<5){
        alert("Name should contain 5 letters")
        return false
    }

    // age
    if(agelen===""){
        alert("Please enter your age")
        return false
    }else if(agelen<18 || agelen>23){
        alert("Age must be between 18 & 23")
        return false
    }

    // email
    let mailpat=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(id3.value===""){
        alert("Please enter the Email id")
        return false
    }else if (!mailpat.test(id3.value)){
        alert("Email is Invalid")
        return false
    }

    // password
    if(id4.value===""){
        alert("Please enter New Password")
        return false
    }
    if(id5.value===""){
        alert("Please Confirm your Password")
        return false
    }

    if(id4.value!=id5.value){
        alert("Confirm Password doesn't matches New Password")
        return false
    }

    // register
    if(id6.click){
        alert("Registered Successfully")
    }
}