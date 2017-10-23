var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    // secret: process.env.JWT_SECRET,
    secret: 'thisIsSecret',
    userProperty: 'payload'
});

var ctrlAuth = require('../controllers/authentication');
var ctrlConversation = require('../controllers/conversation');

// router.post('/:userid/conversations', ctrlConversation.createConversation);
// router.delete('/conversations/:conversationid', auth, ctrlConversation.deleteConversation);
router.get('/users', ctrlConversation.getUser);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
