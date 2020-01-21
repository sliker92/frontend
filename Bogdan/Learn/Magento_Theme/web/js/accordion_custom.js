define([
    'jquery',
    'accordion',
    'matchMedia'
], function ($, _) {
    'use strict';

    $.widget('mage.accordion_custom', {
        _create: function (element) {
            this._case = $(this.element);

            $(this._case).accordion(
                {active: false},
                {collapsible: true},
                {multipleCollapsible: true},
                {openedState: false},
            );

            mediaCheck({
                media: '(min-width: 768px)',
                entry: $.proxy(function () {
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
        }
    });

    return $.mage.accordion_custom;
});
