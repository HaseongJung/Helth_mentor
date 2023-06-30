$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['런닝머신','사이클','스텝밀'],
        verticalCentered: false,
        scrollingSpeed: 1000,
        navigation: true,
        slideNavigation: true,
        continuousVertical: false,
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 0.975)',

        onLeave: function(){
            jQuery('.section [data-aos]').removeClass("aos-animate");
        },
        onSlideLeave: function(){
            jQuery('.slide [data-aos]').removeClass("aos-animate");
        },
        afterSlideLoad: function(){
            jQuery('.slide.active [data-aos]').addClass("aos-animate");
        },
        afterLoad: function(){
            jQuery('.section.active [data-aos]').addClass("aos-animate");
        //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
        }
    });
}); 

AOS.init();

$(".hov-anim").mouseover(function() {
    $(this).attr("src", $(this).data("animated"))
    }),
    $(".hov-anim").mouseout(function() {
    $(this).attr("src", $(this).data("static"))
    });