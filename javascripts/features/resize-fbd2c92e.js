$(window).on("resize",function(){$("[data-resize]").each(function(){$this=$(this);var i=$this.data("resize"),e=$(window).width(),t=e>=i?$(window).height()-10:"";$this.css("min-height",t)})}),jQuery(function(){$(window).trigger("resize")});