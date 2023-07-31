// Obtenemos el botón
var goTopBtn = document.getElementById("go-to-top-btn");

// Mostramos el botón cuando se desplaza hacia abajo la página
window.onscroll = function() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
} else {
    goTopBtn.style.display = "none";
}
};

// Al hacer clic en el botón, se desplaza hacia arriba de todo
goTopBtn.addEventListener("click", function() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});
