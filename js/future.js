var futureApp;


futureApp = angular.module('futureApp', []);
futureApp.controller('glowController', function($scope){
    function random(from, to) {
        return _.random(from || to || 0, to || from || 0);
    }

    function getColor(h, s, l, a) {
        return 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + a + ')';
    }

    $scope.$watchCollection('[widthFrom, widthTo, heightFrom, heightTo, hueFrom, hueTo, saturationFrom, saturationTo, lightnessFrom, lightnessTo, gradient, gradientPoint]', function(){
        $scope.glow = _.map(_.range(500), function(){
            var item,
                colors,
                hue,
                saturation,
                lightness;

            hue = random(+$scope.hueFrom, +$scope.hueTo);
            saturation = random(+$scope.saturationFrom, +$scope.saturationTo);
            lightness = random(+$scope.lightnessFrom, +$scope.lightnessTo);
            colors = [getColor( hue, saturation, lightness, 1), getColor( hue, saturation, lightness, 0)];
            item = {
                width: random(+$scope.widthFrom, +$scope.widthTo),
                heigth: random(+$scope.heightFrom, +$scope.heightTo),
                background: $scope.gradient ? 'linear-gradient(to bottom, ' + colors[0] + ' 0%, ' + colors[0] + ' ' + $scope.gradientPoint + '%, ' + colors[1] + ' 100%);' : colors[0]
            };

            return  item;
        });
    });

    $scope.initialize = function(){
        $scope.widthFrom = 2;
        $scope.widthTo = 5;
        $scope.heightFrom = 230;
        $scope.heightTo = 300;
        $scope.hueFrom = 1;
        $scope.hueTo = 50;
        $scope.saturationFrom = 50;
        $scope.saturationTo = 50;
        $scope.lightnessFrom = 50;
        $scope.lightnessTo = 50;
        $scope.opacity = 1;
        $scope.gradient = true;
        $scope.gradientPoint = 50;
    };
});
