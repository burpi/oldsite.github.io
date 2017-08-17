$(function() {

    $("body").scrollspy({
      target: "#navi",
      offset: 80
      });

    $.scrollify({
           section: "#home, #introduction, #portfolio, #feedback, #contactForm",
           offset: -60,
           setHeights: true,
           scrollbars: false,
         });

    $(".gallery").zoomify("reposition", "zoom",{
      duration: 1500,
    });

    $(".scrollflow").ScrollFlow({
      durationOnScroll: 800,
    });

});
