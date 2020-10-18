$(function (){
    let sw = false;
    let nav = $('nav');
    let navHeight = nav.height();
    let menuHeight = $('menu').height();
    $('.fa-bars').click(function (){
        if(sw){
            nav.animate({
                height: navHeight
            }, 500);
            sw = false;
        }else{
            nav.animate({
                height: navHeight + menuHeight
            }, 500);
            sw = true;
        }
    });
    $('a[href^="#"]').click(function(){
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - navHeight
        }, 500);
    });
    $('#slick img').click(function (){
        let newAttr = $(this).attr('src');
        let currImg = $('#show-slide');
        if(newAttr !== currImg.attr('src')){
            currImg.hide(1).attr('src', newAttr).fadeIn(500);
        }
    });
    $('#slick').slick({
        arrows: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: true,
                    verticalSwiping: true
                }
            }
        ]
    });
});