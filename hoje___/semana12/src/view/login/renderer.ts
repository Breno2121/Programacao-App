import { hash } from "bcrypt";
import Usuario from "../../entity/Usuario";
import "./login.css"

document.getElementById("cadastrar").addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    var nome = document.getElementById("name") as HTMLInputElement;
    var dataNascimento = document.getElementById("data_nascimento") as HTMLInputElement;
    var email = document.getElementById("email") as HTMLInputElement;
    var password = document.getElementById("password") as HTMLInputElement;
    var passwordConfirmation = document.getElementById("password_confirmation") as HTMLInputElement;

    if(password.value !== passwordConfirmation.value){
        return;
    }
    
    const usuarioexiste = await (window as any).bancoAPI.findByEmail(email.value);
    if (!!usuarioexiste) {
      console.log("ja existe")
      return;
    }

    var usuario = {
      nome: nome.value, 
      email: email.value, 
      password: password.value, 
      dataNascimento: new Date(dataNascimento.value)
    };

    await (window as any).bancoAPI.createUsuario(usuario);

})

document.getElementById("acessar").addEventListener("click", async (event: MouseEvent) => {
  event.preventDefault();//Nao deixa a pagina recarregar

  var email = document.getElementById("email_login") as HTMLInputElement;
  var password = document.getElementById("password_login") as HTMLInputElement;

  const usuario = await (window as any).bancoAPI.findByEmail(email.value)
  if(!usuario) {
    console.log("usuario nao existe...")
    return;
  }

  const passwordConfirmation = {
    password: password.value,
    password_hash: usuario.password_hash as string
  }

  const validPassowrd = await (window as any).authAPI.hash(passwordConfirmation);

  if(!validPassowrd){
    console.log("Credencias invalidas...")
    return;
  }

  (window as any).navigateAPI.irPaginaHome();
})
