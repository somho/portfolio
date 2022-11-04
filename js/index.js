$(function(){
    // NAV
    var menu = $('.nav > li');
    var contents = $('#wrap > div');  

    $('.nav> li').click(function(event){
        event.preventDefault();
        var tg = $(this);
        var i = tg.index();
                
        var section = $('#wrap > div').eq(i);
        var tt = section.offset().top;
                
        $('html, body').stop().animate({scrollTop:tt});
    });

    $('.nav> li').on({
        mouseover:function(){
            $(this).find('a').addClass('on');
        },
        mouseout:function(){
            $('.nav>li').find('a').removeClass('on');
        }

        
    });

    // M_TEXT
    const content = "Hello. \n I'm Lee Seung Ho"
    const content2 = "UX Designer & Front End Developer."
    const text = document.querySelector('.text');
    const text2 = document.querySelector('.text2');
    let i = 0;
    let j = 0;

    function typing(){
        if (i<content.length) {
            let txt = content.charAt(i);
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
            i++;
        }
    }

    function typing2(){
        setTimeout(function(){
            if (j<content2.length) {
                let txt2 = content2.charAt(j);
                text2.innerHTML += txt2;
                j++;
            }
        }, 2000);
    }
    setInterval(typing, 80);
    setInterval(typing2, 40)


    // QUICKMN
    $(window).scroll(
        function(){
        var	windowTop =$(window).scrollTop()+350;
        $("#q_mn").stop().animate({top:windowTop+ "px" },300);
            }
        );
});