registrationModule.component('studentList', {
    templateUrl: '/templates/components/StudentList.html',
    bindings: {
        students: '=',
        student: '=',
        onAddStudent: '&',
        onSaveStudent: '&',
        onModifyDialog: '&'
    },
    controller: function ($scope, $element, $attrs) {
        // use this.parent to access required Objects
        //this.parent.foo();
   

        this.addStudent = function () {
              this.onAddStudent();
        };

        this.saveDialog = function () {
            console.log(student);
            this.onSaveStudent();
        };

        this.modifyDialog = function (s) {
            this.student = s;
            this.onModifyDialog();
        };
     
    }
});