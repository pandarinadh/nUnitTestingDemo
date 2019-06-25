registrationModule.directive('draggable', function ($document) {


    return function (scope, element, attr) {
        var startX = 0, startY = 0, x = 0, y = 0;

        /*
        element.css({
            position: 'relative',
            border: '1px solid red',
            backgroundColor: 'lightgrey',
            cursor: 'pointer',
            display: 'block',
            width: '65px'
        });*/

        console.log(element);

        element.on('mousedown', function (event) {
            event.preventDefault();

            element.css({
                border: '1px solid red',
                zIndex: 0
            });

            startX = event.screenX - x;

            startY = event.screenY - y;

            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        })

        function mousemove(event) {
            y = event.screenY - startY;
            x = event.screenX - startX;

            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }

        function mouseup() {
            element.css({
                border: '1px solid black',
                zIndex: 1
            });
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
        }
    }
});