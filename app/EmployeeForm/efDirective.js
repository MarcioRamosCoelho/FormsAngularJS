// 04
angularFormsApp.directive('employeeForm',
    function () {
        return {
            restrict: 'E', //uses this directive as only an element.
            templateUrl: 'app/EmployeeForm/efTemplate.html'
        }
    });