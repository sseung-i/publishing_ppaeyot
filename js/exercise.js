$(function() {



    // 운동 시작 텍스트

    $(".prev").hide();
    $(".text>li").hide();
    $(".text>li:eq(0)").fadeIn("slow");

    var textNow = 0;

    $(".next").click(function() {
        textNow++;
        if(textNow<=4){

            // 텍스트 보여지게

            $(".text>li:eq("+textNow+")").fadeIn("slow");
            $(".text>li:eq("+textNow+")").animate({marginLeft:"0px"},600);

            $(".text>li").not(":eq("+textNow+")").hide();

            // 배경교체
            $(".starter_bg").html("<img src='images/exercise/starter"+textNow+".jpg'>");
        }else{ return }

        if(textNow==1) {
            $(".prev").stop().fadeTo(300,"1")
        }

        if(textNow>=0&&textNow<=3) {
            $(".next").stop().fadeTo(300,"0.3", function() {
                $(".next").stop().fadeTo(300,"1")
            });
        }else if(textNow==4){
            $(".next").stop().fadeOut("slow");
        }
        else{ return }
    });

    $(".prev").click(function() {
        textNow--;
        if(textNow>=0){
            
            // 텍스트 보여지게

            $(".text>li:eq("+textNow+")").fadeIn("slow");
            $(".text>li:eq("+textNow+")").animate({marginLeft:"0px"},600);

            $(".text>li").not(":eq("+textNow+")").hide();

            // 배경교체
            $(".starter_bg").html("<img src='images/exercise/starter"+textNow+".jpg'>");
        }else{ return }

        if(textNow==3) {
            $(".next").stop().fadeTo(300,"1")
        }

        if(textNow>=1&&textNow<=4) {
            $(".prev").stop().fadeTo(300,"0.3", function() {
                $(".prev").stop().fadeTo(300,"1")
            });
        }else if(textNow==0){
            $(".prev").stop().fadeOut("slow");
        }
        else{ return }
    });




    




    // 운동순서

    $(".aa>div>div").hide();

    $(".aa>div").mouseover(function() {
        $(this).children("img").stop().fadeTo(600,"0.5");
        $(this).children("div").stop().fadeIn(600);
    });
    $(".aa>div").mouseout(function() {
        $(this).children("img").stop().fadeTo(600,"1");
        $(this).children("div").stop().fadeOut(600);
    });




    $(window).scroll(function() {
        var scrollTopval = $(this).scrollTop();
        // alert(scrollTopval);
        
        if(scrollTopval>=1770) {
            $(".help_ad>div").fadeIn(3000);
            $(".help_ad>div>p").eq(0).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>p").eq(1).delay(200).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>p").eq(2).delay(400).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>a").delay(600).animate({marginLeft:"-120px"},1000);
        }

    });


});