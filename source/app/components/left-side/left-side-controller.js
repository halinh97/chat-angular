app.controller('leftSideCtrl', leftSideCtrl);

function leftSideCtrl($uibModal) {
    var vm = this;
    vm.popupForm = function () {
        console.log('clicked');
        var modalInstance = $uibModal.open({
            templateUrl: 'app/components/newConversationModal/newConversation.view.html',
            controller: 'newConversationCtrl as mvm',
        });
    };
    vm.conversations = [
        {
            userName: "Thuy",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "Bye"
        }, {
            userName: "Nhan",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "G9"
        }, {
            userName: "Thuy",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "Bye"
        }, {
            userName: "Nhan",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "G9"
        }, {
            userName: "Thuy",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "Bye"
        }, {
            userName: "Nhan",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "G9"
        }, {
            userName: "Thuy",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "Bye"
        }, {
            userName: "Nhan",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "G9"
        }, {
            userName: "Thuy",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "Bye"
        }, {
            userName: "Nhan",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "G9"
        }, {
            userName: "Thuy",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "Bye"
        }, {
            userName: "Nhan",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "G9"
        }, {
            userName: "Thuy",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "Bye"
        }, {
            userName: "Nhan",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgU9GP6RHmmVKU5K6u5Fs5K2mgbnQNVqBWE2jrRdcbqPEiREe",
            lastMessage: "G9"
        }];

}