$(function () {
    //SECTION
    var mHtml = $('html');
    var page = 1;

    mHtml.animate({ scrollTop: 0 }, 5);

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

    // PROJECT
    let status = "closed";
    const tab = document.querySelector('.in_mn ul li .txt i');
    const slider = document.querySelector('.in_mn ul li .pic .in_txt');
    const tab2 = document.querySelector('.in_mn ul li:nth-child(2) .txt i');
    const slider2 = document.querySelector('.in_mn ul li:nth-child(2) .pic .in_txt');
    const tab3 = document.querySelector('.in_mn ul li:nth-child(3) .txt i');
    const slider3 = document.querySelector('.in_mn ul li:nth-child(3) .pic .in_txt');
    const tab4 = document.querySelector('.in_mn ul li:nth-child(4) .txt i');
    const slider4 = document.querySelector('.in_mn ul li:nth-child(4) .pic .in_txt');

    tab.addEventListener("click", function (e){
          if (status == "closed"){
             status = "open";
             slider.classList.add("on");
            }
            else if (status == "open") {
                status = "closed";
                slider.classList.remove("on");
            }
        })
    
    tab2.addEventListener("click", function (e){
            if (status == "closed"){
               status = "open";
               slider2.classList.add("on");
              }
              else if (status == "open") {
                  status = "closed";
                  slider2.classList.remove("on");
              }
          })

    tab3.addEventListener("click", function (e){
            if (status == "closed"){
               status = "open";
               slider3.classList.add("on");
              }
              else if (status == "open") {
                  status = "closed";
                  slider3.classList.remove("on");
              }
          }) 

    tab4.addEventListener("click", function (e){
        if (status == "closed"){
            status = "open";
            slider4.classList.add("on");
              }
              else if (status == "open") {
                  status = "closed";
                  slider4.classList.remove("on");
              }
          }) 
});
