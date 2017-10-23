app.service('authentication', authentication);

function authentication($window,$http) {
    var getToken = function () {
        return $window.localStorage['chat-token'];
    };
    var saveToken = function (token) {
        $window.localStorage['chat-token'] = token;
    };
    var register = function(user) {
        return $http.post('/api/register', user)
            .then(function successCallback(data){
                saveToken(data.data.token);
            });
    };
    var login = function (user) {
        return $http.post('/api/login', user)
            .then(function successCallback(data) {
                saveToken(data.data.token);
            });
    };
    var logout = function() {
        $window.localStorage.removeItem('chat-token');
    };
    var isLoggedIn = function () {
        var token = getToken();
        if (token) {
            var payload = JSON.parse($window.atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    };
    var currentUser = function () {
        if (isLoggedIn()) {
            var token = getToken();
            var payload = JSON.parse($window.atob(token.split('.')[1]));
            return {
                email: payload.email,
                name: payload.name,
                conversations: payload.conversations
            };
        }
    };
    return {
        login: login,
        logout: logout,
        register: register,
        isLoggedIn: isLoggedIn,
        currentUser: currentUser
    }
}
