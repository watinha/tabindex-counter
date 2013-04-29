(function (casper) {
    casper.options.clientScripts = ["content_scripts/TabIndexElements.js"];
    casper.start("tests/fixtures/dropdown.html", function () {
        var self = this;
        self.test.comment("TabIndexElements should help identify interactive" +
                          " elements in the DOM tree");

        (function () {
            var result;
            result = self.evaluate(function () {
                var result = (TabIndexElements.get_number());
                return result;
            });
            self.test.assertEquals(result, 4, "there should be 4 HTML Elements that are focusable ");
        }());

        (function () {
            var result;
            result = self.evaluate(function () {
                var result = (TabIndexElements.is_tabindexed(document.querySelector(".blue")));
                return result;
            });
            self.test.assert(result, "the blue element should be identified as interactive");
        }());

        (function () {
            var result;
            result = self.evaluate(function () {
                var result = (TabIndexElements.is_tabindexed(document.querySelector(".yellow")));
                return result;
            });
            self.test.assert( ! result, "the yellow should be identified as not interactive");
        }());

        (function () {
            var result;
            result = self.evaluate(function () {
                var result = (TabIndexElements.has_role(document.querySelector(".yellow")));
                return result;
            });
            self.test.assert( ! result, "the yellow element should not return as having role attribute");
        }());

        (function () {
            var result;
            result = self.evaluate(function () {
                var result = (TabIndexElements.has_role(document.querySelector(".green")));
                return result;
            });
            self.test.assert(result, "the green element should return as having role attribute");
        }());

    });

    casper.run(function () {
        this.test.done(5);
    });
}(casper));
