$(document).ready(function(){

    $('.menu').click(function() {
        $('.menu_content_area').css("opacity","1");
        $('.menu_content_area').css("visibility","visible");
        $('.menu_content_area').addClass('top_header_mobile')});        
    $('.menu_close').click(function() {
        $('.menu_content_area').css("opacity","0");
        $('.menu_content_area').css("visibility","hidden")
        $('.menu_content_area').removeClass('top_header_mobile')});
    $('.menu').hover(function(){
        $('.menu_bar_top').css('top','23px');
        $('.menu_bar_bottom').css('top','13px');
        },function(){
            $('.menu_bar_top').css('top','13px');
            $('.menu_bar_bottom').css('top','23px')});

    });

