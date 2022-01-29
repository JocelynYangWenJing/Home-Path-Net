var listOfHomestays = [
    {
        "id": "0",
        "ethnicity": "White",
        "safety": 5,
        "communication": 5,
        "amenity": 4,
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
        "id": "1",
        "ethnicity": "Asian",
        "safety": 5,
        "communication": 5,
        "amenity": 5,
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
        "id": "2",
        "ethnicity": "White",
        "safety": 5,
        "communication": 5,
        "amenity": 5,
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
        "id": "3",
        "ethnicity": "Asian",
        "safety": 5,
        "communication": 5,
        "amenity": 4,
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
        "id": "4",
        "ethnicity": "Filipino",
        "safety": 5,
        "communication": 4,
        "amenity": 4,
        "comfort": 5,
        "food": 4,
        "responsibility": 5,
        "culture": 4,
        "cleanness": 5,
        "studentName": "Flauros",
        "homestayName": "Tess",
        "zipCode": 94587,
        "comment": "My homestay hold a day care to take care of some children, so they are kind to people.",
    },
    {
        "id": "5",
        "ethnicity": "Asian",
        "safety": 5,
        "communication": 4,
        "amenity": 5,
        "comfort": 5,
        "food": 5,
        "responsibility": 5,
        "culture": 5,
        "cleanness": 5,
        "studentName": "Jocelyn",
        "homestayName": "Mrs.Cantalino",
        "zipCode": 94544,
        "comment": "This homestay is the most responsible that I've lived with before. The grandma and grandpa are really kind for the international students. I really like them.",
    },
    {
        "id": "6",
        "ethnicity": "Hispanic",
        "safety": 3,
        "communication": 2,
        "amenity": 4,
        "comfort": 2,
        "food": 2,
        "responsibility": 1,
        "culture": 4,
        "cleanness": 4,
        "studentName": "Jocelyn",
        "homestayName": "Mrs.Mora",
        "zipCode": 94544,
        "comment": "This homestay was realy irresponsible.",
    },
    {
        "id": "7",
        "ethnicity": "Asian",
        "safety": 5,
        "communication": 2,
        "amenity": 5,
        "comfort": 3,
        "food": 3,
        "responsibility": 5,
        "culture": 3,
        "cleanness": 5,
        "studentName": "Angel",
        "homestayName": "Mrs.Kerry",
        "zipCode": 94545,
        "comment": "I lived with this homestay for almost a year.My host family is very responsible, but do not often communicate with me.",
    },
    {
        "id": "8",
        "ethnicity": "Asian",
        "safety": 5,
        "communication": 5,
        "amenity": 5,
        "comfort": 5,
        "food": 5,
        "responsibility": 5,
        "culture": 5,
        "cleanness": 5,
        "studentName": "Johnny",
        "homestayName": "Ms.Basa",
        "zipCode": 94544,
        "comment": "My host family can be said to be very perfect, everything for me.It makes me feel like home",
    },
];

function showHomestays(ListData) {
    document.getElementById("section-c").innerHTML = "";
    for (var i = 0; i < ListData.length; i++) {
        var homestay = ListData[i]; 
        var homestayName = homestay.homestayName.toString();
        var comment = homestay.comment.toString().substring(0, 120) + "..."; 
        var id = homestay.id.toString();
        var html = `<div class="card col-sm-4" style="width: 18rem;">
        <div class="card-rapper">
          <div class="card-body">
          <h5 class="card-title">${homestayName}</h5>
          <p class="card-text">${comment}</p>
          <a id = "${id}" ref="#" class="btn btn-primary window-button">Click here to continue reading!</a>
        </div>
          </div>
      </div>`
      document.getElementById("section-c").innerHTML += html;
    }
}
showHomestays(listOfHomestays);

function getStars(numFilledStars) {
    var starString = "";
    for (var i = 0; i < 5; i++) {
        if (i < numFilledStars) {
            starString += "★";
        } else {
            starString += "☆";
        }
    } 
    return starString;
}


function card1Button(e) {
    var section = document.getElementById("specifchomestay");
    var visibility = section.style.display
    if (visibility == "none") {
        section.style.display = "block";
    } 
    var id = e.srcElement.id;
    var currentHomestay;
    for (var i = 0; i < listOfHomestays.length; i++) {
        if (listOfHomestays[i].id == id) {
            currentHomestay = listOfHomestays[i];
        }
    }
    document.getElementById("culture-rate").innerHTML = getStars(currentHomestay.culture);
    document.getElementById("cleanness-rate").innerHTML = getStars(currentHomestay.cleanness);
    document.getElementById("responsibility-rate").innerHTML = getStars(currentHomestay.responsibility);
    document.getElementById("food-rate").innerHTML = getStars(currentHomestay.food);
    document.getElementById("comfort-rate").innerHTML = getStars(currentHomestay.comfort);
    document.getElementById("amenity-rate").innerHTML = getStars(currentHomestay.amenity);
    document.getElementById("communication-rate").innerHTML = getStars(currentHomestay.communication);
    document.getElementById("safety-rate").innerHTML = getStars(currentHomestay.safety);

    document.getElementById("homestayName").innerHTML = currentHomestay.homestayName.toString();
    document.getElementById("zipCode").innerHTML = currentHomestay.zipCode.toString();
    document.getElementById("ethnicity").innerHTML = currentHomestay.ethnicity.toString();
    document.getElementById("comment").innerHTML = currentHomestay.comment.toString();
} 

function addButtonEventListener () {
    var button = document.getElementsByClassName("window-button");
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click" , function(e){card1Button(e)});
    }
}
addButtonEventListener();


var closebutton = document.getElementById("X");
function Xclosebutton() {
    var buttonClose = document.getElementById("specifchomestay");
    var closeAction = buttonClose.style.display
    if (closeAction == "block") {
        buttonClose.style.display = "none";
    } 
}
closebutton.addEventListener("click" , Xclosebutton);

function doSearch() {
    var searchWord = document.getElementById("search-query").value.toLowerCase();
    var newList = listOfHomestays.filter(
        homestay => homestay.zipCode == searchWord || 
        homestay.homestayName.toLowerCase().includes(searchWord));
        showHomestays(newList);
        addButtonEventListener();
}
document.getElementById("search-button").addEventListener("click", doSearch);
