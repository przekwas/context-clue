//global arrays
var friendArray = ["Marth", "Sheik", "Captain Falcon", "Fox", "Falco"];
var locationArray = ["Final Destination", "Battlefield", "Yoshi's Story", "Fountain of Dreams", "Pokemon Stadium", "Smashville", "Green Hill Zone", "Dreamland", "Wario Land", "Delfino's Plaza"];
var itemArray = ["Beam Sword", "Fan", "Fire Thrower", "Hammer", "Home-run Bat", "Mr. Saturn", "Motion-sensor Bomb", "Poison Mushroom", "Poke Ball", "Ray Gun", "Star Rod", "Super Scope", "Banana Peel", "Deku Nut", "Golden Hammer", "Soccer Ball", "Red Shell", "Green Shell", "Boomerang", "Bombchu"];

//for loop to list 100 accusations
for (var i = 0; i < 100; i++) {

    //makes the h3 tags for each accusation
    var printedNumber = i + 1;
    var accusationLink = $("<h3>Accusation " + printedNumber + "</h3>");

    //make a new index using i for a different accusation in each array
    var friendArrayIndex = friendArray[i];
    var locationArrayIndex = locationArray[i];
    var itemArrayIndex = itemArray[i];

    //conditional to get 0-4 repeated for the friends array, 0-9 for location, 0-19 for items
    if (i >= 5) {
        friendArrayIndex = friendArray[i % 5];
    }

    if (i >= 10) {
        locationArrayIndex = locationArray[i % 10];
    }

    if (i >= 20) {
        itemArrayIndex = itemArray[i % 20];
    }

    //test accusation using the function
    var statement = alertMaker(friendArrayIndex, itemArrayIndex, locationArrayIndex);
    console.log(friendArrayIndex, itemArrayIndex, locationArrayIndex);
    //appends the new accusation to the body
    $(document.body).append(statement);

    //function to take 3 parameters and makes them into a clickable alert message to each accusation
    function alertMaker(friend, item, location) {
        return accusationLink.click(function () {
            alert("I accuse " + friend + ", with the " + item + " on the " + location + "!");
        })
    };
}