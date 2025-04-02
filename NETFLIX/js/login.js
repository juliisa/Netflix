document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Credenciales de prueba
    const credenciales = {
        nombre: 'Netflix',
        email: 'Netflix123@gmail.com',
        password: "123456"
    };
    
    if (nombre === credenciales.nombre && 
        email === credenciales.email && 
        password === credenciales.password) {
        
        Swal.fire({
            icon: 'success',
            title: '¡Bienvenido!',
            text: 'Bienvenido ' + nombre,
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = ('home.html');
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor revisa tus datos',
            confirmButtonColor: '#3085d6'
        });
    }
});
