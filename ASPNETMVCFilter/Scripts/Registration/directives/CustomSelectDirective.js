registrationModule.directive('customSelect', function () {
    return {
        restrict: 'E',
        /*  scope: {
              instructors: '=',
          },*/
        link: function (scope, element, attributes) {

            scope.selectKeyDown = function (ev) {
                ev.stopPropagation();
            }

            scope.selclicked = function () {
                var bodyRect = document.body.getBoundingClientRect();
                console.log(bodyRect);
                var myElement = document.getElementsByClassName('sel');
                //var containerTop = myElement[0].getBoundingClientRect().top - bodyRect.top + 'px';
                var containerTop = $(".sel").offset().top + 35 + "px"
                console.log(containerTop);
                var containerLeft = $(".sel").offset().left + "px"
                console.log(containerLeft);
                var myContainer = document.getElementsByClassName('my-container');
                setTimeout(function () {
                    //$(".my-container").css({'top':containerTop});
                    angular.element(myContainer).css({ 'top': containerTop, 'left': containerLeft, 'minWidth': '400px' });
                }, 50);

            };

            scope.fnChange = function () {
                alert(element[0].baseURI);
            }
        },
        templateUrl: '/templates/directives/customSelect.html'
    };
});