(function (casper) {
    casper.options.clientScripts = ["content_scripts/ListenerElements.js"];
    casper.start("tests/fixtures/dropdown.html", function () {
        var self = this;
        self.test.comment("ListenerElements object should identify calls that were made" +
                          " to the addEventListener function of the HTMLElement class");
        (function () {
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

