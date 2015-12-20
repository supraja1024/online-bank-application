'use strict';

angular.module('core').factory('BankForm', ['$resource',
	function($resource) {
		// Bank form service logic
		// ...

		// Public API
		return {
			createuser: function () {
                return $resource('auth/createuser', {}, {
                    createuser: {
                        method: 'POST',
                        isArray: false
                    }
                });
            }
		};
	}
]);