function todoCtrl($scope) {

	$scope.tareas = [
		{text:'Aprender AngularJS', hecho:false},
		{text:'Usar GitHub', hecho:false},
	];

	$scope.getTotalTareas = function () {
		return $scope.tareas.length;
	};

	$scope.limpiarTareasCompletas = function () {
		$scope.tareas
	};

	$scope.agregarTarea = function () {
		$scope.tareas.push({text:$scope.nuevaTarea, hecho:false});
		$scope.nuevaTarea = '';
	};
}