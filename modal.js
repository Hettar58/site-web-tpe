var modal = document.getElementById("monModal");

var bouton = document.getElementById("monBouton");

var span = document.getElementsByClassName("close")[0];

bouton.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}