let inputNombre=document.getElementById("nombre")
let inputContraseña=document.getElementById("contraseña")
let inputCorreo=document.getElementById("correo")
let boton=document.getElementById("boton")


boton.addEventListener("click", function(evento){
    evento.preventDefault()


    let nombre=inputNombre.value
    let contraseña=inputContraseña.value
    let correo=inputCorreo.value
    let nombreBaseDatos="Netflix"
    let contraseñaBaseDatos="123456"
    let correoBaseDatos="Netflix123@gmail.com"

if(nombre== nombreBaseDatos && contraseña==contraseñaBaseDatos && correo==correoBaseDatos){
    alert("Ok")
    Swal.fire({
        title: "Buen trabajo!",
        text: "Bienvenidos"+nombre ,
        icon: "success"
      });

    window.location.href=("./home.html")
     alert("Ok")

}else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: nombre+" Revisa tus datos por favor",
        
      });
}

});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Add your validation logic here if needed
    
    // Redirect to home page
    window.location.href = 'home.html';
});



