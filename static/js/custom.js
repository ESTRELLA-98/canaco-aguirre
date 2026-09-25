// Oculta el loader cuando la página terminó de cargar
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Cierra automáticamente las alertas después de 6 segundos
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.alert-dismissible').forEach(function (alerta) {
        setTimeout(function () {
            if (window.bootstrap) {
                bootstrap.Alert.getOrCreateInstance(alerta).close();
            }
        }, 6000);
    });
});
