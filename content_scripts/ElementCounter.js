window.ElementCounter = (function () {
	var get_listeners_callees,
        get_onevents_elements,
        get_tabindex_elements,
		trueAddEventListener,
		elements_with_listeners = [];

	trueAddEventListener = HTMLElement.prototype.addEventListener;
	HTMLElement.prototype.addEventListener = function () {
		elements_with_listeners.push(this);
		trueAddEventListener.apply(this, arguments);
	};

	get_listeners_callees = function () {
		return elements_with_listeners.length;
	};

    return {
        get_listeners_callees: get_listeners_callees,
        get_onevents_elements: get_onevents_elements,
        get_tabindex_elements: get_tabindex_elements
    };
}());
