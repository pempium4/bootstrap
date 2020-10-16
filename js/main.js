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
});