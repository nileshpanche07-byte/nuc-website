// NUC SERVICE DASHBOARD JS


let adminPassword = "1234";

let customers = JSON.parse(localStorage.getItem("nucCustomers")) || [];




// LOGIN

function login(){

let pass = document.getElementById("loginPass").value;


if(pass === adminPassword){


document.getElementById("loginPage")
.classList.add("hide");


document.getElementById("app")
.classList.remove("hide");


loadData();


}

else{

document.getElementById("loginError")
.innerHTML="Wrong Password";

}

}




// LOGOUT

function logout(){

location.reload();

}





// PAGE CHANGE

function openPage(page){


let pages=document.querySelectorAll(".page");


pages.forEach(p=>{

p.classList.add("hide");

});


document.getElementById(page)
.classList.remove("hide");


}







// ADD CUSTOMER


function addCustomer(){


let name =
document.getElementById("cname").value;


let mobile =
document.getElementById("cmobile").value;


let status =
document.getElementById("status").value;


let amount =
document.getElementById("amount").value;




if(name===""){

alert("Customer name required");

return;

}




let data={


id:Date.now(),

name:name,

mobile:mobile,

status:status,

amount:Number(amount)||0


};



customers.push(data);



localStorage.setItem(
"nucCustomers",
JSON.stringify(customers)
);



document.getElementById("cname").value="";

document.getElementById("cmobile").value="";

document.getElementById("amount").value="";



loadData();


}







// LOAD DATA


function loadData(){



let list =
document.getElementById("customerList");


let recent =
document.getElementById("recent");


list.innerHTML="";

recent.innerHTML="";



let total=0;

let pending=0;

let complete=0;

let income=0;




customers.forEach(c=>{


total++;


if(c.status==="Pending"){

pending++;

}

else{

complete++;

}



income += c.amount;




let div=document.createElement("div");


div.className="customer";


div.innerHTML=


`
<div>

<b>${c.name}</b><br>

${c.mobile}

<br>

Status: ${c.status}

<br>

₹${c.amount}

</div>


<button onclick="deleteCustomer(${c.id})">
Delete
</button>

`;



list.appendChild(div);



recent.innerHTML +=

`
<p>
${c.name} - ${c.status}
</p>
`



});




document.getElementById("totalCustomer")
.innerHTML=total;


document.getElementById("pending")
.innerHTML=pending;


document.getElementById("complete")
.innerHTML=complete;


document.getElementById("income")
.innerHTML="₹"+income;


document.getElementById("totalIncome")
.innerHTML="₹"+income;



}








// DELETE CUSTOMER


function deleteCustomer(id){


if(confirm("Delete customer?")){


customers =
customers.filter(c=>c.id!==id);



localStorage.setItem(
"nucCustomers",
JSON.stringify(customers)
);



loadData();


}

}







// SEARCH


function searchCustomer(){


let text =
document.getElementById("search")
.value.toLowerCase();



let items =
document.querySelectorAll(".customer");



items.forEach(i=>{


if(i.innerText.toLowerCase()
.includes(text)){


i.style.display="flex";


}

else{


i.style.display="none";


}


});


}







// CLEAR ALL


function clearData(){


if(confirm("Delete all data?")){


localStorage.removeItem("nucCustomers");


customers=[];


loadData();


function login(){
 let pass = document.getElementById("pass").value;

 if(pass === "12345"){
   document.getElementById("adminBox").style.display="none";
   document.getElementById("dashboard").style.display="block";
 }
 else{
   alert("Wrong Password");
 }


}
