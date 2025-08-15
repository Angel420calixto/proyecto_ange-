document.addEventListener("DOMContentLoaded", () => {
    const galeriaItems = document.querySelectorAll(".galeria-item");
    const verMasBtn = document.getElementById("verMasBtn");
    const modal = document.createElement("div");

    let currentIndex = 0;

    modal.classList.add("modal");
    modal.innerHTML = `
        <span class="modal-close">&times;</span>
        <span class="modal-prev">&#10094;</span>
        <img>
        <span class="modal-next">&#10095;</span>
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector("img");
    const closeBtn = modal.querySelector(".modal-close");
    const prevBtn = modal.querySelector(".modal-prev");
    const nextBtn = modal.querySelector(".modal-next");

    // Abrir modal
    galeriaItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = item.querySelector("img").src;
            currentIndex = index;
        });
    });

    // Cerrar modal
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    modal.addEventListener("click", e => {
        if (e.target === modal) modal.style.display = "none";
    });

    // Navegación
    const showImage = index => {
        if (index < 0) index = galeriaItems.length - 1;
        if (index >= galeriaItems.length) index = 0;
        currentIndex = index;
        modalImg.src = galeriaItems[currentIndex].querySelector("img").src;
    };
    prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
    nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

    // Swipe en móviles
    let startX = 0;
    modal.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    modal.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) showImage(currentIndex + 1); // swipe izquierda
        if (endX - startX > 50) showImage(currentIndex - 1); // swipe derecha
    });

    // Botón ver más
    verMasBtn.addEventListener("click", () => {
        document.querySelectorAll(".galeria-item[style*='display: none']").forEach(item => {
            item.style.display = "block";
        });
        verMasBtn.style.display = "none";
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.nav__toggle');
    const navLinks = document.querySelector('.nav__links');

    // Abrir/cerrar menú con animación
    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Cerrar menú si se clickea fuera de él
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
});
//manejo de cargar mas imagenes en las secciones//

document.querySelectorAll(".btn-vermas").forEach(boton => {
    boton.addEventListener("click", function () {
        const galeria = this.nextElementSibling; // La galería que está después del botón
        const ocultas = galeria.querySelectorAll(".oculto");

        ocultas.forEach(item => {
            item.style.display = "block"; // Muestra las ocultas
        });

        this.style.display = "none"; // Oculta el botón
    });
});

document.querySelectorAll('.btn-vermas').forEach(boton => {
    boton.addEventListener('click', () => {
        const galeria = boton.closest('.galeria-header').nextElementSibling;
        const ocultas = galeria.querySelectorAll('.oculto');

        if (boton.dataset.abierto === "true") {
            // Ocultar de nuevo
            ocultas.forEach(item => item.style.display = 'none');
            boton.textContent = 'Ver más';
            boton.dataset.abierto = "false";
        } else {
            // Mostrar todo
            ocultas.forEach(item => item.style.display = 'flex');
            boton.textContent = 'Ver menos';
            boton.dataset.abierto = "true";
        }
    });
});
