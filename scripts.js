checkBox = document.getElementById("check");
menuIcon = document.getElementById("menu_icono");
btnProyecto = document.getElementById("bnProyecto");
btnBlog = document.getElementById("bnBlog");
let imagenAlternar = false;

menuIcon.addEventListener("click", function () {
    checkBox.checked = !checkBox.checked;
});

menuIcon.addEventListener("click", function () {
    if (imagenAlternar) {
        menuIcon.src = "resources/menu_icon.ico";
    }
    else {
        menuIcon.src = "resources/exit_icon.ico";
    }

    imagenAlternar = !imagenAlternar;

});

btnProyecto.addEventListener('click', function () {
    alert('No disponible por el momento.')
});
btnBlog.addEventListener('click', function () {
    alert('No disponible por el momento.')
});