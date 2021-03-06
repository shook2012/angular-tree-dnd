angular.module('ntt.TreeDnD')
    .directive(
    'treeDndNodeHandle', function () {
        return {
            restrict: 'A',
            scope:    true,
            link:     function (scope, element, attrs) {
                scope.$element = element;
                scope.$type = 'TreeDnDNodeHandle';
                if (scope.$class.handle) {
                    element.addClass(scope.$class.handle);
                }
            }
        };
    }
);