$(function () {
    //SECTION
    var mHtml = $('html');
    var page = 1;

    mHtml.animate({ scrollTop: 0 }, 10);

    $(window).on("wheel", function (e) {
        if (mHtml.is(":animated")) return;
        if (e.originalEvent.deltaY > 0) {
            if (page == 4) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        }
        var posTop = (page - 1) * $(window).height();
        mHtml.animate({ scrollTop: posTop });
    });

     // NAV
     $('.nav li > a').eq(0).addClass('on');
     const menu = $('.nav>li');
     const contents = $('.section');
 
     menu.click(function(event){
         event.preventDefault();
 
         let i = $(this).index();
         let section = contents.eq(i);   
         let tt = section.offset().top;  
 
         $('html,body').stop().animate({scrollTop: tt}); 
 
         $('.nav li > a').removeClass('on');
         $(this).addClass('on');
     });
 
     $('.nav> li').on({
         mouseover: function () {
             $(this).find('a').addClass('on');
         },
         mouseout: function () {
             $('.nav>li').find('a').removeClass('on');
         }
     });

     $(window).scroll(function(){
        const sct = $(window).scrollTop(); 
        contents.each(function(){   
            let tg = $(this);
            let i = tg.index();
            if (tg.offset().top <= sct){   
                menu.find('a').removeClass('on');
                menu.eq(i-1).find('a').addClass('on');
            }
        });
    })

    // MAIN
    $(document).ready(function() {
        $(".text").lettering();
      });
    $(document).ready(function() {
        animation();
    }, 1000);

    function animation() {
        var title1 = new TimelineMax();
        title1.staggerFromTo(".text span", 0.5, 
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
      }
});