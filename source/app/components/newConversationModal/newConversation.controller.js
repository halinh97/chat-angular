app.controller('newConversationCtrl', newConversationCtrl);

function newConversationCtrl($uibModalInstance) {
    var vm = this;
    vm.name = true;
    vm.friends = [
        {
            name: "Thuy",
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe'
        }, {
            name: "Nhan",
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe'
        }, {
            name: "Thang",
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe'
        }, {
            name: "linh",
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe'
        }, {
            name: "son",
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe'
        }, {
            name: "Nam",
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe'
        }
    ];
    vm.receivers = [];
    vm.addReceiver = function (friend) {
        vm.receivers.push(friend.name);
        vm.conversationMember="";
    };
    vm.deleteReceiver = function (receiver) {
        var i = vm.receivers.indexOf(receiver);
        if (i !== -1) {
            vm.receivers.splice(i, 1);
        }
    };
    vm.onSubmit = function () {
        vm.formError = "";
        if (!vm.receivers) {
            vm.formError = "No receiver, try again!";
            return false;
        }
        else {
            if (!vm.conversationName) {
                vm.conversationName = "";
                for (var x in vm.receivers) {
                    vm.conversationName += vm.receivers[x] + " ";
                }

            }
            console.log(vm.conversationName);
            console.log(vm.receivers);
            vm.doCreateConversation(vm.conversationName, vm.receivers);
        }
    };
    vm.doCreateConversation = function () {

    };
    vm.modal = {
        close: function (result){
            $uibModalInstance.close(result);
        },
        cancel: function () {
            $uibModalInstance.dismiss('cancel');
        }
    };
}