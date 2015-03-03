angular.module('eLibraryApp').directive('ownedElement', function() {
	return {
		restrict: 'A',
		templateUrl: '/listelements/ownedelement/ownedelement.html',
//		template: '<div class="row">' +
//						'<div class="col-md-1 vcenter">{{questionnaire.id}}</div>' +
//						'<div class="col-md-2 vcenter">{{questionnaire.title}}</div>' +
//						'<div class="col-md-5 vcenter">{{questionnaire.description}}</div>' +
//						'<div class="vcenter">' +
//						    '<button href="#" class="btn-link" ng-click="ctrl.show(questionnaire.id)">' +
//							    '<span class="glyphicon glyphicon-zoom-in"></span>' +
//						    '</button>' +
//							'<button href="#" class="btn-link" ng-click="ctrl.remove(questionnaire.id)">' +
//								'<span class="glyphicon glyphicon-remove"></span>' +
//							'</button>' +
//							'<button href="#" class="btn-link" ng-click="ctrl.edit(questionnaire.id)">' +
//							     '<span class="glyphicon glyphicon-edit"></span>' +
//						    '</button>' +
//						'</div>' +
//			     '</div>',
        link: function(scope, elem, attrs) {
        		elem.bind('mouseover', function() {
        			elem.css('background-color', '#F5F5F5');
        		});
        		elem.bind('mouseout', function() {
        			elem.css('background-color', 'white');
        		});
        }
	};
});
