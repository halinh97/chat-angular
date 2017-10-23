var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.getUser = function (req, res) {
    var name = req.query.name;
    var email = req.query.email;
    console.log(name);
    User.findOne({where: {'name': name, 'email': email}})
        .then(function (user) {
            sendJsonResponse(res, 200, user);

        })
    User.find({email: req.query.email}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
        // .exec(function (err, user) {
        //     if (!user){
        //         sendJsonResponse(res, 404, {"message": "user not found"});
        //         return;
        //     }else{
        //         if (err){
        //             sendJsonResponse(res, 404, err);
        //             return;
        //         }
        //     }
        //     sendJsonResponse(res, 200, user);
        // })
};
// module.exports.createConversation = function (req, res, user) {
//     if (!user) {
//         sendJsonResponse(res, 404, {
//             "message": "you have to login"
//         });
//     } else {
//         user.conversations.push({
//             name: req.body.name,
//             members: req.body.receivers,
//             messages: []
//         });
//         user.save(function (err, user) {
//             var thisConversation;
//             if (err) {
//                 sendJsonResponse(res, 400, err);
//             } else {
//                 thisConversation = user.conversations[user.conversations.length - 1];
//                 sendJsonResponse(res, 201, thisConversation);
//             }
//         });
//     }
// };
// module.exports.deleteConversation = function (req, res) {
//
// };