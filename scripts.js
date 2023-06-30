checkBox = document.getElementById("check");
menuIcon = document.getElementById("menu_icono");
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