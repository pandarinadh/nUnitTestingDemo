'use strict';

registrationModule.controller("InstructorsController",['$scope', '$mdDialog','myData', function ($scope, $mdDialog, myData) {
    console.log(myData);
    $scope.instructors = myData.instructors;

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
}]
);