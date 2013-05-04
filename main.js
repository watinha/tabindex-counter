var casper = require('casper').create({
        clientScripts: [
            "content_scripts/TabIndexElements.js",
            "content_scripts/RoleElements.js",
            "content_scripts/OnEventElements.js"
        ],
        onPageInitialized: function (page) {
            // It needs to be inserted as soon as the page is initialized.
            page.injectJs("content_scripts/ListenerElements.js");
        },
        //verbose: true,
        //logLevel: "debug"
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
        var json_data = {
            listeners_number: this.evaluate(function () {
                return ListenerElements.get_number();
            }),
            onevents_number: this.evaluate(function () {
                return OnEventElements.get_number();
            }),
            tabindexed_number: this.evaluate(function () {
                return TabIndexElements.get_number();
            }),
            roles_number: this.evaluate(function () {
                return RoleElements.get_number();
            }),
            percentage: this.evaluate(function () {
                var listener_elements = ListenerElements.get_elements(),
                    onevent_elements = OnEventElements.get_elements(),
                    tabindexed_elements = 0.0;
                for (var i = 0; i < listener_elements.length; i++) {
                    if (TabIndexElements.is_tabindexed(listener_elements[i]) ||
                        RoleElements.has_role(listener_elements[i]))
                        tabindexed_elements++;
                };
                for (var i = 0; i < onevent_elements.length; i++) {
                    if (TabIndexElements.is_tabindexed(onevent_elements[i]) ||
                        RoleElements.has_role(onevent_elements[i]))
                        tabindexed_elements++;
                };
                return (tabindexed_elements / (listener_elements.length + onevent_elements.length)) * 100 + "%";
            })
        };
        this.echo(
            ["Number of JS Listeners:             " + json_data.listeners_number,
             "Number of on event functions:       " + json_data.onevents_number,
             "Number of tabindexed elements:      " + json_data.tabindexed_number,
             "Number of elements with roles:      " + json_data.roles_number,
             "Percentage of tabindexed listeners: " + json_data.percentage].join("\n"));
    });
});

casper.run(function () {
    this.echo("Done.");
    this.exit();
});
