app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'app/views/login.html'
    }).
    when('/dashboard', {
        templateUrl: 'app/views/dashboard.html'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);