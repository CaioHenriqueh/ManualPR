const emailLogin = document.getElementById("emailLogin");
const senha = document.getElementById("passwordLogin");
const btnLogin = document.getElementById("btnLogin");
const NameUser = document.querySelector("#nameUser");



btnLogin.addEventListener("click" , (e) => {
    e.preventDefault();
    if(localStorage.getItem("email") === emailLogin.value && localStorage.getItem("senha") === senha.value) {
       window.location.href = 'home.html'
    }else {
        document.getElementById("emailERROR").style.display = 'block';
        document.getElementById("senhaERROR").style.display = 'block';
    }
})
