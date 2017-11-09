angular.module('appChat').controller("loginCtrl",loginCtrl);

function loginCtrl (authentication, $location) {
    var vm = this;
    vm.credentials = {
        email: "",
        passwords: ""
    };
    vm.onSubmit = function () {
        vm.formError = "";
        if (!vm.credentials.email || !vm.credentials.password) {
            vm.formError = "All fields required, please try again";
            return false;
        } else {
            vm.doLogin();
        }
    };
    vm.doLogin = function () {
        vm.formError = "";
        authentication
            .login(vm.credentials)
            .then(function(){
                    $location.path('/home');
                },
                function errorCallback(err){
                    vm.formError = "Email or password is incorrect!";
                });
    }
}
