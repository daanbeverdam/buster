/*jshint esversion: 6 */
var showing_sidebar = false;
var showing_navigation = false;

function toggle_sidebar () {
    infocard = document.getElementById('sidebar');
    if (infocard.style.top == '150%' || infocard.style.top === '') {
        showing_sidebar = true;
        Velocity(infocard, {'top': '50%'}, 600);
        show_sunscreen();
    } else {
        showing_sidebar = false;
        Velocity(infocard, {'top': '150%'}, 600);
    }
}

function toggle_navigation () {
    body = document.body;
    header = document.getElementById('header');
    content = document.getElementById('content');
    if (content.style.left === '150px') {
        showing_navigation = false;
        Velocity(content, {'left': '0px'}, 250);
        body.style.overflow = 'initial';
        body.style.position = 'relative';
    } else {
        showing_navigation = true;
        Velocity(content, {'left': '150px'}, 250);
        show_sunscreen(true, 0);
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
    }
}

function show_sunscreen (bool=true, opacity=0.25) {
    sunscreen = document.getElementById('sunscreen');
    if (bool) {
        Velocity(sunscreen, {opacity: opacity}, {display: 'block'});
        if (showing_navigation) {
            sunscreen.style.left = '150px';
        }
    } else {
        if (sunscreen.style.left === '150px') {
            sunscreen.style.left = '0px';
        }
        Velocity(sunscreen, {opacity: 0}, {display: 'none'});
    }
}

function clear_sunscreen () {
    if (showing_sidebar && showing_navigation) {
        toggle_sidebar();
        toggle_navigation();
    } else if (showing_sidebar) {
        toggle_sidebar();
    } else {
        toggle_navigation();
    }
    show_sunscreen(false);
}