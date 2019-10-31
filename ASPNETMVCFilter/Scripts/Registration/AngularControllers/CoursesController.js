'use strict';

registrationModule.controller("CoursesController", function ($scope, $mdDialog, $http, vendorService, myData) {
    $scope.courses = myData.courses;
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

    //console.log($scope.vendors);

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

    $scope.users = [
    {
        name: { first: 'try', last: 'try' }
    },
    {
        name: { first: 'try2', last: 'try2' }
    },
    {
        name: { first: 'try3', last: 'try3' }
    }];


    $scope.selectedUserIndex = undefined;
    $scope.selectUserIndex = function (index) {
        if ($scope.selectedUserIndex !== index) {
            $scope.selectedUserIndex = index;
        }
        else {
            $scope.selectedUserIndex = undefined;
        }
    };
});