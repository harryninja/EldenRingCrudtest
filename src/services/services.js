app.factory('postgreDbAppService', ['$http', function($http) {
    return {
        create: function(person) {
            return $http.post('/api/persons', person);
        },
        findAll: function() {
            return $http.get('/api/persons');
        },
        findOne: function(id) {
            return $http.get('/api/persons/' + id);
        },
        update: function(id, person) {
            return $http.put('/api/persons/' + id, person);
        },
        delete: function(id) {
            return $http.delete('/api/persons/' + id);
        },
        findAllProf: function() {
            return $http.get('/api/persons/allProf');
         }
    };
 }]);