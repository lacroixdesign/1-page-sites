// Resize certain elements to nearly fill screen on resize
$(window).on("resize", function(event) {
  $("[data-resize]").each(function() {
    $this = $(this);
    var threshold    = $this.data("resize");
    var currentWidth = $(window).width();

    var height = (currentWidth >= threshold) ? $(window).height() - 10 : "";
    $this.css("min-height", height);
  });
});

// Trigger first resize
jQuery(function() {
  $(window).trigger("resize");
});
