function toggle_sidebar(sidebarId) {
    var e = document.getElementById(sidebarId);
    if(e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
        e.style.position = 'fixed';
        e.style.zIndex = 2;
}