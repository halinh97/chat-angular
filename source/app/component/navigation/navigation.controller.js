angular
    .module('app')
    .controller('navigationCtrl', navigationCtrl);

function navigationCtrl ($location) {
    var vm = this;
    vm.currentPath = $location.path();
    vm.isLoggedIn = false;
    vm.currentUser = "";
    vm.logout = function(){
        //authentication.logout();
        vm.isLoggedIn =false;
        $location.path('/');
    };
}