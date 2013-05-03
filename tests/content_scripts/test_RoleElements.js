(function (casper) {
    casper.options.clientScripts = ["content_scripts/RoleElements.js"];
    casper.start("tests/fixtures/dropdown.html", function () {
        var self = this;
        self.test.comment("RoleElements should help identify role structured " +
                          " elements in the DOM tree");

        (function () {
            var result;
            result = self.evaluate(function () {
                var result = (RoleElements.has_role(document.querySelector(".yellow")));
                return result;
            });
            self.test.assert( ! result, "the yellow element should not return as having role attribute");
        }());

        (function () {
            var result;
            result = self.evaluate(function () {
                var result = (RoleElements.has_role(document.querySelector(".green")));
                return result;
            });
            self.test.assert(result, "the green element should return as having role attribute");
        }());

    });

    casper.run(function () {
        this.test.done(2);
    });
}(casper));

