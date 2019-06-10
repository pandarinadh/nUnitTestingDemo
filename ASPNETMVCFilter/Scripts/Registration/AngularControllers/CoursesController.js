﻿'use strict';

registrationModule.controller("CoursesController",  function ($scope, $mdDialog, myData) {
    $scope.courses = myData.courses;

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