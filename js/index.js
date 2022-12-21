$(function () {
    //SECTION
    window.addEventListener("wheel", function (e) {
        e.preventDefault();
    }, { passive: false });

    var mHtml = $('html');
    var page = 1;
    var lastPage = $('.section').length;

    mHtml.animate({ scrollTop: 0 }, 1000);

    $(window).on("wheel", function (e) {
        if (mHtml.is(":animated")) return;
        if (e.originalEvent.deltaY > 0) {
            if (page == lastPage) return;
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

    menu.click(function (event) {
        event.preventDefault();

        let i = $(this).index();
        let section = contents.eq(i);
        let tt = section.offset().top;

        $('html,body').stop().animate({ scrollTop: tt });

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

    $(window).scroll(function () {
        const sct = $(window).scrollTop();
        contents.each(function () {
            let tg = $(this);
            let i = tg.index();
            if (tg.offset().top <= sct) {
                menu.find('a').removeClass('on');
                menu.eq(i - 1).find('a').addClass('on');
            }
        });
    })

    // MAIN
    $(document).ready(function () {
        $(".text").lettering();
    });
    $(document).ready(function () {
        animation();
    }, 1000);

    function animation() {
        var title1 = new TimelineMax();
        title1.staggerFromTo(".text span", 0.5,
            { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
            { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 }, 0.05);
    }

    // PROJECT


    var $play = $('.play'),
        $detail = $('.detail'),
        $movie = $('.movie', $detail),
        $close = $('.close'),
        $preview = $('.preview');

    $('.projects .movie').click(function () {
        $movie.html($(this).html());
        $play.appendTo($movie);

        $preview = $('.preview', this).addClass('active');

        $('.preview', $detail).css({
            top: $preview.position().top,
            left: $preview.position().left,
            width: $preview.width(),
            height: $preview.height()
        }).data({
            top: $preview.position().top,
            left: $preview.position().left,
            width: $preview.width(),
            height: $preview.height()
        })

        $detail.show();

        $('.preview', $detail).delay(10).queue(function (next) {
            $detail.addClass('ready');

            next();
        }).delay(100).queue(function (next) {
            $(this).css({
                top: '-5%',
                left: '-6%',
                width: 266,
                height: 400
            });
            next();
        })
    })


    /*--------------------
    Close
    --------------------*/
    function close() {
        $p = $('.detail .preview');
        $p.css({
            top: $p.data('top'),
            left: $p.data('left'),
            width: $p.data('width'),
            height: $p.data('height'),
        })
        $detail.removeClass('ready').delay(500).queue(function (next) {
            $(this).hide();
            $preview.removeClass('active');
            next();
        });
    }

    $close.click(close);
    $('body').click(function (e) {
        $p = $(e.target).parents();
        if ($p.is('.app')) {
            return false;
        } else {
            close();
        }
    })

    // CONTACT
    $.fn.flip = function (options) {
        var options = $.extend({
            targetClass: '.m-flip_item'
        }, options);

        return this.each(function () {
            console.log(this);
            var $this = $(this),
                $target = $this.find(options.targetClass);

            $this
                .on({
                    'init.flip': function () {
                        var targetFirst_height = $target.eq(0).height();

                        $this
                            .data('height', targetFirst_height)
                            .css({ height: targetFirst_height });
                    },
                    'mouseenter.flip': function () {
                        $target.css({ top: -$this.data('height') + 'px' });
                    },
                    'mouseleave.flip': function () {
                        $target.css({ top: 0 + 'px' });
                    }
                })
                .trigger('init.flip');
        });
    };

    $(function () {
        $('.js-flip').flip();
    });

});

