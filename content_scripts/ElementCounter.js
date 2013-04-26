window.ElementCounter = (function () {
    var get_onevents_elements,
        get_tabindex_elements,
        elements_with_onevents = [];

    /*
     * Considering only the mouse events:
     *  onclick ondblclick onmousedown onmousemove
     *  onmouseout onmouseover onmouseup onmouseleave
     */
    get_onevents_elements = function () {
        var all_nodes = document.getElementsByTagName("*"),
            supported_events = [
                "onclick", "onmousedown", "onmousemove",
                "onmouseout", "onmouseover", "onmouseup"
            ];
        elements_with_onevents = [];

        for (var i = 0; i < all_nodes.length; i++) {
            if (all_nodes[i].nodeType == 1) {
                for (var j = 0; j < supported_events.length; j++) {
                    if (all_nodes[i][supported_events[j]])
                        elements_with_onevents.push(all_nodes[i][supported_events[j]]);
                };
            }
        };

        return elements_with_onevents.length;
    };

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
        get_onevents_elements: get_onevents_elements,
        get_tabindex_elements: get_tabindex_elements
    };
}());
