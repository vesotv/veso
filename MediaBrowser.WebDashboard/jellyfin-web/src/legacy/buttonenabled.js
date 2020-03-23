define(["jQuery"], function($) {
    "use strict";
    $.fn.buttonEnabled = function(enabled) {
        return enabled ? this.attr("disabled", "").removeAttr("disabled") : this.attr("disabled", "disabled")
    }
});