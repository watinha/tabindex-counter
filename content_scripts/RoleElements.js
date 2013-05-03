window.RoleElements = (function () {
    var get_number,
        has_role;

    get_number = function () {
        //var all_nodes = document.getElementsByTagName("*"),
        //    tabindexed = [];
        //for (var i = 0; i < all_nodes.length; i++) {
        //    if (all_nodes[i].nodeType == 1 && all_nodes[i].tabIndex >= 0)
        //        tabindexed.push(all_nodes[i]);
        //};

        //return tabindexed.length;
    };

    has_role = function (dom_element) {
        if (dom_element.nodeType == 1 && dom_element.getAttribute("role"))
            return true;
        return false;
    };

    return {
        get_number: get_number,
        has_role: has_role
    };
}());

