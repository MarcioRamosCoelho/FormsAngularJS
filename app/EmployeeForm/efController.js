// (5)

angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams,  DataService) {
        //alert('efcontroller');
        if ($routeParams.id)
        {
            $scope.employee = DataService.getEmployee($routeParams.id);
        }
        else
        {
            $scope.employee = { id: 0 };
        }
       // $scope.employee = DataService.employee;
        $scope.editableEmployee = angular.copy($scope.employee);

        //below will serve the options of the dropdown list or Select element.
        $scope.departments = [
                "Engineering",
                "Marketing",
                "Finance",
                "Administration"
        ];

        //called by the submit form and the employee object will refer what you have on your form
        //again the submit form may be called by the ng-click() OR ng-submit on the form.
        $scope.submitForm = function () {          
            alert('form submitted');

            if ($scope.editableEmployee.id == 0)
            {
                DataService.insertEmployee($scope.editableEmployee);
            }
            else
            {
                DataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
          //  $window.history.back();
        };

        $scope.cancelForm = function () {
           
            $window.history.back();

        };
    });

