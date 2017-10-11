app.controller('leftSideCtrl', leftSideCtrl);

function leftSideCtrl($uibModal) {
    var vm = this;
    vm.popupForm = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'source/app/components/newConversationModal/newConversation.view.html',
            controller: 'newConversationCtrl as mvm',
        });

        modalInstance.result.then(function(data){
            vm.data.location.reviews.push(data.data);
        });
    };
    vm.messages = [
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