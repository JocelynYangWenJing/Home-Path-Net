var listOfHomestays = [
    {
        "ethnicity": "White",
        "safety": 5,
        "communication with your homestay": 5,
        "amennity": 4,
        "comfort": 3,
        "food": 3,
        "responsibility": 3,
        "culture": 3,
        "cleanness": 5,
        "studentName": "Carrie",
        "homestayName": "Mrs.Colleen",
        "zipCode": 94568,
        "comment": "In terms of getting along with the family, it important to communicate with them actively and don't feel shy. In this way, any problems can be solved quickly and you can integrate into the life of the family more quickly.",
    },
    {
        "ethnicity": "Asian",
        "safety": 5,
        "communication with your homestay": 5,
        "amennity": 5,
        "comfort": 5,
        "food": 4,
        "responsibility": 5,
        "culture": 5,
        "cleanness": 5,
        "studentName": "Nicholas",
        "homestayName": "Mr.Liu",
        "zipCode": 94587,
        "comment": "Live with this homestay for 2 years，great communication with them，taking good care of me, taking responsibility for me, driving and picking me up on time everyday, nice living environment.",
    },
    {
        "ethnicity": "White",
        "safety": 5,
        "communication with your homestay": 5,
        "amennity": 5,
        "comfort": 5,
        "food": 5,
        "responsibility": 5,
        "culture": 5,
        "cleanness": 5,
        "studentName": "Steven",
        "homestayName": "Mrs.Milani",
        "zipCode": 94541,
        "comment": "They have two sons in college and they are Italian",
    },
    {
        "ethnicity": "Asian",
        "safety": 5,
        "communication with your homestay": 5,
        "amennity": 4,
        "comfort": 5,
        "food": 4,
        "responsibility": 5,
        "culture": 5,
        "cleanness": 5,
        "studentName": "Kevin",
        "homestayName": "Ms.Fanny",
        "zipCode": 94544,
        "comment": "I have lived in my home stay for about a year. My home stay is super responsible whenever I have problems. And it really helpful for me as an international student who study alone in a foreign country ",
    },
    {
        "ethnicity": "Asian",
        "safety": 5,
        "communication with your homestay": 5,
        "amennity": 3,
        "comfort": 4,
        "food": 5,
        "responsibility": 5,
        "culture": 4,
        "cleanness": 5,
        "studentName": "Steven",
        "homestayName": "Ms.Fanny",
        "zipCode": 94544,
        "comment": "My homestay is a Chinese women, so I never worried about the food and the communication. The rule is we need to clean the bedroom and bathroom every week. Most time we are not allowed to go out, but only during the weekend after we respond to her. Overall, my homestay is a very nice one, we have three boys here.",
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
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click" , card1Button);
}

var closebutton = document.getElementById("X");
function Xclosebutton() {
    var buttonClose = document.getElementById("specifchomestay");
    var closeAction = buttonClose.style.display
    if (closeAction == "block") {
        buttonClose.style.display = "none";
    } 
}
closebutton.addEventListener("click" , Xclosebutton);
