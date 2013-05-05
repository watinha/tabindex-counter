var casper = require('casper').create({
        //verbose: true,
        //logLevel: "debug"
    }),
    alexas_urls = [];

casper.echo("Fetching Alexa website information");

for (var j = 0; j < 50; j++) {
    alexas_urls.push("http://www.alexa.com/topsites/global;" + j);
}

casper.start().each(alexas_urls, function (casper, link) {
    casper.thenOpen(link, function () {
        var page_websites = this.evaluate(function () {
            var page_websites = [],
                website_elements = document.querySelectorAll(".site-listing span.topsites-label");
            for (var i = 0; i < website_elements.length; i++) {
                page_websites.push(website_elements[i].textContent);
            };
            return page_websites;
        });
        for (var i = 0; i < page_websites.length; i++) {
            this.echo(page_websites[i]);
        };
    });
});


casper.run(function () {
    this.echo("Done.");
    this.exit();
});
