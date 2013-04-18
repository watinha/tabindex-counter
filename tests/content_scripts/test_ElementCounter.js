(function () {
	var casper = require("casper").create({
			clientScripts: ["content_scripts/ElementCounter.js"]
		});
	casper.start("tests/fixtures/dropdown.html", function () {
		var self = this;
		(function () {
			self.test.comment("Sanity check for tests infra-structure on: dropdown.html");
			self.test.assertTitle("Exemplo menu", "The page title should be correct...");
		}());

		(function () {
			self.test.comment("Testing get_listeners_callees should return the number" +
							  " of calls to the addEventListener method");
			self.test.assertEval(function () {
				return (ElementCounter.get_listeners_callees() == 5);
			}, "there should be 5 calls to the addEventListener function");
		}());

		//(function () {
		//	self.test.comment("Testing get_onevents_elements should return the number" +
		//					  " of ON events attributes in DOM Nodes");
		//	self.test.assertEval(function () {
		//		return (ElementCounter.get_onevents_elements() == 5);
		//	}, "there should be 5 DOM Nodes with onevents set");
		//}());
	});

	casper.run(function () {
		this.test.done(2);
		this.test.renderResults(true);
	});
}());
