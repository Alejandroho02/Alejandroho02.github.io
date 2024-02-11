    // Hacer que el menú de Catálogo se dirija a la página correspondiente al hacer clic
    document.querySelector('.dropdown-toggle').addEventListener('click', function() {
        window.location.href = "Catalogo.html";
    });

    // Desplegar automáticamente el menú de Catálogo al pasar el cursor sobre él
    document.querySelector('.dropdown').addEventListener('mouseenter', function() {
        document.querySelector('.dropdown').classList.add('show');
        document.querySelector('.dropdown-menu').classList.add('show');
    });

    // Cerrar el menú de Catálogo al retirar el cursor de él
    document.querySelector('.dropdown').addEventListener('mouseleave', function() {
        document.querySelector('.dropdown').classList.remove('show');
        document.querySelector('.dropdown-menu').classList.remove('show');
    });

    //FORMULARIOS
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        // Validar campos vacíos antes de enviar el formulario
        var emailInput = document.getElementById('exampleInputEmail1');
        var passwordInput = document.getElementById('exampleInputPassword1');

        if (!emailInput.value || !passwordInput.value || !checkboxInput.checked) {
            alert('Por favor, completa todos los campos y marca la casilla de verificación.');
            event.preventDefault(); // No se envía el formulario si hay campos vacíos
        }
    });

    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"