// Scroll function of links and buttons
$(document).ready(function () {
    $('#scroll-btn, .product-link, .product-button').on('click', function () {
        $('html, body, .intro-section').animate({
            scrollTop: $('#men-section').offset().top
        }, 500, 'linear');
    });
});

// Hiding of women section
$(document).ready(function () {
    $('#women-section').hide();
});

// Men Clothing Section Toggle
$(document).ready(function () {
    $('#men-toggle').attr('checked', true).show();
    $("#men-toggle").on('click', function () {
        $("#men-section").toggle(500);
    });
});

// Women Clothing Section toggle
$(document).ready(function () {
    $("#women-toggle").click(function () {
        $("#women-section").toggle(500);
    });
});