(function (casper) {
    casper.options.clientScripts = ["content_scripts/ElementCounter.js"];
    casper.start("tests/fixtures/dropdown.html", function () {
        var self = this;
        (function () {
            self.test.comment("Sanity check for tests infra-structure on: dropdown.html");
            self.test.assertTitle("Exemplo menu", "The page title should be correct...");
        }());

        (function () {
            self.test.comment("Testing get_onevents_elements should return the number" +
                              " of ON events attributes in DOM Nodes");
            result = self.evaluate(function () {
                var result = (ElementCounter.get_onevents_elements());
                return result;
            });
            self.test.assertEquals(result, 4, "there should be 4 DOM Nodes with onevents set");
        }());

        (function () {
            var result;
            self.test.comment("Testing get_tabindex_elements should return the number" +
                              " of HTML Elements that are focusable");
            result = self.evaluate(function () {
                var result = (ElementCounter.get_tabindex_elements());
                return result;
            });
            self.test.assertEquals(result, 4, "there should be 4 HTML Elements that are focusable ");
        }());
    });

    casper.run(function () {
        this.test.done(3);
    });
}(casper));
