const emailLogin = document.getElementById("emailLogin");
const senha = document.getElementById("passwordLogin");
const btnLogin = document.getElementById("btnLogin");
const NameUser = document.querySelector("#nameUser");

if(localStorage.getItem("email") && localStorage.getItem("senha")) {
    emailLogin.value = localStorage.getItem("email");
    senha.value = localStorage.getItem("senha");
}else {
    emailLogin.value = '';
    senha.value = '';
}



btnLogin.addEventListener("click" , (e) => {
    e.preventDefault();
    if(localStorage.getItem("email") === emailLogin.value && localStorage.getItem("senha") === senha.value) {
       window.location.href = 'home.html'
    }else {
        document.getElementById("emailERROR").style.display = 'block';
        document.getElementById("senhaERROR").style.display = 'block';
    }
})
