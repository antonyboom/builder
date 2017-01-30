/**
 * Main AngularJS Web Application
 */
var app = angular.module('builder', [
    'ngRoute',
    'ui.bootstrap',
    'ngTouch',
    'ngAnimate',
    'ngSanitize',
    'bootstrapLightbox'
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
    .when("/delivery", {templateUrl: "partials/delivery.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/stones", {templateUrl: "partials/stones.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope, $location, $http, Lightbox, $sce, $window) {

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

    $scope.officeLocation = '//api-maps.yandex.ru/frame/v1/-/CZHtFUMo';

    $scope.partner1 =  'images/partner1.png';
    $scope.partner2 =  'images/partner2.png';
    $scope.partner3 =  'images/partner3.png';

    $scope.partner4 =  'images/partner4.png';
    $scope.partner5 =  'images/partner5.png';
    $scope.partner6 =  'images/partner6.png';


    $scope.logo =  'images/logo4.png';
    $scope.homeLogo =  'images/home-logo.png';

    $scope.cer1 =  'images/сertificate01.jpg';
    $scope.cer2 =  'images/сertificate02.jpg';
    $scope.cer3 =  'images/сertificate03.jpg';
    $scope.cer4 =  'images/сertificate04.jpg';

    $scope.granit1200 =  'images/granit1200.jpeg';
    $scope.izvest1200 =  'images/izvest1200.jpeg';
    $scope.grav1200 =  'images/grav1200.jpeg';

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

    $scope.titles = [{
            id: 0,
            name: 'Более 15 лет безупречной работы на рынке'
        }, {
            id: 1,
            name: 'Быстрые сроки доставки'
        }, {
            id: 2,
            name: 'Официальный поставщик экологически чистого гранитного щебня из Европы'
        }, {
            id: 3,
            name: 'Материалы сертифицированы и сопровождаются паспортом качества'
        }];

    $scope.image = $scope.kinds[0].path;

    $scope.pick = function (id) {

        angular.forEach($scope.kinds, function (val) {
            if (val.id == id){
                $scope.image = val.path
            }
        })
    };

    $scope.certificates = [
        {
            'url': 'images/сertificate01.jpg',
            'thumbUrl': 'images/tumbCert01.jpg' // used only for this example
        },
        {
            'url': 'images/сertificate02.jpg',
            'thumbUrl': 'images/tumbCert02.jpg' // used only for this example
        },
        {
            'url': 'images/сertificate03.jpg',
            'thumbUrl': 'images/tumbCert03.jpg' // used only for this example
        },
        {
            'url': 'images/сertificate04.jpg',
            'thumbUrl': 'images/tumbCert04.jpg' // used only for this example
        }
    ];

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.certificates, index);
    };

    $scope.submitForm = function(form) {

        $scope.processForm(form)
    };


    $scope.success = false;
    $scope.error = false;

    $scope.processForm = function(form) {

        $scope.formData = form;

        console.log(form);

        $http({
            method  : 'POST',
            url     : 'process.php',
            data    : $.param($scope.formData),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data) {

            console.log(data);

            if (data.success) {
                $scope.success = true;
                console.log('Success');
            } else {
                $scope.error = false;
                console.log('Fail');
            }
        });
    };


});
