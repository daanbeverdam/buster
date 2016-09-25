function toggle_sidebar () {
    infocard = document.getElementById('sidebar');
    sunscreen = document.getElementById('sunscreen');
    if (infocard.style.top == '150%' || infocard.style.top === '') {
        Velocity(sunscreen, {opacity: 0.25}, {display: 'block'});
        Velocity(infocard, {'top': '50%'}, 600);
    } else {
        Velocity(sunscreen, {opacity: 0}, {display: 'none'});
        Velocity(infocard, {'top': '150%'}, 600);
    }
}

function toggle_navigation () {
    body = document.body;
    header = document.getElementById('header');
    content = document.getElementById('content');
    if (content.style.left === '150px') {
        Velocity(content, {'left': '0px'}, 250);
        //Velocity(header, {'left': '0px'}, 250); // Firefox and Safari made me do this
        body.style.overflow = 'initial';
        body.style.position = 'relative';
    } else {
        Velocity(content, {'left': '150px'}, 250);
        //Velocity(header, {'left': '150px'}, 250); // Firefox and Safari made me do this
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
    }
}
