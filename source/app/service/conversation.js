// app.service('conversation', conversation);
//
// function conversation($http, authentication) {
//     var getUser = function (name, email) {
//         return $http.get('/api/users?name='+name+'&email='+email);
//     };
//
// //     var createConversation = function (conversation) {
// //         return $http.post('/api/conversations', conversation,
// //             {
// //                 headers: {
// //                     Authorization: 'Bearer ' + authentication.getToken()
// //                 }
// //             }
// //         )
// //     };
//     return {
//         getConversations: getUser
//         // createConversation: createConversation
//     }
//
// }