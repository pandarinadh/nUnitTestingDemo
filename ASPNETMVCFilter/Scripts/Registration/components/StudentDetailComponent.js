registrationModule.component('studentDetail', {
    templateUrl: '/templates/components/StudentDetail.html',
    bindings: {
        student: '=',
        onModifyDialog: '&'
    },
    controller: function ($scope, $element, $attrs) {
        var ctrl = this;

        // use this.parent to access required Objects
        //this.parent.foo();
       

        this.modifyDialog = function () {
            //console.log(this.student);
            console.log(this.parent);
            this.onModifyDialog(this.student);
        }
    }
});