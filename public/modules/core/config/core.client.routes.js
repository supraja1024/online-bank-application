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