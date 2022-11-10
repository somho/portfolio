$(function () {
    //SECTION
    var mHtml = $('html');
    var page = 1;

    mHtml.animate({scrollTop : 0},10);

    $(window).on("wheel", function(e) {
        if(mHtml.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
            if(page == 5) return;
            page++;
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
            page--;
        }
        var posTop =(page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop});
    })

    // NAV
    var menu = $('.nav > li');
    var contents = $('#wrap > div');

    $('.nav> li').click(function (event) {
        event.preventDefault();
        var tg = $(this);
        var i = tg.index();

        var section = $('#wrap > div').eq(i);
        var tt = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tt });
    });

    $('.nav> li').on({
        mouseover: function () {
            $(this).find('a').addClass('on');
        },
        mouseout: function () {
            $('.nav>li').find('a').removeClass('on');
        }

    });

    // M_TEXT
    const content = "Hello.\n It's Seung Ho \n PORTFOLIO"
    const content2 = "UX Designer & Front End Developer."
    const text = document.querySelector('.text');
    const text2 = document.querySelector('.text2');
    let i = 0;
    let j = 0;

    function typing() {
        if (i < content.length) {
            let txt = content.charAt(i);
            text.innerHTML += txt === "\n" ? "<br/>" : txt;
            i++;
        }
    }

    function typing2() {
        setTimeout(function () {
            if (j < content2.length) {
                let txt2 = content2.charAt(j);
                text2.innerHTML += txt2;
                j++;
            }
        }, 1800);
    }
    setInterval(typing, 50);
    setInterval(typing2, 20)

    // M_PIC
    const pic1 = document.querySelector('.pic1');
    const pic3 = document.querySelector('.pic3');

    pic1.classList.add('on');
    pic3.classList.add('on');
 

    // GRAPH
    new Chart(document.getElementById("pie1"), {
        type: 'doughnut',
        data: {
            // labels: ["HTML", "none"],
            datasets: [{
                backgroundColor: ["#3e95cd"],
                data: [90, 10]
            }]
        }
    });

    new Chart(document.getElementById("pie2"), {
        type: 'doughnut',
        data: {
            // labels: ["HTML", "none"],
            datasets: [{
                backgroundColor: ["#005aa7"],
                data: [80, 20]
            }]
        }
    });

    new Chart(document.getElementById("pie3"), {
        type: 'doughnut',
        data: {
            // labels: ["HTML", "none"],
            datasets: [{
                backgroundColor: ["#0AF781"],
                data: [70, 30]
            }]
        }
    });


    new Chart(document.getElementById("pie4-1"), {
        type: 'doughnut',
        data: {
            // labels: ["HTML", "none"],
            datasets: [{
                backgroundColor: ["#E0021C"],
                data: [70, 30]
            }]
        }
    });

    new Chart(document.getElementById("pie4-2"), {
        type: 'doughnut',
        data: {
            // labels: ["HTML", "none"],
            datasets: [{
                backgroundColor: ["#D30DE0"],
                data: [70, 30]
            }]
        }
    });

    new Chart(document.getElementById("pie4-3"), {
        type: 'doughnut',
        data: {
            // labels: ["HTML", "none"],
            datasets: [{
                backgroundColor: ["#8f94fb"],
                data: [50, 50]
            }]
        }
    });

    new Chart(document.getElementById("pie4-4"), {
        type: 'doughnut',
        data: {
            // labels: ["HTML", "none"],
            datasets: [{
                backgroundColor: ["#re54c8"],
                data: [40, 60]
            }]
        }
    });



    // QUICKMN
    $(window).scroll(
        function () {
            var windowTop = $(window).scrollTop() + 350;
            $("#q_mn").stop().animate({ top: windowTop + "px" }, 300);
        }
    );
});