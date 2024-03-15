$(document).ready(function() {
    $('#registrar-btn').click(function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        
        var nombre, correo, contrasena, confirmarContrasena;
        nombre = $('#nombre').val();
        correo = $('#correo').val();
        contrasena = $('#contrasena').val();
        confirmarContrasena = $('#confirmarContrasena').val();

        var EXPCorreo = /^\S+@\S+\.\S+$/; 
        var EXPContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])(?!.*\s).{8,}$/; 

        if (nombre.length === 0 || correo.length === 0 || contrasena.length === 0 || confirmarContrasena.length === 0) {
            swal("Error...", "No debe haber campos vacíos", "error");
        } else if (!EXPCorreo.test(correo)) {
            swal("Error...", "El correo no es válido", "error");
        } else if (contrasena !== confirmarContrasena) {
            swal("Error...", "Las contraseñas no coinciden", "error");
        } else if (!EXPContrasena.test(contrasena)) {
            swal("Error...", "La contraseña no cumple con los requisitos", "error");
        } else {
            // Aquí puedes agregar código para enviar el formulario
            // Por ejemplo, enviar los datos a un servidor con AJAX
            // O redirigir a otra página después de la validación
            // Por ahora, solo imprimir los datos en la consola
            console.log("Nombre:", nombre);
            console.log("Correo electrónico:", correo);
            console.log("Contraseña:", contrasena);
            console.log("Confirmar contraseña:", confirmarContrasena);
        }
    });
});
