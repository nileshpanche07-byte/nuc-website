function toggleMenu(){
document.getElementById("nav").classList.toggle("show");
}

// SAVE CONTACT DATA (LOCAL DB)
function saveData(e){
e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

let data=JSON.parse(localStorage.getItem("enquiries")) || [];

data.push({name,email,message});

localStorage.setItem("enquiries",JSON.stringify(data));

alert("Message Sent Successfully!");
}

// ADMIN LOGIN
function openAdmin(){
document.getElementById("adminBox").style.display="block";
}

function login(){
let pass=document.getElementById("pass").value;

if(pass==="admin123"){
document.getElementById("dashboard").style.display="block";
loadData();
}else{
alert("Wrong Password");
}
}

function loadData(){
let data=JSON.parse(localStorage.getItem("enquiries")) || [];

document.getElementById("count").innerText=data.length;

let list=document.getElementById("list");
list.innerHTML="";

data.forEach((d,i)=>{
list.innerHTML+=`
<p><b>${i+1}. ${d.name}</b><br>${d.email}<br>${d.message}</p><hr>`;
});
}

function logout(){
document.getElementById("adminBox").style.display="none";
document.getElementById("dashboard").style.display="none";
}
