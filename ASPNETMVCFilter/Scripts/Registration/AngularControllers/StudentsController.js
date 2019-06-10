'use strict';

var StudentsController = registrationModule.controller("StudentsController", function ($scope, $mdDialog, myData) {
    
    $scope.students = myData.students;

    $scope.showApplyChangesDialog = function ($event) {
        $mdDialog.show({
            scope: $scope,
            preserveScope: true,
            templateUrl: '/templates/directives/courseInfo.html'
        });
    };

    $scope.cancelDialog = function () {
        $mdDialog.hide();
    };

    $scope.saveDialog = function () {
        _.forEach($scope.courses,
                                    function (obj) {
                                        //obj.name = $scope.myName;
                                        //ob = $scope.myTextArea;
                                    });

        $mdDialog.hide();
    };


}
);