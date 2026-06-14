import { db, collection, addDoc, getDocs } from "./firebase.js";

// MENU
function toggleMenu(){
document.getElementById("nav").classList.toggle("show");
}

// 📩 SAVE TO FIREBASE (REAL DATABASE)
window.saveData = async function(e){
e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

try{
await addDoc(collection(db,"enquiries"),{
name:name,
email:email,
message:message,
time:new Date()
});

alert("Message Sent to NUC Successfully!");
}catch(err){
alert("Error: "+err.message);
}
}

// 🔐 ADMIN LOGIN (simple demo)
window.openAdmin=function(){
document.getElementById("adminBox").style.display="block";
}

window.login=function(){
let pass=document.getElementById("pass").value;

if(pass==="admin123"){
document.getElementById("dashboard").style.display="block";
loadData();
}else{
alert("Wrong Password");
}
}

// 📊 LOAD REAL DATA FROM FIREBASE
async function loadData(){

let querySnapshot = await getDocs(collection(db, "enquiries"));

let list=document.getElementById("list");
list.innerHTML="";

let count=0;

querySnapshot.forEach((doc)=>{
count++;
let d=doc.data();

list.innerHTML+=`
<div style="text-align:left;margin:10px 0;padding:10px;border:1px solid #ddd;">
<b>${d.name}</b><br>
${d.email}<br>
${d.message}
</div>`;
});

document.getElementById("count").innerText=count;
}

window.logout=function(){
document.getElementById("adminBox").style.display="none";
document.getElementById("dashboard").style.display="none";
}
