$(document).ready(function() {
    $('#recuperar').click(function(event){
        var correo;
        correo = $('#correo').val();
        expCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        
        if(correo.length == 0){
            swal("Error...", "No debe haber campos vacíos", "error");
        }
        else if(correo.length > 35){
            swal("Error...", "Correo electrónico muy largo", "error");
        }
        else if(!expCorreo.test(correo)){
            swal("Error...", "Correo electrónico inválido", "error");
        }
        else {
            // Generar un código aleatorio de 4 dígitos
            var codigo = Math.floor(1000 + Math.random() * 9000);
            
            // Pedir al usuario que ingrese el código de verificación junto con el código generado
            var codigoIngresado = prompt("Se ha enviado un código de verificación a tu correo electrónico. Por favor, ingresa el código aquí: \n\nCódigo de verificación: " + codigo);

            // Verificar si el código ingresado coincide con el código generado
            if (codigoIngresado === null) {
                // El usuario canceló el ingreso del código
                swal("Operación cancelada", "No ingresaste el código de verificación.", "error");
            } else if (codigoIngresado === codigo.toString()) {
                // El código ingresado coincide con el código generado
                swal("Éxito", "El código es correcto. Puedes continuar con el proceso de recuperación de contraseña.");
            } else {
                // El código ingresado no coincide con el código generado
                swal("Error", "El código ingresado no es válido.", "error");
            }
        }
    });
});

$(document).ready(function() {
    $('#comentario').click(function(event){
        var nombre = $('#nombre').val().trim();
        var apellido = $('#apellido').val().trim();
        var correo = $('#correo').val().trim();
        var mensaje = $('#mensaje').val().trim();
        var expCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        var expNombre = /^[a-zA-Z]+$/; // Expresión regular para permitir solo letras en el nombre

        if (nombre.length === 0 || apellido.length === 0 || correo.length === 0 || mensaje.length === 0) {
            swal("Error...", "No debe haber campos vacíos", "error");
        } else if (!expNombre.test(nombre,apellido)) {
            swal("Error...", "El nombre y el apellido solo pueden contener letras", "error");
        } else if (nombre.length > 30 || apellido.length > 30) {
            swal("Error...", "Nombre o apellido demasiado largo", "error");
        } else if (correo.length > 50) {
            swal("Error...", "Correo electrónico demasiado largo", "error");
        } else if (!expCorreo.test(correo)) {
            swal("Error...", "Correo electrónico inválido", "error");
        } else {
            swal("Comentario enviado con éxito");
        }
    });
});
