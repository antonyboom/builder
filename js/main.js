/**
 * Main AngularJS Web Application
 */
var app = angular.module('builder', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    // Home
      .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
      .when("/home", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope, $location, $http) {
  console.log("Page Controller reporting for duty.");

    $scope.partner1 =  'images/partner1.png';
    $scope.partner2 =  'images/partner2.png';
    $scope.logo =  'images/logo4.png';
    $scope.homeLogo =  'images/home-logo.png';

    $scope.cer1 =  'images/сertificate01.jpg';
    $scope.cer2 =  'images/сertificate02.jpg';
    $scope.cer3 =  'images/сertificate03.jpg';
    $scope.cer4 =  'images/сertificate04.jpg';

    $scope.aggregates =  'images/aggregates.jpg';


    $scope.kinds = [{
            id: 0,
            path: 'images/gran.jpg'
        }, {
            id: 1,
            path: 'images/izvest.jpg'
        }, {
            id: 2,
            path: 'images/mixed.jpg'
        }];

    $scope.desc = [{
        id: 0,
        name: 'Щебень Гранитный'
    }, {
        id: 1,
        name: 'Щебень Известняковый'
    }, {
        id: 2,
        name: 'Щебень Гравийный'
    }];

    $scope.image = $scope.kinds[0].path;

    $scope.pick = function (id) {

        angular.forEach($scope.kinds, function (val) {
            if (val.id == id){
                $scope.image = val.path
            }
        })
    }
});
