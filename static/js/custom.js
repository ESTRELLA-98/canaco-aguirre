// Oculta el loader cuando la página terminó de cargar
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Marca la miniatura de la imagen visible en el carrusel de la galería
document.addEventListener('DOMContentLoaded', function () {
    var galeria = document.getElementById('galeriaCarousel');
    if (!galeria) return;
    var miniaturas = document.querySelectorAll('.gallery-thumbs button');
    function marcar(indice) {
        miniaturas.forEach(function (boton, i) {
            boton.classList.toggle('active', i === indice);
        });
    }
    marcar(0);
    galeria.addEventListener('slide.bs.carousel', function (evento) {
        marcar(evento.to);
    });
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
