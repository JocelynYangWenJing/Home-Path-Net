var listOfHomestays = [
    {
        "Ethnicity": "Asian",
        "Safety": 4,
        "Communication with your homestay": 4,
        "Amennity (Wi-Fi speed)": 2,
        "Comfort": 3,
        "Food": 1,
        "Responsibility": 2,
        "Culture": 3,
        "Cleanness": 3,
        "Student's name": "Andy",
        "Homestay's Name": "Mrs.XXX",
        "Zip code/City": 94544,
        "Comment": "I've lived with this homestay for 1 year.",
    },
    {
        "Ethnicity": "Asian",
        "Safety": 4,
        "Communication with your homestay": 4,
        "Amennity (Wi-Fi speed)": 2,
        "Comfort": 3,
        "Food": 1,
        "Responsibility": 2,
        "Culture": 3,
        "Cleanness": 3,
        "Student's name": "Andy",
        "Homestay's Name": "Mrs.XXX",
        "Zip code/City": 94544,
        "Comment": "I've lived with this homestay for 1 year.",
    },
    {
        "Ethnicity": "Asian",
        "Safety": 4,
        "Communication with your homestay": 4,
        "Amennity (Wi-Fi speed)": 2,
        "Comfort": 3,
        "Food": 1,
        "Responsibility": 2,
        "Culture": 3,
        "Cleanness": 3,
        "Student's name": "Andy",
        "Homestay's Name": "Mrs.XXX",
        "Zip code/City": 94544,
        "Comment": "I've lived with this homestay for 1 year.",
    },
    {
        "Ethnicity": "Asian",
        "Safety": 4,
        "Communication with your homestay": 4,
        "Amennity": 2,
        "Comfort": 3,
        "Food": 1,
        "Responsibility": 2,
        "Culture": 3,
        "Cleanness": 3,
        "studentName": "Andy",
        "homestayName": "Mrs.XXX",
        "ZipCode": 94544,
        "Comment": "I've lived with this homestay for 1 year.",
    },
];

for (var i = 0; i < listOfHomestays.length; i++) {
    var homestay = listOfHomestays[i];
    var homestayName = homestay.homestayName.toString();
    var comment = homestay.comment.toString();
    var html = `<div class="card col-sm-4" style="width: 18rem;">
    <div class="card-rapper">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${homestayName}</h5>
      <p class="card-text">${comment}</p>
      <a id = "card1" ref="#" class="btn btn-primary">Click here to continue reading!</a>
    </div>
      </div>
  </div>`
  document.getElementById("section-c").innerHTML += html;
}

var button = document.getElementsByClassName("window-button");
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
