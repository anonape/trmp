var interval;

function stars() {
    var count = 0;
    var removeCount = -50;
    var maxStars = 50;
    var container = "#mainContainer";
    interval = setInterval(function () {
        count++;
        removeCount++;
        var star = "<span class='star'>45</span>";
        var ww = $(container).width();
        var wh = $(container).height();
        var posx = Math.round(Math.random() * ww) - 20;
        var posy = Math.round(Math.random() * wh) - 20;
        var randomDelay = Math.random() * 10;
        $(star)
            .attr('id', count)
            .css("top", posy + "px")
            .css("left", posx + "px")
            .css("animation-delay", randomDelay + "s")
            .appendTo(container);

        if (removeCount > 0) $("#".concat(removeCount)).remove();        
        if (count == maxStars) count = 0;
        if (removeCount == maxStars) removeCount = 0;

    }, 500);
}

function removeAllStars() {
    document.querySelectorAll('.star').forEach(star => {
        star.remove();
    });
}

$(window).on("orientationchange resize", function (e) {
    clearInterval(interval);
    intervalId = "";
    removeAllStars();
    stars();
});

jQuery(document).ready(function($) {
    stars();
});
