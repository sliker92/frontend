define(['jquery', 'jquery/ui'], function ($) {
    'use strict';

    return function (accordion) {
        $.widget('mage.accordion', accordion, {});
        console.log('mixin added');
    }

});