app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/error");
  $stateProvider
      .state('home', {
          url: '/',
          views: {
            "" :{
              templateUrl: 'app/containers/homeView.html'
            }
          }
      })
      .state('login', {
          url:'/login',
          controller: 'loginCtrl as lvm',
          templateUrl: 'app/containers/login/loginView.html'
      })

      .state('register', {
          url: "/register",
          controller: 'registerCtrl as rvm',
          templateUrl: 'app/containers/register/registerView.html'
      })
      .state('home.chatform', {
            url: "chatform",
          views: {
            "":{
                controller:'chatCtrl as cvm',
              templateUrl: 'app/components/chatform/chatformView.html'
            }
          }
      })
      .state('home.dashboard', {
            url: "/signin",
          // controllers:'dashboardCtrl',
          views: {
            "":{
              templateUrl: 'app/containers/signin/signinView.html'
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
