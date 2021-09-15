var availableTags = [
    "broker.mqtt-dashboard.com",
    "localhost"
];

var $input = $('#urlInput');

$input.autocomplete({
    source: availableTags,
    minLength: 0
});

$input.addClass("ui-widget ui-widget-content ui-corner-left");

$("<button type='button'>&nbsp;</button>")
    .attr("tabIndex", -1)
    .attr("title", "Show All Items")
    .insertAfter($input)
    .button({
        icons: {
            primary: "ui-icon-triangle-1-s"
        },
        text: false
    })
    .removeClass("ui-corner-all")
    .addClass("ui-corner-right ui-button-icon")
    .click(function () {
        // close if already visible
        if ($input.autocomplete("widget").is(":visible")) {
            $input.autocomplete("close");
            return;
        }
        $(this).blur();
        $input.autocomplete("search", "");
        $input.focus();
    });

$("form").submit(function (e) {
    e.preventDefault();
    alert($(this).serialize());
});