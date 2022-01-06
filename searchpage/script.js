var button = document.getElementById("card1");
function card1Button() {
    var section = document.getElementById("specifchomestay");
    var visibility = section.style.display
    if (visibility == "none") {
        section.style.display = "block";
    } 

} 
button.addEventListener("click" , card1Button);

var closebutton = document.getElementById("X");
function Xclosebutton() {
    var buttonClose = document.getElementById("specifchomestay");
    var closeAction = buttonClose.style.display
    if (closeAction == "block") {
        buttonClose.style.display = "none";
    } 
}
closebutton.addEventListener("click" , Xclosebutton);