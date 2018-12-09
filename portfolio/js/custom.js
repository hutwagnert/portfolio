/* =============================
        Services
==============================*/

$(function () {
    //animate on scroll//
    new WOW().init();
})
/* =============================
        Work
==============================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*========================================================
                        team
=========================================================*/
$(function(){
$("#team-members").owlCarousel({
    items:3,
    autoplay:true,
    smartSpeed:500,
    loop:true,
    autoplayHoverPause: true
});
});
/*========================================================
                        testimonials
=========================================================*/
$(function(){
    $("#customers-testimonials").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause: true
    });
    });

    /*========================================================
                        stats
=========================================================*/
$(function(){
    $('.counter').counterUp({
        delay:10,
        time:3000
    })
});
    /*========================================================
                        on clicks
=========================================================*/
$(document).on("click",'.linkedin', function() {
    window.open('https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile');
     });
     $(document).on("click",'.github', function() {
        window.open('https://github.com/hutwagnert');
         });
         $(document).on("click",'.resumet', function() {
            window.open('https://github.com/hutwagnert');
             });
             function copyToClipboard() {
                var $temp = $("<input>");
                $("body").append($temp);
                $temp.val($('#clickcopy').text()).select();
                document.execCommand("copy");
                $temp.remove();
              }
              $(document).on("click",'.emailcopier', function() {
                copyToClipboard();
                 });

                 $(document).on("click",'.lirisearch', function() {
                    window.open('https://github.com/hutwagnert/liri');
                      });
                    $(document).on("click",'.giphy', function() {
                    window.open('https://hutwagnert.github.io/unit-6/unit-6-giphy/');
                    });
                    $(document).on("click",'.rpg', function() {
                    window.open('https://hutwagnert.github.io/unit-7/');
                     });
                    $(document).on("click",'.project', function() {
                    window.open('https://hutwagnert.github.io/TH-G-TT-WW-group-project-1/');
                     });
                    