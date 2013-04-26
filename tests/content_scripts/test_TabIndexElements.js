(function (casper) {
    casper.options.clientScripts = ["content_scripts/TabIndexElements.js"];
    casper.start("tests/fixtures/dropdown.html", function () {
        var self = this;

        (function () {
            var result;
            self.test.comment("Testing get_tabindex_elements should return the number" +
                              " of HTML Elements that are focusable");
            result = self.evaluate(function () {
                var result = (TabIndexElements.get_number());
                return result;
            });
            self.test.assertEquals(result, 4, "there should be 4 HTML Elements that are focusable ");
        }());
    });

    casper.run(function () {
        this.test.done(1);
    });
}(casper));
