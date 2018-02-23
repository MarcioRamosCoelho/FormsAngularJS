angularFormsApp.controller("parisCtrl",
    function parisCtrl($scope) {
        //alert('incontroller paris');
        $scope.msg = "I love Paris";
        $scope.CallFunction = function () {
            alert('hi');
        };
});