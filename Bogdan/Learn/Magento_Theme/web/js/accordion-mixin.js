define(['jquery'], function(){
    return function(){
        console.log("Our mixin is hooked up");
    };
});

/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// define([
//     'jquery',
//     'matchMedia',
//     'jquery-ui-modules/menu',
//     'jquery/jquery.mobile.custom',
//     'mage/translate'
// ], function ($, mediaCheck) {
//     'use strict';
//
//     $.widget('mage.menu', $.ui.menu, {
//         options: {
//             responsive: false,
//             expanded: false,
//             showDelay: 42,
//             hideDelay: 300,
//             delay: 0,
//             mediaBreakpoint: '(max-width: 767px)'
//         },
//
//
//         _create: function () {
//             var self = this;
//
//             this.delay = this.options.delay;
//
//             this._super();
//             $(window).on('resize', function () {
//                 self.element.find('.submenu-reverse').removeClass('submenu-reverse');
//             });
//         },
//
//
//         _init: function () {
//             this._super();
//
//             if (this.options.expanded === true) {
//                 this.isExpanded();
//             }
//
//             if (this.options.responsive === true) {
//                 mediaCheck({
//                     media: this.options.mediaBreakpoint,
//                     entry: $.proxy(function () {
//                         this._toggleMobileMode();
//                     }, this),
//                     exit: $.proxy(function () {
//                         this._toggleDesktopMode();
//                     }, this)
//                 });
//             }
//
//             this._assignControls()._listen();
//             this._setActiveMenu();
//         }
//
//     return {
//         menu: $.mage.menu,
//         navigation: $.mage.navigation
//     };
// });


// mediaCheck({
//     media: '(min-width: 768px)',
//     // Switch to Desktop Version
//     entry: function () {
//         /* The function that toggles page elements from desktop to mobile mode is called here */
//     },
//     // Switch to Mobile Version
//     exit: function () {
//         /* The function that toggles page elements from mobile to desktop mode is called here*/
//     }
// });