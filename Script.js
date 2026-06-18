// MOBILE MENU
function toggleMenu(){
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}


// ADMIN OPEN
function openAdmin(){
  document.getElementById("adminBox").style.display="block";
}


// ADMIN LOGIN
function login(){

  let pass = document.getElementById("pass").value;

  if(pass=="1234"){
    document.getElementById("dashboard").style.display="block";
    alert("Login Successful");
  }
  else{
    alert("Wrong Password");
  }

}


// LOGOUT
function logout(){
  document.getElementById("dashboard").style.display="none";
  document.getElementById("adminBox").style.display="none";
}


// CONTACT FORM
function saveData(event){

 event.preventDefault();

 let name = document.getElementById("name").value;
 let email = document.getElementById("email").value;
 let message = document.getElementById("message").value;

 let oldData = JSON.parse(localStorage.getItem("nucData")) || [];

 oldData.push({
   name:name,
   email:email,
   message:message
 });

 localStorage.setItem("nucData",JSON.stringify(oldData));

 alert("Message Sent Successfully");

 event.target.reset();
}


// SHOW DATA
window.onload=function(){

 let data = JSON.parse(localStorage.getItem("nucData")) || [];

 document.getElementById("count").innerHTML=data.length;

 let list=document.getElementById("list");

 data.forEach(item=>{

 list.innerHTML += `
 <p>
 <b>${item.name}</b><br>
 ${item.email}<br>
 ${item.message}
 </p>
 <hr>
 `;

 });

}
