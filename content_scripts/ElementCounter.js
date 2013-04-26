window.ElementCounter = (function () {
    var get_listeners_callees,
        get_onevents_elements,
        get_tabindex_elements,
        trueAddEventListener,
        elements_with_listeners = [],
        elements_with_onevents = [],
        mouse_events = [
            "click", "mousedown", "mousemove",
            "mouseout", "mouseover", "mouseup"
        ];

    trueAddEventListener = HTMLElement.prototype.addEventListener;
    HTMLElement.prototype.addEventListener = function (type) {
        if (mouse_events.indexOf(type) >= 0)
            elements_with_listeners.push(this);
        trueAddEventListener.apply(this, arguments);
    };

    get_listeners_callees = function () {
        return elements_with_listeners.length;
    };

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
        get_listeners_callees: get_listeners_callees,
        get_onevents_elements: get_onevents_elements,
        get_tabindex_elements: get_tabindex_elements
    };
}());
