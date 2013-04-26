(function (casper) {
    casper.options.clientScripts = ["content_scripts/ListenerElements.js"];
    casper.start("tests/fixtures/dropdown.html", function () {
        var self = this;
        (function () {
            self.test.comment("Testing get_number should return the number" +
                              " of calls to the addEventListener method");
            result = self.evaluate(function () {
                return (ListenerElements.get_number());
            });
            self.test.assertEquals(result, 6, "there should be 6 calls to the addEventListener function");
        }());
    });

    casper.run(function () {
        this.test.done(1);
    });
}(casper));

