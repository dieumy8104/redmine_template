// Section Heading Search
$('.section-heading-search-menu-button').click(function (e) {
    e.stopPropagation();
    $('.section-heading-sidebar').toggle();
});

$('body, html').click(function (e) {
    let container = $(".section-heading-sidebar");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.css('display', 'none');
    }

    // Jump to a project select box
    let select = $(".section-heading-project-select");
    if (!select.is(e.target) && select.has(e.target).length === 0) {
        select.css('display', 'none');
        if ($(window).width() >= 768) {
            $('.section-heading-search-select-close').css('display', 'none');
            $('.section-heading-search-select-open').css('display', 'block');
            $('.section-heading-search-group-select-project').removeClass("search-navbar")
        } else if ($(window).width() < 768) {
            $('.section-heading-search-select-mobile-close').css('display', 'none');
            $('.section-heading-search-select-mobile-open').css('display', 'block');
        }
    }
});

window.addEventListener('resize', function () {
    if ($(window).width() >= 768) {
        $(".section-heading-sidebar").css('display', 'none');
    }

    // Jump to a project select box
    if ($(window).width() < 768) {
        $('.section-heading-project-select').css('display', 'none');
        $('.section-heading-search-select-mobile-open').css('display', 'block');
        $('.section-heading-search-select-mobile-close').css('display', 'none');
        $('.section-heading-search-group-select-project').removeClass("search-navbar");
     }else {
        $('.section-heading-project-select').css('display', 'none');
        $('.section-heading-search-select-open').css('display', 'block');
        $('.section-heading-search-select-close').css('display', 'none');
        $('.section-heading-search-group-select-project').removeClass("search-navbar");
     }
})

// Section Heading Search
$('.section-heading-search-group-select-project').click(function (e) {
    e.stopPropagation();
    if ($(window).width() >= 768) {
        $('.section-heading-project-select').toggle();
        $('.section-heading-search-select-open').toggle()
        $('.section-heading-search-group-select-project').toggleClass("search-navbar")
        $('.section-heading-search-select-close').toggle()
    }
    else {
        $('.section-heading-project-select').toggle();
        $('.section-heading-search-select-mobile-open').toggle();
        $('.section-heading-search-select-mobile-close').toggle();
        $('.section-heading-search-group-select-project').removeClass("search-navbar")
    }
});

// Section Content Checkbox
$("#checkbox-all").click(function(){
    $(".issue-checkbox").prop('checked', $(this).prop('checked'));
});