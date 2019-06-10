registrationModule.component('studentList', {
    templateUrl: '/templates/components/StudentList.html',
    bindings: {
        students: '='
    },
    controller: function ($scope, $element, $attrs) {
        // use this.parent to access required Objects
        //this.parent.foo();
        console.log(this);
    }
});