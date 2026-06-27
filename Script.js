// NUC LIFE & SERVICE


let adminPassword = "1234";


let customers = 
JSON.parse(localStorage.getItem("nucLifeData")) || [];




// LOGIN

function login(){


let pass =
document.getElementById("password").value;



if(pass === adminPassword){


document.getElementById("loginPage")
.classList.add("hide");


document.getElementById("app")
.classList.remove("hide");


loadData();


}

else{

document.getElementById("error")
.innerHTML="Wrong Password";

}


}




// LOGOUT

function logout(){

location.reload();

}





// PAGE

function showPage(page){


document.getElementById("dashboard")
.classList.add("hide");


document.getElementById("customers")
.classList.add("hide");



document.getElementById(page)
.classList.remove("hide");


}







// ADD CUSTOMER


function addCustomer(){



let name =
document.getElementById("name").value;


let mobile =
document.getElementById("mobile").value;


let status =
document.getElementById("status").value;


let amount =
document.getElementById("amount").value;




if(name===""){

alert("Name required");
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
"nucLifeData",
JSON.stringify(customers)
);



document.getElementById("name").value="";

document.getElementById("mobile").value="";

document.getElementById("amount").value="";



loadData();



}







// LOAD


function loadData(){


let list =
document.getElementById("list");


list.innerHTML="";



let total=0;
let pending=0;
let complete=0;
let income=0;



customers.forEach(c=>{


total++;


if(c.status=="Pending"){

pending++;

}else{

complete++;

}



income += c.amount;




list.innerHTML += `


<div class="customer">


<div>

<b>${c.name}</b>

<br>

${c.mobile}

<br>

${c.status}

<br>

₹${c.amount}

</div>


<button onclick="deleteCustomer(${c.id})">

Delete

</button>


</div>


`;



});




document.getElementById("total")
.innerHTML=total;


document.getElementById("pending")
.innerHTML=pending;


document.getElementById("complete")
.innerHTML=complete;


document.getElementById("income")
.innerHTML="₹"+income;


}








// SEARCH


function search(){


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







// DELETE


function deleteCustomer(id){


if(confirm("Delete Customer?")){


customers =
customers.filter(c=>c.id!==id);



localStorage.setItem(
"nucLifeData",
JSON.stringify(customers)
);



loadData();


}

}
