const name  = document.getElementById("name");
const emailCreate = document.getElementById("emailC");
const passCreate = document.getElementById("passwordC");
const btnCreate = document.getElementById("btnCreate");

btnCreate.addEventListener("click" ,(e) =>{
    e.preventDefault();
    localStorage.setItem("name" , name.value);
    localStorage.setItem("email" , emailCreate.value);
    localStorage.setItem("senha" , passCreate.value);
    if(localStorage.getItem("name") && localStorage.getItem("email") && localStorage.getItem("senha")) {
        window.location.href = 'index.html'
    }
})

