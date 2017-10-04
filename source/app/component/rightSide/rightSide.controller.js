app.controller('rightSideCtrl', rightSideCtrl);

function rightSideCtrl() {
    var vm = this;
    vm.conversationName = 'linh tinh';
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