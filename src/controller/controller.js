app.controller('postgreDbAppController', ['$scope', 'postgreDbAppService', function($scope, postgreDbAppService) {
    $scope.persons = [];
    $scope.person = {};

    $scope.loadPersons = function() {
        postgreDbAppService.findAll().then(function(response) {
            $scope.persons = response.data;
        });
    };

    $scope.loadPerson = function(id) {
        postgreDbAppService.findOne(id).then(function(response) {
          const personData = response.data;
          const dateParts = personData.pes_data_nascimento.split('-');
          const year = dateParts[0];
          let month = dateParts[1];
          let day = dateParts[2];
          month = ('0' + month).slice(-2);
          day = ('0' + day).slice(-2);
          personData.pes_data_nascimento = `${year}-${month}-${day}`;
          $scope.person = personData;
        });
       };

    $scope.savePerson = function() {
        if ($scope.person.id) {
            postgreDbAppService.update($scope.person.id, $scope.person).then(function(response) {
                $scope.loadPersons();
            });
        } else {
            postgreDbAppService.create($scope.person).then(function(response) {
                $scope.loadPersons();
            });
        }
    };

    $scope.deletePerson = function(id) {
        postgreDbAppService.delete(id).then(function(response) {
            $scope.loadPersons();
        });
    };

    $scope.loadProfs = function() {
        postgreDbAppService.findAllProf().then(function(response) {
            $scope.profs = response.data;
        });
     };


    $scope.loadPersons();
    $scope.loadProfs();
 }]);