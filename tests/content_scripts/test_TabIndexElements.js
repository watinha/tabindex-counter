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

        (function () {
            var result;
            self.test.comment("Testing is_tabindexed should return true if the " +
                              " of HTML Element is focusable");
            result = self.evaluate(function () {
                var result = (TabIndexElements.is_tabindexed(document.querySelector(".blue")));
                return result;
            });
            self.test.assert(result, "the blue element should be identified as interactive");
        }());

        (function () {
            var result;
            self.test.comment("Testing is_tabindexed should return false if the " +
                              " of HTML Element is not focusable");
            result = self.evaluate(function () {
                var result = (TabIndexElements.is_tabindexed(document.querySelector(".yellow")));
                return result;
            });
            self.test.assert( ! result, "the yellow should be identified as not interactive");
        }());
    });

    casper.run(function () {
        this.test.done(3);
    });
}(casper));
