window.OnEventElements = (function () {
    var get_number,
        elements_with_onevents = [],
        supported_events = [
            "onclick", "onmousedown", "onmousemove",
            "onmouseout", "onmouseover", "onmouseup"
        ];

    get_number = function () {
        var all_nodes = document.getElementsByTagName("*");
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

    return {
        get_number: get_number,
    };
}());

