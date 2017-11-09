var app = angular.module('left-side',[]);

app.component('leftSide',{
    templateUrl: "app/components/left-side/left-side.html",
    controller: leftSideCtrl,
    controllerAs: 'leftvm'
});

function leftSideCtrl(DialogService) {
    var vm = this;
    vm.popupForm = function() {
        console.log('show');
        DialogService.newConversation();
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