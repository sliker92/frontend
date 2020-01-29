// If you want use custom animation on opening and closing widget(data-role="trigger")
// add css code in your styles file on accordion_closed::after and accordion_opened::after classes.

define([
    'jquery',
    'jquery/ui',
    'accordion',
    'matchMedia'
], function ($, _) {
    'use strict';

    $.widget('mage.accordion_custom', {
        options: {
            openedClass: 'accordion_opened', // Class used to be toggled on clicked element
            closedClass: 'accordion_closed' // Class used to be toggled on clicked element
        },

        /**
         * Toggle creation
         * @private
         */
        _create: function (config, element) {
            this.element = $(this.element);
            this._bindCore();
            mediaCheck({
                media: '(min-width: ' + this.options.breakpoint + 'px)',
                entry: $.proxy(function () {
                    $(this.element).accordion("activate");
                    $(this.element).accordion('destroy');
                }, this),
                exit: $.proxy(this._showAccordion, this)
            });

        },

        /**
         * Core bound events
         * @protected
         */
        _bindCore: function () {
            var options = this.options;
            var headerClass = $('.' + this.options.headerClass);
            var $this = $(this);
            if (headerClass) {
                headerClass.on('click',function (element) {
                    if (element.target.className === 'accordion_links_header accordion_closed') {
                        element.target.className = 'accordion_links_header accordion_opened'
                    } else if (element.target.className === 'accordion_links_header accordion_opened') {
                        element.target.className = 'accordion_links_header accordion_closed'
                    }
                });
            }
        },

        /**
         * Shows widget
         * @private
         */
        _showAccordion: function () {
            $(this.element).accordion(
                {active: false},
                {collapsible: true},
                {multipleCollapsible: true},
                {openedState: false},
            );
        }
    });

    return $.mage.accordion_custom;
});
