$(function () {
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
    const content = "Hello. \n I'm Lee Seung Ho"
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
        }, 2000);
    }
    setInterval(typing, 70);
    setInterval(typing2, 30)

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