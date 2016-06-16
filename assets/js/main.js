function toggle_sidebar () {
    menu = document.getElementById('sidebar');
    sunscreen = document.getElementById('sunscreen');
    if (menu.style.display == 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        menu.style.padding = 0;
        menu.style.position = 'fixed';
        sunscreen.style.display = 'block';
    } else {
        menu.style.display = null;
        menu.style.position = null;
        menu.style.padding = null;
        menu.style.paddingRight = null;
        sunscreen.style.display = null;
    }
}

function toggle_navigation () {
    navigation = document.getElementById('navigation');
    if (navigation.style.display != 'block') {
        navigation.style.display = 'block';
    } else {
        navigation.style.display = 'none';
    }
}

function scroll_to_top() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function check_navigation () {
    items = document.getElementsByClassName('buster_navigation_item');
    for (var i = 0; i < items.length; i++) {
        if (items[i].id == 'about') {
            items[i].children[0].className += " fa-user";
        } else {
            items[i].children[0].className += " fa-circle-o";
        }
    }
}

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 220) {
        $('.buster_scroll_message').fadeIn();
    } else {
        $('.buster_scroll_message').fadeOut();
    }

});
