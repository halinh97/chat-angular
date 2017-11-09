angular.module('appChat').service('DialogService', DialogUtils);

function DialogUtils(ModalService) {
    let myDialogs = new Object();
    myDialogs.newConversation = function () {
        function ModalController(close) {
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
            vm.conversationInfo = {
                name: vm.conversationName,
                receivers: vm.receivers
            };
            vm.addReceiver = function (friend) {
                vm.receivers.push(friend.name);
                vm.conversationMember = "";
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
                    // vm.doCreateConversation(vm.conversationName, vm.receivers);
                }
            };
            vm.cancel = function () {
                close(null);
            }
        }

        ModalService.showModal({
            templateUrl: 'app/dialog/new-conversation-modal/new-conversation.html',
            controller: ModalController,
            controllerAs: 'newmvm'
        }).then(function(modal) {
            console.log('modal');
            modal.element.modal();
            modal.close.then(function(result) {
            });
        });
    }
    return myDialogs;
}