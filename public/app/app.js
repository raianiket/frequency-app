var app = angular.module('frequencyapp', ['ui.router', 'angularUtils.directives.dirPagination']);
app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
})
app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "templates/home.html"
			})
	}
]);


app.controller('enteringData', function($scope, $http, $state) {
	$scope.number = {};
	$scope.wordslength = {};
	$scope.topnwords = {};
	$scope.pageSize = 5;
	$scope.currentPage = 1;
	$scope.myData = false;
	$scope.getwords = function() {
		var payload = {
			"number": $scope.numbern
		}
		$http.post("/topnwords", payload).success(function(res) {
			$scope.topnwords = res.data;
			$scope.wordslength = res.wordslength;
			$scope.myData = true;
			$scope.number = "";
			$state.go("home");
		});
	};
});