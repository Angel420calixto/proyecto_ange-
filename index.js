
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Opcional: cerrar el menú al hacer clic en un enlace
document.querySelectorAll('#nav-menu a').forEach(link =>
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    })
);

document.querySelectorAll('.btn-vermas').forEach(boton => {
    boton.addEventListener('click', () => {
        const galeria = boton.parentElement.nextElementSibling;
        galeria.querySelectorAll('.oculto').forEach(item => {
            item.classList.remove('oculto');
        });
        boton.style.display = 'none';
    });
});
