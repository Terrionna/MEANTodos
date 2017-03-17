(function(){
  angular.module('MEANTodos') //Getter syntax
    .controller('TodoController', TodoController);

    TodoController.$inject = ['$scope', 'TodoService'];

    function TodoController($scope, TodoService){
        $scope.message = 'I work!';
        $scope.greeting = 'Hello';
        $scope.print = print;

        function print(something){
          TodoService.getAll();
        }
      }
    })()
