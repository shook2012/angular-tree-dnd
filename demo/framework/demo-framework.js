var app, deps;

deps = ['ntt.TreeDnD', 'ngRoute'];

app = angular.module('TreeDnDTest', deps)
    .config(
    function ($routeProvider) {
        $routeProvider
            .when(
            '/basic', {
                templateUrl: 'basic/basic-frame.html',
                controller:  'DemoBasicController'
            }
        )
            .when(
            '/filter', {
                templateUrl: 'filter/filter-frame.html',
                controller:  'FilterBasicController'
            }
        )
            .when(
            '/list', {
                templateUrl: 'list/list-frame.html',
                controller:  'ListBasicController'
            }
        )
            .otherwise({redirectTo: '/basic'});
    }
)
    .directive(
    'navigation', function ($rootScope, $location) {
        return {
            template: '<li ng-repeat="option in options" ng-class="{active: isActive(option)}">' +
                      '    <a ng-href="{{option.href}}">{{option.label}}</a>' +
                      '</li>',
            link:     function (scope, element, attr) {
                scope.options = [
                    {
                        label: "Basic",
                        href:  "#/basic"
                    },
                    {
                        label: "Filter",
                        href:  "#/filter"
                    },
                    {
                        label: "List Tree",
                        href:  "#/list"
                    },
                    {
                        label: "Github",
                        href:  "https://github.com/thienhung1989/angular-tree-dnd"
                    }
                ];

                scope.isActive = function (option) {
                    return option.href.indexOf(scope.location) === 1;
                };

                $rootScope.$on(
                    "$locationChangeSuccess", function (event, next, current) {
                        scope.location = $location.path();
                    }
                );
            }
        };
    }
);