var casper = require('casper').create({
        clientScripts: [
            "content_scripts/TabIndexElements.js",
            "content_scripts/OnEventElements.js"
        ],
        onPageInitialized: function (page) {
            // It needs to be inserted as soon as the page is initialized.
            page.injectJs("content_scripts/ListenerElements.js");
        }
    }),
    url = casper.cli.args[0];

if ( ! url) {
    casper.echo("You should provide a URL to be evaluated...");
    casper.exit();
}
casper.echo("Checking URL: " + url);

casper.start(url, function () {
    this.echo("Page Title: " + this.evaluate(function () {
        return document.title;
    }));

    this.wait(2000, function () {
        // first statistics
        this.echo("Number of JS Listeners:             " + this.evaluate(function () {
            return ListenerElements.get_number();
        }));
        this.echo("Number of on event functions:       " + this.evaluate(function () {
            return OnEventElements.get_number();
        }));
        this.echo("Number of tabindexed elements:      " + this.evaluate(function () {
            return TabIndexElements.get_number();
        }));

        // measuring how js listeners are set in the tabindex sequence
        this.echo("Percentage of tabindexed listeners: " + this.evaluate(function () {
            var listener_elements = ListenerElements.get_elements(),
                onevent_elements = OnEventElements.get_elements(),
                tabindexed_elements = listener_elements.length + onevent_elements.length;
            for (var i = 0; i < listener_elements.length; i++) {
                if (TabIndexElements.is_tabindexed(listener_elements[i]) ||
                    TabIndexElements.has_role(listener_elements[i]))
                    tabindexed_elements--;
            };
            for (var i = 0; i < onevent_elements.length; i++) {
                if (TabIndexElements.is_tabindexed(onevent_elements[i]) ||
                    TabIndexElements.has_role(onevent_elements[i]))
                    tabindexed_elements--;
            };
            return (tabindexed_elements / (listener_elements.length + onevent_elements.length)) * 100 + "%";
        }));
    });
});

casper.run(function () {
    this.echo("Done.");
    this.exit();
});
