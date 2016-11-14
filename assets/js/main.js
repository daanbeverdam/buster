var showing_infocard = false;
var showing_navigation = false;

function toggle_infocard () {
    infocard = document.getElementById('infocard');
    if (infocard.style.top == '150%' || infocard.style.top === '') {
        showing_infocard = true;
        Velocity(infocard, {
            top: '50%'
        }, {
            duration: 500,
            begin: function () {
                infocard.style.display = 'block';
            }
        });
        show_sunscreen(true, 0.25);
    } else {
        showing_infocard = false;
        Velocity(infocard, {
            top: '150%'
        }, {
            duration: 500,
            complete: function () {
                infocard.style.display = 'none';
            }
        });
    }
}

function toggle_navigation () {
    body = document.body;
    navigation = document.getElementById('navigation');
    if (navigation.style.left === '-160px' || navigation.style.left === '') {
        showing_navigation = true;
        show_sunscreen(true, 0.25);
        Velocity(navigation, {'left': '0px'}, 250);
    } else {
        showing_navigation = false;
        Velocity(navigation, {'left': '-160px'}, 250);
    }
}

function show_sunscreen (bool, opacity) {
    sunscreen = document.getElementById('sunscreen');
    if (bool) {
        Velocity(sunscreen, {opacity: opacity}, {display: 'block'});
    } else {
        Velocity(sunscreen, {opacity: 0}, {display: 'none'});
    }
}

function clear_sunscreen () {
    if (showing_infocard && showing_navigation) {
        toggle_infocard();
        toggle_navigation();
    } else if (showing_infocard) {
        toggle_infocard();
    } else if (showing_navigation){
        toggle_navigation();
    }
    show_sunscreen(false);
}

function scroll_to_top () {
    Velocity(document.body, "scroll", {offset: "0", mobileHA: false});
}

function scroll_visibility () {
    var scroll_button = document.getElementById("scrollbutton");
    var y = window.scrollY;
    if (y >= 300) {
        scroll_button.className = "card scroll-button enlarge-me";
    } else {
        scroll_button.className = "card scroll-button shrink-me";
    }
}

window.onload = function add_scroll_listener (){
    if (document.getElementById("scrollbutton")) {
        window.addEventListener("scroll", scroll_visibility);
    }
};
