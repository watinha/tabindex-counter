(function (casper) {
    casper.options.clientScripts = ["content_scripts/OnEventElements.js"];
    casper.start("tests/fixtures/dropdown.html", function () {
        var self = this;
        (function () {
            self.test.comment("Testing get_number should return the number" +
                              " of ON events attributes in DOM Nodes");
            result = self.evaluate(function () {
                var result = (OnEventElements.get_number());
                return result;
            });
            self.test.assertEquals(result, 4, "there should be 4 DOM Nodes with onevents set");
        }());
    });

    casper.run(function () {
        this.test.done(1);
    });
}(casper));

