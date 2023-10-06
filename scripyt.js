function cadastro(){
window.location.href="cadastro.html";
}

const form = {
    user: () => document. getElementById("idInputEmail"),
    senha: () => documento. getElementById("idInputPassoword"),
}

const  login = document.getElementById("idLogin");

login.addEventListener("click", function(){

    firebase.auth().signInWithEmailAndPassword(form.user().value, form.senha().value).then(response => {
        window.location.href = "home.html";
    }).catch(error => {
        console.log('error')
        alert(getErrorMessage(error));
    });
});

function cadastro(){
    window.location.href="cadastro.html"
}

function cadastrar(){

btcadastro = document.getElementById("IdBtCadastro");
btcadastro. addEventListener("click" ,function(){});

const usuario= fora.user().value;
firebase.auth().createUserWihEmailAndPassword(
    usuario. password
).then(() => {
    Window.location.href = "main.html";
}).catch(error => {

    alert(getErrorMessage(error));
})
}

function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use"){
        return "Email ja esta em uso";
    }
    return error.message;
}