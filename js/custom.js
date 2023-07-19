$('.section-heading-search-menu-button').click(function (e) {
    e.stopPropagation();
    $('.section-heading-sidebar').toggle();
});

$('body, html').click(function (e) {
    let container = $(".section-heading-sidebar");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.css('display', 'none');
    }
});

window.addEventListener('resize', function(){
    if($(window).width() >= 768){
        $(".section-heading-sidebar").css('display', 'none');
    }
})