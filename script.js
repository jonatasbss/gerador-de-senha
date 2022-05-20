let senha = document.getElementById("password");

function gerarSenha() {
    let caractere = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tamanhoSenha = 7;
    let senha = "";
    
    for (let i = 0; i <= tamanhoSenha; i++){
        let randomNumber = Math.floor(Math.random() * caractere.length);
        senha += caractere.substring(randomNumber, randomNumber +1);
    }

    document.getElementById("password").value = senha;
}


function copiarSenha(){
    let copiarSenha = document.getElementById("password");
    copiarSenha.select()
    document.execCommand("copy")
}




