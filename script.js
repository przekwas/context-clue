var friendArray = ["Marth", "Sheik", "Captain Falcon", "Fox", "Falco"];
var locationArray = ["Final Destination", "Battlefield", "Yoshi's Story", "Fountain of Dreams", "Pokemon Stadium", "Smashville", "Green Hill Zone", "Dreamland", "Wario Land", "Delfino's Plaza"];
var itemArray = ["Beam Sword", "Fan", "Fire Thrower", "Hammer", "Home-run Bat", "Mr. Saturn", "Motion-sensor Bomb", "Poison Mushroom", "Poke Ball", "Ray Gun", "Star Rod", "Super Scope", "Banana Peel", "Deku Nut", "Golden Hammer", "Soccer Ball", "Red Shell", "Green Shell", "Boomerang", "Bombchu"];

for (var i = 1; i < 101; i++) {
    var accusationLink = $("<h3>Accusation " + i + "</h3>");
    accusationLink.click( function () {
        alert("I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!");
    });
    $(document.body).append(accusationLink);
}



