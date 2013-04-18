(function () {
	var casper = require("casper").create({
			clientScripts: ["content_scripts/ElementCounter.js"]
		});
	casper.start("tests/fixtures/dropdown.html", function () {
		this.test.comment("Sanity check for tests infra-structure on: dropdown.html");
		this.test.assertTitle("Exemplo menu", "The page title should be correct...");
	});

	casper.run(function () {
		this.test.done(1);
		this.test.renderResults(true);
	});
}());
