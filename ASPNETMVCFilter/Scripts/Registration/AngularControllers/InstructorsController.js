'use strict';

registrationModule.controller("InstructorsController", function ($scope, myData) {
    console.log(myData);
    $scope.instructors = myData.instructors;
}
);