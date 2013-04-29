(function (casper) {
    casper.options.clientScripts = ["content_scripts/OnEventElements.js"];
    casper.start("tests/fixtures/dropdown.html", function () {
        var self = this;
        self.test.comment("OnEventElements object should help identify which" +
                          " DOM elements have on event attached to it");

        (function () {
            var result = self.evaluate(function () {
                var elements = (OnEventElements.get_elements());
                return elements;
            });
            self.test.assertEquals(result.length, 4, "there should be a method that returns" +
                                                     " an array with all dom elements");
        }());

        (function () {
            var result = self.evaluate(function () {
                var result = (OnEventElements.get_number());
                return result;
            });
            self.test.assertEquals(result, 4, "there should be 4 DOM Nodes with onevents set");
        }());
    });

    casper.run(function () {
        this.test.done(2);
    });
}(casper));

