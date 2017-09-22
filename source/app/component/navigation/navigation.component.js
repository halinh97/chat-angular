angular
    .module('app')
    .directive('navigation', navigation);

function navigation() {
    return {
        restrict: 'EA',
        templateUrl: 'component/navigation/navigation.view.html',
        controller: 'navigationCtrl as navvm'
    };
}