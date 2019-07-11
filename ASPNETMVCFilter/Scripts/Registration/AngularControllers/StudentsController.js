'use strict';

var StudentsController = registrationModule.controller("StudentsController", function ($scope, $mdDialog, myData, vendorService) {
    
    $scope.students = myData.students;
    $scope.student = {};
   
    $scope.vendors = vendorService.funcData();
    $scope.items = [{
        id: null,
        name: null
    }];

    _.forEach($scope.vendors,
                                  function (obj) {
                                      $scope.items.push({
                                          id: obj.id,
                                          name: obj.vendorName
                                      })
                                  });


    $scope.cancelDialog = function () {
        $mdDialog.hide();
    };

    $scope.saveDialog = function () {
        updateObject($scope.students, $scope.student)

        $scope.student = {};

        $mdDialog.hide();
    };

    $scope.showAddStudentDialog = function ($event) {
        $scope.student = {};
        $mdDialog.show({
            scope: $scope,
            preserveScope: true,
            templateUrl: '/templates/components/modifystudent.html'
        });
    };

    $scope.modifyDialog = function ($event) {
        console.log($scope);

            $mdDialog.show({
                scope: $scope,
                preserveScope: true,
                templateUrl: '/templates/components/modifystudent.html'
            });

        
    };

    function updateObject(arr, obj){
        
        const index = arr.findIndex((e) => e.number === obj.number);

        if (index === -1) {
            arr.push(obj);
        } else {
            arr[index] = obj;
        }
    }
    
});