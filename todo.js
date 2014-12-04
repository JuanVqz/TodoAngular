function todoCtrl($scope) {

	$scope.tareas = [
		{text:'Aprender AngularJS', hecho:false},
		{text:'Usar GitHub', hecho:false},
		{text:'Crear App ', hecho:false},
	];

	$scope.getTotalTareas = function () {
		return $scope.tareas.length;
	};

	$scope.limpiarTareaCompleta = function () {
		$scope.tareas = _.filter($scope.tareas, function(tarea){
			return !tarea.hecho;
		})
	};

	$scope.agregarTarea = function () {
		$scope.tareas.push({text:$scope.nuevaTarea, hecho:false});
		$scope.nuevaTarea = '';
	};
}