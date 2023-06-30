let btn = document.getElementsByClassName("linkNav");
btn.addEventListener("click", moverBtnArriba);
btn.addEventListener("mouseleave", moverBtnAbajo);

function moverBtnArriba() {
    btn.style.color = "red";
}
function moverBtnAbajo() {
    btn.style.top = "0";
}