define([
    'jquery',
    'accordion',
    'matchMedia'
], function ($, _) {
    'use strict';

    $.widget('mage.accordion_custom', {
        _create: function (config, element) {
            this._case = $(this.element);
            var breakpoint = this.options.breakpoint;
            // need for change htmlClass when opening or closing list
            var headerClass = $('.' + this.options.headerClass);

            $(this._case).accordion(
                {active: false},
                {collapsible: true},
                {multipleCollapsible: true},
                {openedState: false},
            );

            mediaCheck({
                media: '(min-width: ' + breakpoint + 'px)',
                entry: $.proxy(function () {
                    $(this._case).accordion("activate");
                    $(this._case).accordion('destroy');
                }, this),
                exit: $.proxy(function () {
                    $(this._case).accordion(
                        {active: false},
                        {collapsible: true},
                        {multipleCollapsible: true},
                        {openedState: false},
                    );
                }, this)
            });
            if (headerClass) {
                headerClass.click(function () {
                    var $this = $(this);

                    if ($this.hasClass("accordion_closed")) {
                        $this.removeClass("accordion_closed");
                        $this.addClass("accordion_opened");
                    } else if ($this.hasClass("accordion_opened")) {
                        $this.removeClass("accordion_opened");
                        $this.addClass("accordion_closed");
                    }
                })
            }
        }
    });

    return $.mage.accordion_custom;
});
