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
app.controller('headerbarCtrl', headerbarCtrl);
app.component('headerBar', {
    templateUrl: 'app/components/headerbar/headerbarView.html',
    controller: 'headerbarCtrl as hbvm'
});
