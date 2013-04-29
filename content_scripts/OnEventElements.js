window.OnEventElements = (function () {
    var get_number,
        get_elements,
        elements_with_onevents = [],
        supported_events = [
            "onclick", "onmousedown", "onmousemove",
            "onmouseout", "onmouseover", "onmouseup"
        ],
        all_nodes = document.getElementsByTagName("*");

    for (var i = 0; i < all_nodes.length; i++) {
        if (all_nodes[i].nodeType == 1) {
            for (var j = 0; j < supported_events.length; j++) {
                if (all_nodes[i][supported_events[j]])
                    elements_with_onevents.push(all_nodes[i][supported_events[j]]);
            };
        }
    };

    get_number = function () {
        return elements_with_onevents.length;
    };

    get_elements = function () {
        return elements_with_onevents;
    };

    return {
        get_number: get_number,
        get_elements: get_elements
    };
}());

