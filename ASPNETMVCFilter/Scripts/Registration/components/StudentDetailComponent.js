registrationModule.component('studentDetail', {
    templateUrl: '/templates/components/StudentDetail.html',
    bindings: {
        student: '='
    },
    controller: function ($scope, $element, $attrs) {
        // use this.parent to access required Objects
        //this.parent.foo();
        console.log(this);
    }
});