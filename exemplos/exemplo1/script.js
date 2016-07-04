$(function() {
    $('#accordion h2').on("click", function() {
        var $p = $(this).next('p');
        
        $('#accordion p').not($p).slideUp(500);
        $p.slideToggle(500);
    });
});
