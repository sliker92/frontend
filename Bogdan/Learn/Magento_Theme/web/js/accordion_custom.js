require([
    'jquery',
    'accordion',
    'matchMedia'], function ($) {
    $("#accordion").accordion(
        {active: false},
        {collapsible: true},
        {multipleCollapsible: true},
        {openedState: false},
    );
    $(".accordion_links_header").click(function (element) {
        var id = checkID(element.target.textContent);
        $(".links_arrow" + id).toggleClass('rotated');
    });

    mediaCheck({
        media: '(min-width: 768px)',
        entry: function () {
            $("#accordion").accordion('destroy');
        },
        exit: function () {
            $("#accordion").accordion('activate');
        },
    });

    function checkID(element) {
        return element[element.length - 1];
    }
});
