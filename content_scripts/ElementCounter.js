window.ElementCounter = (function () {
    var get_tabindex_elements,
        elements_with_onevents = [];

    get_tabindex_elements = function () {
        var all_nodes = document.getElementsByTagName("*"),
            tabindexed = [];
        for (var i = 0; i < all_nodes.length; i++) {
            if (all_nodes[i].nodeType == 1 && all_nodes[i].tabIndex >= 0)
                tabindexed.push(all_nodes[i]);
        };

        return tabindexed.length;
    };

    return {
        get_tabindex_elements: get_tabindex_elements
    };
}());
