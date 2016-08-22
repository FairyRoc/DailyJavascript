var jQuery = (function() {
    var jQuery = function(selector, context) {
        return  jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
        init: function(selector, context) {
            return this
        },
        push: function() {
            console.log("hello i am push")
        }
    };
    jQuery.fn.init.prototype = jQuery.fn;
    return jQuery
}());
