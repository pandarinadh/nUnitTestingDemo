'use strict';

registrationModule.controller("CoursesController",  function ($scope, myData) {
    $scope.courses = myData.courses;
}
);