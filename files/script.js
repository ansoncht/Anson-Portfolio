// Hide/Show Navbar
let prevScrolls = window.pageYOffset;
window.onscroll = function() {
    document.getElementById("nav").style.display = "block";
    const currentScrollPos = window.pageYOffset;
    if (prevScrolls > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-5.25em";
    }
    prevScrolls = currentScrollPos;
}


