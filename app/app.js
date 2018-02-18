'use strict';
var app = angular.module('DemoDirectiveApp', []);

app.directive('directiveTest', function() {
    return {
        scope: {
            information: '='
        },
        link: function(scope, elm, attrs) {
            var modelArray = scope.information;
            elm.on('click', function(event) {            
                if (event.srcElement.nodeName === 'BUTTON') {
                    scope.$apply(function () {
                        if (scope.name) {
                            if (modelArray.map(function(e) { return e.name; }).indexOf(scope.name) == -1) {
                                
                                modelArray.push({name: scope.name, job: scope.job});
                                scope.name = '';
                                scope.job = '';
                                
                            } else {
                                scope.error = 'This name already exists!';
                            }
                        } else {
                            scope.error = '"Name" field cannot be empty!'
                        }
                    })
                }
            });
        },
        templateUrl: 'directiveTest.html'
	};
});

app.controller('MainCtrl', ['$scope',
    function($scope) {
		$scope.dataArray = [
            {
                "name":"theo",
                "job":"CTO"
            },
            {
                "name":"john",
                "job":"CEO"
            },
            {
                "name":"mathilde",
                "job":"Marketing manager"
            },
            {
                "name":"Christian",
                "job":"student"
            },
            {
                "name":"Duarte",
                "job":"Front End Developer"
            }
        ]
    }
]);