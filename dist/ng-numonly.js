/**!
 * AngularJS ng-numonly directive
 * @author Milos Stanic <milos.stanic@gmail.com>
 * @version 0.1.0
 */

/**
 * Directive ng-numonly will take the input of numbers only. Any other character
 * will not end up neither in model, nor on screen
 * idea from: http://stackoverflow.com/a/14425022/2727080 
 * IMPORTANT NOTE: have to put ng-trim="false" attribute to the html tag
 * because otherwise browser allows input of spaces
 */

(function (){
	'use strict';
	angular.module('ngNumonly', []).directive('ngNumonly', function(){
		return {
			restrict: 'A',   		
			require: 'ngModel',
			link: function(scope, element, attrs, modelCtrl) 
			{     		
				modelCtrl.$parsers.unshift(function (inputValue) {
					if (typeof inputValue != 'undefined')
						var transformedInput = inputValue.replace(/(\D+|\s+)/g, '');
					else 					
						return transformedInput;				
					if (transformedInput!=inputValue) {
						modelCtrl.$setViewValue(transformedInput);					                	
						modelCtrl.$render();					
					}				
					return transformedInput;         
				});			
			}
		};
	});

})();