let imagenProyecto = document.getElementsByClassName('imagen-proyecto');
let contenedorModal = document.getElementById('contenedor-modal');

let indiceActual;

function desplegarModal() {
    let rutaImagen = this.getAttribute('src');

    let modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    modal.setAttribute('id', 'modal')

    let imagenModal = document.createElement('img');
    imagenModal.setAttribute('src', rutaImagen);
    imagenModal.setAttribute('alt', 'proyecto');
    modal.appendChild(imagenModal)

    let btnModalCerrar = document.createElement('div')
    btnModalCerrar.setAttribute('class', 'btn-cerrar')
    btnModalCerrar.setAttribute('id', 'btnCerrar')
    btnModalCerrar.setAttribute('onClick', 'cerrarModal()');

    let xCerrar = document.createElement('i')
    xCerrar.setAttribute('class', 'fa fa-times');
    btnModalCerrar.appendChild(xCerrar);

    modal.appendChild(btnModalCerrar);

    contenedorModal.appendChild(modal);

    for (let i = 0; i < imagenProyecto.length; i++) {
        if (imagenProyecto[i] === this) {
            indiceActual = i;
            break;
        }
    }
    modal.appendChild(flechaIzquierda);
    modal.appendChild(flechaDerecha);

}

for (let i = 0; i < imagenProyecto.length; i++) {
    imagenProyecto[i].addEventListener('click', desplegarModal);
}

function cerrarModal() {
    let modal = document.getElementById('modal');
    if (modal) {
        modal.remove();
    }
}

window.addEventListener("keydown", (event) => {
    if (event.key === 'Escape') {
        cerrarModal();
    }
});

let flechaIzquierda = document.createElement('i');
flechaIzquierda.setAttribute('class', 'fas fa-arrow-left flecha-izquierda');
flechaIzquierda.addEventListener('click', mostrarImagenAnterior);

let flechaDerecha = document.createElement('i');
flechaDerecha.setAttribute('class', 'fas fa-arrow-right flecha-derecha');
flechaDerecha.addEventListener('click', mostrarImagenSiguiente);


function mostrarImagenSiguiente() {
    indiceActual = (indiceActual + 1) % imagenProyecto.length;
    actualizarModalImagen(imagenProyecto[indiceActual].getAttribute('src'));
}

function mostrarImagenAnterior() {
    indiceActual = (indiceActual - 1 + imagenProyecto.length) % imagenProyecto.length;
    actualizarModalImagen(imagenProyecto[indiceActual].getAttribute('src'));
}

function actualizarModalImagen(src) {
    let modalImg = document.querySelector('.modal img');
    if (modalImg) {
        modalImg.setAttribute('src', src);
    }
}