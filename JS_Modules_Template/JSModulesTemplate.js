var budgetController = (function () {

	var ClassA = function (a, b, c) {
		this.a = a;
        this.b = b;
        this.c = c;
	};
		
	ClassA.prototype.funcA = function (totalInc) {
		
	};
	
	var data = {
			collectionA: {
				exp: [],
				inc: []
			},
			collectionA: {
				exp: 0,
				inc: 0
			},
			budget: 0,
			percentageSpent: -1
	};
		
	var normalPrivateFunc = function () {
	
	};
	
	return { 
		publicFunc: function () {
			
		}
	};
})();







var UIController = (function () {
	
	var DOMStrings = {
        inputType: '.add__type'
	};
	
	var normalPrivateFunc = function () {
	
	};
	
	return { 
		publicFunc: function () {
			
		}
	};
})();


var controller = (function (moduleA, moduleB) {
	
	var setupEventListeners = function () {
	
	};
	
	return {
        init: function () {
            moduleA.funcOne();
            moduleB.funcTwo();
            setupEventListeners();
        }
    };
	
})(dataController, UIController);


controller.init();
	
	