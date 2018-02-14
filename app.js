var myapp = angular.module('myapp',[]);
console.log(myapp);

myapp.controller('MyCtrl',['$scope', 'AppService' ,
function($scope, AppService){
    AppService.getStudents().then(function(result){
       
        $scope.students = result;
});
    $scope.onclick = function(student){
        $scope.selectedStudent=student;
    };
    
}]);
