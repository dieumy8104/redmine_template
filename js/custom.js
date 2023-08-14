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
    } else {
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
$("#checkbox-all").click(function () {
    $(".issue-checkbox").prop('checked', $(this).prop('checked'));
});

// Section Content Sidebar
$('.section-heading-search-menu-button').click(function (e) {
    e.stopPropagation();
    $('.section-content-sidebar').toggle();
});

$('body, html').click(function (e) {
    let sidebarContent = $(".section-content-sidebar");
    if (!sidebarContent.is(e.target) && sidebarContent.has(e.target).length === 0) {
        sidebarContent.css('display', 'none');
    }
})

window.addEventListener('resize', function () {
    if ($(window).width() >= 768) {
        $(".section-content-sidebar").css('display', 'none');
    }
})

// Section Content Filters
$('.section-content-project-filters-list-rotate').click(function (e) {
    if ($(window).width() >= 768) {
        if ($('.section-content-project-filters-select').css('display') === 'none') {
            $('.section-content-project-filters-list-rotate-icon ').addClass("filters-rotate-on")
            $('section-content-project-filters-list-rotate-icon').removeClass("filters-rotate-off")
            $('.section-content-project-filters').removeClass('filters-spacing-off')
            $('.section-content-project-filters').addClass('filters-spacing-on')
        } else {
            $('.section-content-project-filters-list-rotate-icon').addClass("filters-rotate-off")
            $('.section-content-project-filters-list-rotate-icon ').removeClass("filters-rotate-on")

            $('.section-content-project-filters').addClass('filters-spacing-off')
            $('.section-content-project-filters').removeClass('filters-spacing-on')
        }
        $('.section-content-project-filters-select').toggle()
    } else {
        if ($('.section-content-project-filters-select').css('display') === 'none') {
            $('.section-content-project-filters-list-rotate-icon ').addClass("filters-rotate-on")
            $('section-content-project-filters-list-rotate-icon').removeClass("filters-rotate-off");
            $('.section-content-project-filters-select').addClass("filters-display")
            $('.section-content-project-filters').addClass('filters-spacing-mobile-on')
            $('.section-content-project-filters').removeClass('filters-spacing-mobile-off')

        } else {
            $('.section-content-project-filters-list-rotate-icon').addClass("filters-rotate-off")
            $('.section-content-project-filters-list-rotate-icon').removeClass("filters-rotate-on")
            $('.section-content-project-filters-select').removeClass("filters-display")
            $('.section-content-project-filters').removeClass('filters-spacing-mobile-on')
            $('.section-content-project-filters').addClass('filters-spacing-mobile-off')
        }
    }
});

if ($('.filters-select-group').css('display') === "none") {
    $("#filtersStatus").prop("checked", false);
} else {
    $("#filtersStatus").prop("checked", true);
}

$('#filtersStatus').click(function (e) {
    e.stopPropagation();
    $('.filters-select-group').toggle()
});

// Section Content Options
$('.section-content-project-options-list-rotate').click(function (e) {
    e.stopPropagation();
    $('.section-content-project-options-toggle').toggle();

    //Options Rotate
    if ($('.section-content-project-options-toggle').css('display') === 'none') {
        $('.section-content-project-options-list-rotate i').addClass("options-rotate-off")
        $('.section-content-project-options-list-rotate i').removeClass("options-rotate-on")
    } else {
        $('.section-content-project-options-list-rotate i').addClass("options-rotate-on")
        $('section-content-project-options-list-rotate i').removeClass("options-rotate-off")
    }

    //Options Checked
    if ($('.section-content-project-options-select').css('display') === 'none') {
        $("#optionsList").prop("checked", false);
        $("#optionsBoard").prop("checked", true);
    } else {
        $("#optionsList").prop("checked", true);
    }
});

$('#optionsList').click(function (e) {
    e.stopPropagation();
    $('.section-content-project-options-select').css('display', 'flex')
    $('.section-content-project-options-select-list').css('display', 'flex')
});

$('#optionsBoard').click(function (e) {
    e.stopPropagation();
    $('.section-content-project-options-select').css('display', 'none')
    $('.section-content-project-options-select-list').css('display', 'none')
});

// Options Select
var select1 = document.getElementById('optionsSelect1');
var select2 = document.getElementById('optionsSelect2');
var moveRightButton = document.getElementById('optionsRightButton');
var moveLeftButton = document.getElementById('optionsLeftButton');

moveRightButton.addEventListener('click', () => {
    for (var i = 0; i < select1.options.length; i++) {
        if (select1.options[i].selected) {
            select1.options[i].selected = false;
            select2.appendChild(select1.options[i]);
            i--;
        }
    }
});

moveLeftButton.addEventListener('click', () => {
    for (var i = 0; i < select2.options.length; i++) {
        if (select2.options[i].selected) {
            select2.options[i].selected = false;
            select1.appendChild(select2.options[i]);
            i--;
        }
    }
});