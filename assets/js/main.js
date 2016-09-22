function toggle_sidebar () {
    menu = document.getElementById('sidebar');
    sunscreen = document.getElementById('sunscreen');
    if (menu.style.top == '150%' || menu.style.top === '') {
        $('#sunscreen').fadeIn('slow');
        $('#sidebar').animate({'top': '50%'}, 500);
    } else {
        $('#sunscreen').fadeOut('slow');
        $('#sidebar').animate({'top': '150%'}, 500);
    }
}

function toggle_navigation () {
    navigation = document.getElementById('navigation');
    if (navigation.style.display != 'block') {
        navigation.style.display = 'block';
        scroll_to_top();
    } else {
        navigation.style.display = 'none';
    }
}

function scroll_to_top() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}
