app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/error");
  $stateProvider
      .state('home', {
          url: '/home',
          views: {
            "" :{
              templateUrl: 'app/containers/home.html'
            }
          }
      })
      .state('login', {
          url:'/',
          controller: 'loginCtrl as lvm',
          templateUrl: 'app/containers/login/login.html'
      })

      .state('register', {
          url: "/register",
          controller: 'registerCtrl as rvm',
          templateUrl: 'app/containers/register/register.html'
      })
      .state('home.chatform', {
            url: "/chatform",
          views: {
            "":{
                controller:'chatCtrl as cvm',
              templateUrl: 'app/components/chatform/chatform.html'
            }
          }
      })
      .state('home.dashboard', {
            url: "/signin",
          // controllers:'dashboardCtrl',
          views: {
            "":{
              templateUrl: 'app/containers/signin/signin.html'
            }
          }
      })
      .state('error', {
          url: "/error",
          templateUrl: 'app/assests/html/err.html'
      })

      // use the HTML5 History API
      $locationProvider.html5Mode(true).hashPrefix('');

})
