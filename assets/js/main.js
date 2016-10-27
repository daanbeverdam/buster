var showing_sidebar = false;
var showing_navigation = false;

function toggle_sidebar () {
    infocard = document.getElementById('sidebar');
    if (infocard.style.top == '150%' || infocard.style.top === '') {
        showing_sidebar = true;
        Velocity(infocard, {
            top: '50%'
        }, {
            duration: 500
        }, {
            begin: infocard.style.display = 'block'
        });
        show_sunscreen(true, 0.25);
    } else {
        showing_sidebar = false;
        Velocity(infocard, {
            top: '150%'
        }, {
            duration: 500
        }, {
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
    if (showing_sidebar && showing_navigation) {
        toggle_sidebar();
        toggle_navigation();
    } else if (showing_sidebar) {
        toggle_sidebar();
    } else if (showing_navigation){
        toggle_navigation();
    }
    show_sunscreen(false);
}