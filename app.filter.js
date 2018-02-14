var myapp = angular.module('myapp');
myapp.filter('customName',[function(){
    return function(value){
        return "value from filter is" + value.substr(0,2).toUpperCase() +value.substr(3,4);
    };
}])