window.ListenerElements = (function () {
    var get_number,
        trueAddEventListener,
        elements_with_listeners = [],
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

    get_number = function () {
        return elements_with_listeners.length;
    };

    return {
        get_number: get_number
    };
}());
