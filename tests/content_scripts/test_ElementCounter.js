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
            var result;
            self.test.comment("Testing get_listeners_callees should return the number" +
                              " of calls to the addEventListener method");
            result = self.evaluate(function () {
                return (ElementCounter.get_listeners_callees());
            });
            self.test.assertEquals(result, 6, "there should be 6 calls to the addEventListener function");
        }());

        (function () {
            var result;
            self.test.comment("Testing get_onevents_elements should return the number" +
                              " of ON events attributes in DOM Nodes");
            result = self.evaluate(function () {
                var result = (ElementCounter.get_onevents_elements());
                return result;
            });
            self.test.assertEquals(result, 4, "there should be 4 DOM Nodes with onevents set");
        }());
    });

    casper.run(function () {
        this.test.done(3);
        this.test.renderResults(true);
    });
}());
