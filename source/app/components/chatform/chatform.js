// var app = angular.module('chatform',[]);
// app.component('chatform',{
//     templateUrl: 'app/components/chatform/chatform.html',
//     controller: chatCtrl,
//     controllerAs: 'chatvm'
// });
angular.module('appChat').controller('chatCtrl', chatCtrl);
function chatCtrl (socketFactory) {
    var socket = socketFactory();
    var vm = this;
    vm.messages = [];
    // vm.currentUser = service.currentUser.name;
    // vm.currentUser = service.getCurrentUser();
    vm.send = function () {
        socket.emit('sendMessage',
            {
                message: vm.message,
                // user: vm.currentUser
            });
        vm.message = "";
        console.log('ok');
    };
    socket.on('newMessage', function (message) {
        vm.messages.push(message);
        console.log(vm.messages);
    })
}