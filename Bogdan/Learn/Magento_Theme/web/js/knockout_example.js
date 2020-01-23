define(['ko'], function (ko) {
    'use strict';

    return function () {

        let time = ko.observable('...loading');
        let currTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

        let viewModel = {
            info: time
        };

        setTimeout(function () {
            return time('Current time: ' + currTime)
        }, 2000);

        return viewModel
    }
});