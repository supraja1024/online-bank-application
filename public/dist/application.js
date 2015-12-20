'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'bank-form';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();
'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('form3', {
			url: '/form3',
			templateUrl: 'modules/core/views/form3.client.view.html'
		}).
		state('form2', {
			url: '/form2',
			templateUrl: 'modules/core/views/form2.client.view.html'
		}).
		state('form1', {
			url: '/form1',
			templateUrl: 'modules/core/views/form1.client.view.html'
		}).
		state('landing-page', {
			url: '/',
			templateUrl: 'modules/core/views/landing-page.client.view.html'
		});
	}
]);
'use strict';

angular.module('core').controller('LandingPageController', ['$scope', '$location', 'FormData', 'BankForm',

 function ($scope, $location, FormData, BankForm) {
                // Landing page controller logic
                // ...
                $scope.customer = {};
                $scope.submitted = false;
                /* $scope.setComponentsOnLoad = function () {
            $scope.myStyle = {};
            $scope.myStyle1 = {};
            $scope.basicError = '';
//             var bodyHeight = window.innerHeight - parseInt(jQuery('header').css('height'), 10);
            var bodyHeight = window.innerHeight;
//            jQuery('#loginDiv').css('height', bodyHeight);
            $scope.myStyle.height = bodyHeight;
            if (parseFloat(window.innerWidth / bodyHeight) <= 1.9) {
                $scope.myStyle1.background = 'url(\'/modules/core/img/login-page-2048X1368.jpg\') 100% 100% center fixed';
//                jQuery('.login-div-properties').css('background', 'url(\'modules/users/img/login-page-2048X1368.jpg\')');
            } else {
                $scope.myStyle1.background = 'url(\'/modules/core/img/login-page-1366X636.jpg\') 100% 100% center fixed';
//                jQuery('.login-div-properties').css('background', 'url(\'modules/users/img/login-page-1366X636.jpg\')');
            }
        };
        $scope.setComponentsOnLoad();*/
                $scope.applyOnline = function () {
                    $location.path('form1');
                };
                $scope.form1submit = function () {
                    FormData.setform($scope.customer);
                    $location.path('form2');
                };
                $scope.form2submit = function () {
                    FormData.setform($scope.customer);
                    $location.path('form3');
                };
                $scope.form3submit = function () {
                    FormData.setform($scope.customer);
                    console.dir($scope.customer);
                    BankForm.createuser().createuser($scope.customer, function (response) {
                        console.log(response);
                        $scope.submitted = true;
                    }, function (err) {
                        console.log(err);
                    });
                };
                $scope.initForm1 = function () {
                    $scope.customer = FormData.getform();
                };
                $scope.initForm2 = function () {
                    $scope.customer = FormData.getform();
                };
                $scope.initForm3 = function () {
                    $scope.customer = FormData.getform();
                };
                $scope.resetForm1 = function () {
                    $scope.customer.firstName = '';
                    $scope.customer.lastName = '';
                    $scope.customer.age = null;
                    $scope.customer.city = '';
                    $scope.customer.profession = '';
                    $scope.customer.mobile = null;
                    FormData.setform($scope.customer);
                };
                $scope.resetForm2 = function () {
                    $scope.customer.panCard = '';
                    $scope.customer.grossannualincome = null;
                    $scope.customer.company = '';
                    $scope.customer.designation = '';
                    $scope.customer.profession = '';
                    $scope.customer.pincode = null;
                    FormData.setform($scope.customer);
                };
                $scope.resetForm3 = function () {
                    $scope.customer.accounttype = '';
                    $scope.customer.fixeddeposit = false;
                    $scope.customer.creditcard = false;
                    $scope.customer.terms = false;
                    FormData.setform($scope.customer);
                };
                    angular.element(document).ready(function () {
                    document.getElementById('#userForm1').bootstrapValidator({

                            feedbackIcons: {
                                valid: 'glyphicon glyphicon-ok',
                                invalid: 'glyphicon glyphicon-remove',
                                validating: 'glyphicon glyphicon-refresh'
                            },

                            fields: {
                                firstName: {
                                    validators: {
                                        notEmpty: {
                                            message: 'First name is required and cannot be empty'
                                        },
                                        regexp: {
                                            regexp: /^[a-z\s]+$/i,
                                            message: 'The First Name can consist of alphabetical characters only.'
                                        }
                                    }
                                },
                                lastName: {
                                    validators: {
                                        notEmpty: {
                                            message: 'Lastname is required and cannot be empty'
                                        },
                                        regexp: {
                                            regexp: /^[a-z\s]+$/i,
                                            message: 'The Last Name can consist of alphabetical characters only.'
                                        }
                                    }
                                },
                                  age: {
                                    validators: {
                                        notEmpty: {
                                            message: 'Age is required and cannot be empty'
                                        },
                                        digits: {
                                            message: 'Only digits are allowed in mobile number.'
                                        },
                                        regexp: {
                                            regexp: /^(\d?[1-9]|[1-9]0)$/i,
                                            message: 'Age can consist of digits between 1-100 only.'
                                        }
                                    }
                                },

                                mobile: {
                                    validators: {
                                        notEmpty: {
                                            message: 'Mobile number is required and cannot be empty.'
                                        },
                                        digits: {
                                            message: 'Only digits are allowed in mobile number.'
                                        },
                                        regexp: {
                                            regexp: /^[9 8 7]\d{9}$/,
                                            message: 'Mobile number should be of 10 digits only.'
                                        }

                                    }
                                }
                                  }

                            });
 });

                    }
                    ]);
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