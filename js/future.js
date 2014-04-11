var futureApp;


futureApp = angular.module('futureApp', []);
futureApp.controller('glowController', function($scope){
    function random(from, to) {
        return _.random(from || to || 0, to || from || 0);
    }

    $scope.$watchCollection('[widthFrom, widthTo, hueFrom, hueTo, saturationFrom, saturationTo, lightnessFrom, lightnessTo]', function(){
        console.table([$scope])

        $scope.glow = _.map(_.range(400), function(){
            var item = {
                width: random(+$scope.widthFrom, +$scope.widthTo),
                heigth: 300,
                hue: random(+$scope.hueFrom, +$scope.hueTo),
                saturation: random(+$scope.saturationFrom, +$scope.saturationTo),
                lightness: random(+$scope.lightnessFrom, +$scope.lightnessTo)
            };

            return  item;
        });
    });

    $scope.initialize = function(){
        $scope.widthFrom = 2;
        $scope.widthTo = 5;
        $scope.hueFrom = 1;
        $scope.hueTo = 50;
        $scope.saturationFrom = 50;
        $scope.saturationTo = 50;
        $scope.lightnessFrom = 50;
        $scope.lightnessTo = 50;
    };
});
