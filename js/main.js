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
});