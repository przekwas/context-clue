//global arrays
var friendArray = ["Marth", "Sheik", "Captain Falcon", "Fox", "Falco"];
var locationArray = ["Final Destination", "Battlefield", "Yoshi's Story", "Fountain of Dreams", "Pokemon Stadium", "Smashville", "Green Hill Zone", "Dreamland", "Wario Land", "Delfino's Plaza"];
var itemArray = ["Beam Sword", "Fan", "Fire Thrower", "Hammer", "Home-run Bat", "Mr. Saturn", "Motion-sensor Bomb", "Poison Mushroom", "Poke Ball", "Ray Gun", "Star Rod", "Super Scope", "Banana Peel", "Deku Nut", "Golden Hammer", "Soccer Ball", "Red Shell", "Green Shell", "Boomerang", "Bombchu"];

//for loop to list 100 accusations
for (var i = 1; i < 101; i++) {

    //makes the h3 tags for each accusation
    var accusationLink = $("<h3>Accusation " + i + "</h3>");


    //test accusation using the function
    var statement = alertMaker(1, 2, 3);
    //appends the new accusation to the body
    $(document.body).append(statement);

    //function to take 3 parameters and makesd them into a clickable alert message to each accusation
    function alertMaker(friend, weapon, location) {
        return accusationLink.click(function () {
            alert("I accuse " + friend + ", with the " + weapon + " in the " + location + "!");
        })
    };



}