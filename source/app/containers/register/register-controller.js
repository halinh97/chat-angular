angular.module('appChat').controller('registerCtrl', registerCtrl);
function registerCtrl (authentication, $location) {
    var vm = this;
    vm.credentials = {
        name : "",
        email : "",
        password : ""
    };
    vm.onSubmit = function () {
        console.log('ok');
        vm.formError = "";
        if (!vm.credentials.name || !vm.credentials.email || !vm.credentials.password) {
            vm.formError = "All fields required, please try again";
            return false;
        } else {
            vm.doRegister();
        }
    };

    vm.doRegister = function () {
        vm.formError = "";
        authentication
            .register(vm.credentials)
            .then(function errorCallback(err){
                vm.formError = err;
            })
            .then(function(){
                $location.path('/');
            });
    }
}