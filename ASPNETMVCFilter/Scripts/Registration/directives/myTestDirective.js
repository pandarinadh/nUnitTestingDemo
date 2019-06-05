/*define(['AngularProvider'], function (AngularProvider) {
    AngularProvider.directive('customer', function () {
        console.log('in directive');
        return {
            scope: {
                instructors: '='
            },

            template: '<ol><li ng-repeat="instructor in instructors">Number: {{instructor.Number}} </li></ol>'
        };
    });
});
*/


registrationModule.directive('myCustomer', function () {

   
        return {
            restrict: 'E',
          /*  scope: {
                instructors: '=',
            },*/
            link: function (scope, element, attributes) {
                scope.myName = '';
                scope.myTextArea = '';

            },
            templateUrl: '/templates/directives/instructorInfo.html'
        };
    });
    