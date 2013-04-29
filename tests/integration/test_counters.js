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
            self.test.assert(result[0], "OnEvent: there should be only one tabindexed");
            self.test.assert( ! result[1], "OnEvent: 1 there should be only one tabindexed");
            self.test.assert( ! result[2], "OnEvent: 2 there should be only one tabindexed");
            self.test.assert( ! result[3], "OnEvent: 3 there should be only one tabindexed");
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
            self.test.assert( ! result[0], "OnEvent: there should be only one tabindexed");
            self.test.assert( ! result[1], "OnEvent: 1 there should be only one tabindexed");
            self.test.assert( ! result[2], "OnEvent: 2 there should be only one tabindexed");
            self.test.assert(result[3], "OnEvent: 3 there should be only one tabindexed");
        }());

        (function () {
            var result = self.evaluate(function () {
                var elements = (ListenerElements.get_elements()),
                    result = [];
                for (var i = 0; i < elements.length; i++) {
                    result.push(TabIndexElements.is_tabindexed(elements[i]));
                };
                return result;
            });
            self.test.assert( ! result[0], "ListenerElements: 0 there should be only one tabindexed");
            self.test.assert( ! result[1], "ListenerElements: 1 there should be only one tabindexed");
            self.test.assert( ! result[2], "ListenerElements: 2 there should be only one tabindexed");
            self.test.assert(result[3], "ListenerElements: 3 there should be only one tabindexed");
            self.test.assert( ! result[4], "ListenerElements: 4 there should be only one tabindexed");
            self.test.assert( ! result[5], "ListenerElements: 5 there should be only one tabindexed");
        }());

        (function () {
            var result = self.evaluate(function () {
                var elements = (ListenerElements.get_elements()),
                    result = [];
                for (var i = 0; i < elements.length; i++) {
                    result.push(TabIndexElements.has_role(elements[i]));
                };
                return result;
            });
            self.test.assert(result[0], "ListenerElements: 0 there should be only one role");
            self.test.assert( ! result[1], "ListenerElements: 1 there should be only one role");
            self.test.assert( ! result[2], "ListenerElements: 2 there should be only one role");
            self.test.assert( ! result[3], "ListenerElements: 3 there should be only one role");
            self.test.assert( ! result[4], "ListenerElements: 4 there should be only one role");
            self.test.assert( ! result[5], "ListenerElements: 5 there should be only one role");
        }());

    });

    casper.run(function () {
        this.test.done(20);
    });
}(casper));


