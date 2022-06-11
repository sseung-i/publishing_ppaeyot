$(function() {

    //상단 네비메뉴
   
    $(".sub_cover, .sub").hide();


    $(".sub_menu>li").mouseover(function() {
        $(".sub").stop().slideDown(500);
        $(".sub_cover").stop().slideDown(500);
        $(".ad",this).addClass("sub_click");
    });

    $(".sub_menu>li").mouseout(function() {
        $(".sub").stop().slideUp(500);
        $(".sub_cover").stop().slideUp(500);
        $(".ad",this).removeClass("sub_click");
    });

    $(".sub>li").mouseover(function() {
        $(".subad",this).addClass("sub_over");
    });

    $(".sub>li").mouseout(function() {
        $(".subad",this).removeClass("sub_over");
    });


});