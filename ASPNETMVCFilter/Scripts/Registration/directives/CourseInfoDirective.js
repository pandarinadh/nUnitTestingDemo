registrationModule.directive('myCourse', function () {


    return {
        restrict: 'E',
        /*  scope: {
              instructors: '=',
          },*/
        link: function (scope, element, attributes) {
            scope.myName = '';
            scope.myTextArea = '';

        },
        templateUrl: '/templates/directives/courseInfo.html'
    };
});