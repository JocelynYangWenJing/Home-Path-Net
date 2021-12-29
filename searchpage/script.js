var button = document.getElementById("card1");
function card1Button() {
    var section = document.getElementById("specifchomestay");
    var visibility = section.style.display
    if (visibility == "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }

}
button.addEventListener("click" , card1Button);
