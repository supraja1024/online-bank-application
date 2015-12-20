'use strict';

angular.module('core').controller('LandingPageController', ['$scope', '$location', 'FormData', 'BankForm',

 function ($scope, $location, FormData, BankForm) {
        // Landing page controller logic
        // ...
        $scope.customer = {};
        $scope.submitted = false;
     $scope.errorSubmission = false;
        $scope.applyOnline = function () {
            $location.path('form1');
        };
        $scope.form1submit = function () {
            FormData.setform($scope.customer); // update customer model on successful form submit
            $location.path('form2');
        };
        $scope.form2submit = function () {
            FormData.setform($scope.customer); // update customer model on successful form submit
            $location.path('form3');
        };
        $scope.form3submit = function () {
            FormData.setform($scope.customer); // update customer model on successful form submit
            if (!$scope.customer.fixeddeposit) {
                $scope.customer.fixeddeposit = false;
            }
            if (!$scope.customer.creditcard) {
                $scope.customer.creditcard = false;
            }
            if (Object.keys($scope.customer).length === 16) {
                BankForm.createuser().createuser($scope.customer, function (response) { // server call for customer registration
                    console.dir(response);
                    if (response.message === 'User exists !!!') {
                        $scope.submitted = false;
                        $scope.errorSubmission = true;
                        $scope.errormessage = response.message;
                    } else {
                        $scope.submitted = true;
                        $scope.errorSubmission = false;
                        angular.copy({}, $scope.customer);
                        FormData.setform($scope.customer); // resetting form data on successful registration of customer
                    }
                }, function (err) {
                    console.log(err);
                    $scope.submitted = false;
                    $scope.errorSubmission = true;
                    $scope.errormessage = 'Error while registration.Please try again';
                });
            } else {
                $scope.submitted = false;
                $scope.errorSubmission = true;
                $scope.errormessage = 'Enter all the required fields across three forms for successful submission';
            }
        };
        // Get updated customer model on load
        $scope.initForm1 = function () {
            $scope.customer = FormData.getform();
        };
        // Get updated customer model on load
        $scope.initForm2 = function () {
            $scope.customer = FormData.getform();
        };
        // Get updated customer model on load
        $scope.initForm3 = function () {
            $scope.customer = FormData.getform();
        };
        // resetting form values one by one as it is using the same customer object across multiple forms
        $scope.resetForm1 = function () {
            delete $scope.customer.firstName;
            delete $scope.customer.lastName;
            delete $scope.customer.age;
            delete $scope.customer.city;
            delete $scope.customer.profession;
            delete $scope.customer.mobile;
            FormData.setform($scope.customer);
        };
        // resetting form values one by one as it is using the same customer object across multiple forms
        $scope.resetForm2 = function () {
            delete $scope.customer.pancard;
            delete $scope.customer.grossannualincome;
            delete $scope.customer.company;
            delete $scope.customer.designation;
            delete $scope.customer.profession;
            delete $scope.customer.address;
            delete $scope.customer.pincode;
            FormData.setform($scope.customer);
        };
        // resetting form values one by one as it is using the same customer object across multiple forms
        $scope.resetForm3 = function () {
            $scope.customer.accounttype = '';
            $scope.customer.fixeddeposit = false;
            $scope.customer.creditcard = false;
            $scope.customer.terms = false;
            $scope.submitted = false;
            $scope.errorSubmission = false;
            FormData.setform($scope.customer);
        };
    }
]);