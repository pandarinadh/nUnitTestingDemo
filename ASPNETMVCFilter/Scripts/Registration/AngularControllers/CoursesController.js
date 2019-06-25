'use strict';

registrationModule.controller("CoursesController", function ($scope, $mdDialog, $http,dataService, myData) {
    $scope.courses = myData.courses;
    $scope.vendors = dataService.funcData();

    console.log($scope.vendors);

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
    
    $scope.fetchId = function (id) {
       //alert(id);
}

    $scope.myFunction = function () {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    $scope.myClickFunc = function (id) {
        alert(id);
    }

    $('.dropdown-menu').find('input').click(function (e) {
       // alert('hi');
        e.stopPropagation();
    });
});