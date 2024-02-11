document.getElementById('profile-pic').addEventListener('load', function () {
    this.classList.add('loaded');
});
function scrollToSection1() {
    setTimeout(function () {
        // Get the navigation element
        var nav = document.getElementById('nav');

        // Calculate the position to scroll to (the bottom of the navigation element)
        var positionToScrollTo = nav.offsetTop + nav.offsetHeight;

        // Scroll to the calculated position
        window.scrollTo(0, positionToScrollTo);
    }, 0);
}