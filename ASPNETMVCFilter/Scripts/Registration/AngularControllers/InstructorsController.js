'use strict';

registrationModule.controller("InstructorsController",['$scope', '$mdDialog','$templateCache','myData', function ($scope, $mdDialog,$templateCache, myData) {
    console.log(myData);
    $scope.instructors = myData.instructors;

    $scope.myName = '';
    $scope.myTextArea = '';



    $scope.showDialog = function ($event) {
        alert = $mdDialog.alert({
            title: 'Attention',
            textContent: 'This is an example of how easy dialogs can be!',
            ok: 'Close'
        });

        setTimeout(function () { console.log('in timer'); $mdDialog.hide(); }, 1000);

        $mdDialog
          .show(alert)
          .finally(function () {
              setTimeout
              alert = undefined;
          });
    };

    $scope.showApplyChangesDialog = function ($event) {

        $templateCache.remove('/templates/directives/instructorInfo.html')

        $mdDialog.show({
            scope: $scope,
            preserveScope: true,
             //template: ' <my-instructors></my-instructors>'
            templateUrl: '/templates/directives/instructorInfo.html'
            });
    };

    $scope.cancelDialog = function () {
        $mdDialog.hide();
    };

    $scope.saveDialog = function () {
        _.forEach($scope.instructors,
                                    function (obj) {
                                        obj.name = $scope.myName;
                                        obj.subject = $scope.myTextArea;
                                    });

        $mdDialog.hide();
    };

}]
)
/*.directive('customer', function () {
    alert('hi');

    return {
        restrict: 'E',
        scope: {
            instructors: '='
        },

        template: '<ol><li ng-repeat="instructor in instructors">Number: {{instructor.Number}} </li></ol>'
    };
});
*/
;