function toggle_sidebar () {
    menu = document.getElementById('sidebar');
    if (menu.style.top == '150%' || menu.style.top === '') {
        $('#sunscreen').fadeIn('slow');
        $('#sidebar').animate({'top': '50%'}, 500);
    } else {
        $('#sunscreen').fadeOut('slow');
        $('#sidebar').animate({'top': '150%'}, 500);
    }
}

function toggle_navigation () {
    if ($('#content').css('left') === '150px') {
        $('#content').animate({'left': '0px'}, 250);
        $('body').css('overflow', 'initial');
        $('body').css('position', 'relative');
    } else {
        $('#content').animate({'left': '150px'}, 250);
        $('body').css('overflow', 'hidden');
        $('body').css('position', 'fixed');
    }
}

function scroll_to_top() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}
