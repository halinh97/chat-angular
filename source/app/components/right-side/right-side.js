var app = angular.module('right-side',[]);

app.component('rightSide',{
    templateUrl: "app/components/right-side/right-side.html",
    controller: rightSideCtrl,
    controllerAs: 'rightvm'
});

function rightSideCtrl() {
    var vm = this;
    vm.conversationName = 'linh tinh';
    $('.drop').click(function () {
        $('.dropdown-content').toggle();
    });
    vm.conversationAvatar ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe';
    vm.info = [
        {
            infoName: 'total Message',
            infoResult: 1000,
            infoIcon: 'glyphicon glyphicon-envelope'
        },
        {
            infoName: 'total image',
            infoResult: 100,
            infoIcon: 'glyphicon glyphicon-camera'
        },
        {
            infoName: 'total file',
            infoResult: 10,
            infoIcon: 'glyphicon glyphicon-file'
        }
    ];
    vm.members = [
        {
            userName: "Thuy",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
        }, {
            userName: "Nhan",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
        }, {
            userName: "Thuy",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
        }, {
            userName: "Nhan",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
        }, {
            userName: "Thuy",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
        }, {
            userName: "Nhan",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
        }, {
            userName: "Thuy",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
        }, {
            userName: "Nhan",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
        }
    ];
}