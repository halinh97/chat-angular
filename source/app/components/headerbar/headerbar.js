var app = angular.module('headerbar',[]);

app.component('headerBar', {
    templateUrl: 'app/components/headerbar/headerbar.html',
    controller: headerbarCtrl,
    controllerAs: 'hbvm'
});

function headerbarCtrl (authentication, $location) {
    var vm = this;
    vm.isLoggedIn = authentication.isLoggedIn();
    vm.currentUser = authentication.currentUser();
    vm.logout = function () {
        authentication.logout();
        vm.isLoggedIn = false;
        console.log('ok');
        $location.path('/');
    };
}
