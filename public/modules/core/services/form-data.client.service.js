'use strict';

angular.module('core').factory('FormData', [
 function () {
        // Form data service logic
        // ...

        // Public API
        var formData = {};

        function setform(data) {
            formData = data;
        }
        function getform() {
            return formData;
        }
        return {
            setform: setform,
            getform: getform
        };
 }
]);