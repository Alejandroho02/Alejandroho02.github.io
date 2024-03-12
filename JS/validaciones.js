$('#registrar').click(function(event) {
    var nombre, correo, contrasena, confirmarContrasena, exp, exp2, expPsw;
    nombre = $('#nombre').val();
    correo = $('#correo').val();
    contrasena = $('#contrasena').val();
    confirmarContrasena = $('#confirmarContrasena').val();
    exp = $('#exp').val();
    exp2 = $('#exp2').val();
    expPsw = $('#expPsw').val();

    if (nombre.length == 0 || correo.length == 0 || contrasena.length == 0 || confirmarContrasena.length == 0) {
        swal("Error...", "No debe de haber campos vacios", "error");
    } else if (nombre.length > 10) {
        swal("Error...", "El nombre es muy largo", "error");
    } else if (correo.length > 35) {
        swal("Error...", "El correo es muy largo", "error");
    } else if (psw.length < 8) {
        swal("Error...", "La contraseña es muy corta", "error");
    } else if (!exp2.test(correo)) {
        swal("Error...", "El correo no es valido", "error");
    } else if (!expPsw.test(psw)) {
        swal("Error...", "La contraseña no cumple con los requisitos", "error");
    } else {
        swal("¡Éxito!", "Todos los campos son correctos", "success");
    }
});