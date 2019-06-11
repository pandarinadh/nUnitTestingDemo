registrationModule.component('studentDetail', {
    templateUrl: '/templates/components/StudentDetail.html',
    bindings: {
        student: '='
    },
    controller: function ($scope, $element, $attrs) {
        var ctrl = this;

        // use this.parent to access required Objects
        //this.parent.foo();
        console.log(this);

        this.testFunc = function () {
            alert('test');
        }
        
    }
});