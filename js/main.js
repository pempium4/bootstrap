$(function (){
    let sw = false;
    let nav = $('nav');
    $('.fa-bars').click(function (){
        if(sw){
            nav.animate({
                height: 92
            }, 500);
            sw = false;
        }else{
            nav.animate({
                height: 264
            }, 500);
            sw = true;
        }
    });

    $(window).resize(function (){
        if(nav.width() > 768){
            nav.animate({
                height: 92
            }, 500);
        }
    })
});