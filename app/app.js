angular.module('makeEditableApp', [])
.directive('makeEditable', function() {
	return {
		//restrict set to 'A' because we are creating a directive that modifies an element's attribute
		restrict: 'A',
		transclude: true,
		templateUrl: 'make-editable.html',
		//setting scope to true ensures a new, separate scope for each instantiation of the directive
		scope: true,
	}
});