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
            $scope.person = { ...personData, id: personData.pes_id };
            $scope.person.profissao = $scope.profs.find(prof => prof.prof_id === personData.pes_prof_id);
        });
     };

    $scope.formatDate = function (dateString) {
        const date = new Date(dateString);
        const day = ("0" + date.getDate()).slice(-2);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();

        return day + "/" + month + "/" + year;
    };

    $scope.formatDateForInput = function (dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        return year + "-" + month + "-" + day;
    };

    $scope.openModal = function(id) {
        $scope.loadPerson(id);
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
     };

     $scope.closeModal = function() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
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