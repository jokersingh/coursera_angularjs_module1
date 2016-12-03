(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.lunchMenu = "";
    $scope.msg ="";
    $scope.msg_class ="";
    $scope.checkIfTooMuch = function(){
      var menu = $scope.lunchMenu ;
      var lunchMenus = findAllMenu(menu);
      if(0 === lunchMenus.length){
        $scope.msg = "Please enter data first"
        $scope.msg_class ="error";
      }else if(0 < lunchMenus.length && lunchMenus.length < 4){
        $scope.msg = "Enjoy!";
        $scope.msg_class ="success";
      }else{
        $scope.msg = "Too much!";
        $scope.msg_class ="success";
      }
    };
    function findAllMenu(string){
      var menus = [];
      if(undefined !== string && '' !== string){
        var lunchMenus = string.split(',');
        for(var i = 0; i < lunchMenus.length ; i++){
          if(undefined !== lunchMenus[i] && '' !== lunchMenus[i].trim()){
            menus.push(lunchMenus[i]);
          }
        }
      }
      return menus;
    }
  };
})();
