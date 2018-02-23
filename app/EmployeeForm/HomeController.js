angularFormsApp.controller('HomeController',
        function HomeController($scope, $location, DataService) {                       
            $scope.showCreateEmployeeForm = function (path) {                
                $location.path('/newEmployeeForm');
            };

            $scope.showUpdateEmployeeForm = function (id) {                            
                $location.path('/updateEmployeeForm/' + id);
            };


        });

