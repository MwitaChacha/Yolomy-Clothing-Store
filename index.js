$(document).ready(function () {
    $('#scroll-btn').on('click', function () {
        $('html, body, .intro-section').animate({
            scrollTop: $('#men-section').offset().top
        }, 500, 'linear');
    });
});

$(document).ready(function () {
    $('#women-section').hide();
});


$(document).ready(function () {
    $('#men-toggle').attr('checked', true).show();
    $("#men-toggle").on('click', function () {
        $("#men-section").toggle(500);
    });
});



$(document).ready(function () {
    $("#women-toggle").click(function () {
        $("#women-section").toggle(500);

        

    });
});