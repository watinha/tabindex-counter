(function (casper) {
    casper.options.clientScripts = [
        "content_scripts/TabIndexElements.js",
        "content_scripts/ListenerElements.js",
        "content_scripts/OnEventElements.js"];
    casper.start("tests/fixtures/dropdown.html", function () {
        var self = this;
        self.test.comment("Checking if the application is capable of dealing" +
                          " with different objects talking to one another");
        (function () {
            var result = self.evaluate(function () {
                var elements = (OnEventElements.get_elements()),
                    result = [];
                for (var i = 0; i < elements.length; i++) {
                    result.push(TabIndexElements.is_tabindexed(elements[i]));
                };
                return result;
            });
            self.test.assert(result[0], "there should be only one tabindexed");
            self.test.assert( ! result[1], "1 there should be only one tabindexed");
            self.test.assert( ! result[2], "2 there should be only one tabindexed");
            self.test.assert( ! result[3], "3 there should be only one tabindexed");
        }());

        (function () {
            var result = self.evaluate(function () {
                var elements = (OnEventElements.get_elements()),
                    result = [];
                for (var i = 0; i < elements.length; i++) {
                    result.push(TabIndexElements.has_role(elements[i]));
                };
                return result;
            });
            self.test.assert( ! result[0], "there should be only one with role");
            self.test.assert( ! result[1], "1 there should be only one role");
            self.test.assert( ! result[2], "2 there should be only one role");
            self.test.assert(result[3], "3 there should be only one role");
        }());

    });

    casper.run(function () {
        this.test.done(8);
    });
}(casper));


