import ".login.css";
import usuario from "../../enty/usuario";

document.getElementById("cadastrar").addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    var nome = document.getElementById("nome") as HTMLInputElement;
    var dataNascimento = document.getElementById("data_nascimento") as HTMLInputElement;
    var email = document.getElementById("email") as HTMLInputElement;
    var password = document.getElementById("password") as HTMLInputElement;
    var passwordConfirmation = document.getElementById("password_confirmation") as HTMLInputElement;

    if (password !== passwordConfirmation) {
        return;
    }

    //var usuario = new usuario(nome.value, email.value, password.value, new Date(dataNascimento.value))
    console.log(usuario)





    //criar objeto
    //criar entidade
    //criar repositorio
    //verificar se o usuario com email ja existe
    //armazenar usuario no banco

})