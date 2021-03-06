

describe('Setting expectations for number of expected calls', {
	before_all: function() {
		jack.env.disableReporting();
	}
	,
	after_all: function() {
		jack.env.enableReporting();
	}
	,
	'Should be able to specify exact number of expected calls as a digit': function() {
		window.globalFunction = function() {}
		
		jack(function(){
			jack.expect("globalFunction").exactly(3);
		});
		
		var report = jack.report("globalFunction");
		value_of(report.expected).should_be(3);
		
		window.globalFunction = null;
	}
	,
	'Should be able to specify never()': function() {
		window.globalFunction = function() {}
		
		jack(function(){
			jack.expect("globalFunction").never();
			globalFunction();
		});
		
		var report = jack.report("globalFunction");
		value_of(report.expected).should_be(0);
		value_of(report.actual).should_be(1);
		
		window.globalFunction = null;
	}
	,
	'Should be able to specify exact number of expected calls with a string': function() {
		window.globalFunction = function() {}
		
		jack(function(){
			jack.expect("globalFunction").exactly("3 times");
		});
		
		var report = jack.report("globalFunction");
		value_of(report.expected).should_be(3);
		
		window.globalFunction = null;
	}
	,
	'Should be able to specify a minimum number of expected calls (Example 1)': function() {
		window.globalFunction = function() {}
		
		jack(function(){
			jack.expect("globalFunction").atLeast("3 times");
			window.globalFunction();
			window.globalFunction();
			window.globalFunction();
			window.globalFunction();
		});
		
		var report = jack.report("globalFunction");
		value_of(report.expected).should_be(3);
		value_of(report.success).should_be_true();
		
		window.globalFunction = null;
	}
	,
	'Should be able to specify a minimum number of expected calls (Example 2)': function() {
		window.globalFunction = function() {}
		
		jack(function(){
			jack.expect("globalFunction").atLeast("3 times");
			window.globalFunction();
			window.globalFunction();
			window.globalFunction();
		});
		
		var report = jack.report("globalFunction");
		value_of(report.expected).should_be(3);
		value_of(report.success).should_be_true();
		
		window.globalFunction = null;
	}
	,
	'Should be able to specify a minimum number of expected calls (Example 3)': function() {
		window.globalFunction = function() {}
		
		jack(function(){
			jack.expect("globalFunction").atLeast("3 times");
			window.globalFunction();
		});
		
		var report = jack.report("globalFunction");
		value_of(report.expected).should_be(3);
		value_of(report.success).should_be_false();
		
		window.globalFunction = null;
	}
	,
	'Should be able to specify a maximum number of expected calls (Example 1)': function() {
		window.globalFunction = function() {}
		
		jack(function(){
			jack.expect("globalFunction").atMost("3 times");
			window.globalFunction();
			window.globalFunction();
			window.globalFunction();
			window.globalFunction();
		});
		
		var report = jack.report("globalFunction");
		value_of(report.expected).should_be(3);
		value_of(report.success).should_be_false();
		
		window.globalFunction = null;
	}
	,
	'Should be able to specify a maximum number of expected calls (Example 2)': function() {
		window.globalFunction = function() {}
		
		jack(function(){
			jack.expect("globalFunction").atMost("3 times");
			window.globalFunction();
			window.globalFunction();
			window.globalFunction();
		});
		
		var report = jack.report("globalFunction");
		value_of(report.expected).should_be(3);
		value_of(report.success).should_be_true();
		
		window.globalFunction = null;
	}
	,
	'Should be able to specify a maximum number of expected calls (Example 3)': function() {
		window.globalFunction = function() {}
		
		jack(function(){
			jack.expect("globalFunction").atMost("3 times");
			window.globalFunction();
			window.globalFunction();
		});
		
		var report = jack.report("globalFunction");
		value_of(report.expected).should_be(3);
		value_of(report.success).should_be_true();
		
		window.globalFunction = null;
	}
});
