$(document).ready(function() {
    // Show/hide button based on scroll position
    $(window).scroll(function() {
        var scrollButton = $('#scrollButton');
        if($(this).scrollTop() > 0) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    //Scroll to top when button is clicked
    $('#scrollButton').click(function() {
        $('html, body').animate({scrollTop: 0}, 'fast');
    });
});
