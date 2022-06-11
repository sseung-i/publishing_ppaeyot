$(function() {

    
    var now = 0;
    var imgNum = 3;
    
    $(".t_cover>div").css("left","0px");
    $(".t_cover>div").not(":eq("+now+")").css("left","650px");
    
    var clear = setInterval(nextRoll,3000);

    function nextRoll() {
        
        now = now==imgNum ? 0 : now+=1;

        $(".t_cover>div").eq(now-1).animate({left:"-650px"},700);
        $(".t_cover>div").eq(now).animate({left:"0px"},700, function() {
            $(".t_cover>div").not(":eq("+now+")").css("left","650px");
        });
        $(".t_bullet>li").eq(now).addClass("nowbullet");
        $(".t_bullet>li").not(":eq("+now+")").removeClass("nowbullet");  
    };
    
    
    // 블릿 클릭

    $(".t_bullet>li").click(function() {
        clearInterval(clear);

        var bulletNum = $(this).index();

        if(bulletNum==now) {
            return;
        }
        else {
            $(".t_cover>div").not(":eq("+now+")").css("left","650px");
            $(".t_cover>div").eq(now-1).animate({left:"-650px"},700);
            $(".t_cover>div").eq(bulletNum).animate({left:"0px"},700, function() {
                $(".t_cover>div").not(":eq("+bulletNum+")").css("left","650px");
            });
            $(".t_bullet>li").removeClass("nowbullet");
            $(".t_bullet>li").eq(bulletNum).addClass("nowbullet");
            $(".t_bullet>li").not(":eq("+bulletNum+")").removeClass("nowbullet");
            now = bulletNum
            // alert(bulletNum);
        };
    });


    // 합계

    function sum() {
        var sum1 = 16000;
        var sum2 = $(".sum2").val();

        $(".result").text(sum1*sum2);
    };

    setInterval(sum);


    $(".addBuy_product>li>a>span").hide();

    $(".addBuy_product>li>a").mouseover(function() {
        $(this).children("img").css("opacity","0.5");
        $(this).children("span").stop().fadeIn();
    });
    $(".addBuy_product>li>a").mouseout(function() {
        $(this).children("img").css("opacity","1");
        $(this).children("span").stop().fadeOut();
    });


    //함께구매한 상품
    
    var addClear = setInterval(addBuyRoll,3000);

    $(".addBuy_cover").mouseover(function() {
        clearInterval(addClear);
    });
    
    $(".addBuy_cover").mouseout(function() {
        addClear = setInterval(addBuyRoll,3000);
    });

    function addBuyRoll() {
        $(".addBuy_product").animate({left:"-230px"}, 800, function() {
            $(".addBuy_product>li:first").appendTo(".addBuy_product");
            $(".addBuy_product").css("left","0px");
        });
    };
    

    

    // 상세정보 토글

    // $(".slide1, .slide2, .slide3").hide();
    $(".pro_slide").click(function() {
        if($(this).next().css("display")=="none"){
            $(this).next().slideDown();
            $("span",this).text("△")
        }
        else {
            $(this).next().slideUp();
            $("span",this).text("▽")
        }


        return false;
    })




    $(".goscroll").hide();

    $(window).scroll(function() {
        var movemenu = $(this).scrollTop();
        var slide1top = 1275;
        var slide2top = 10480;
        var slide3top = 11980;

        // alert(movemenu);

        var num=0;


        for(i=1; i<=3; i++) {
            if($(".slide"+i).css("display")!="none") {
                num++;
            }
        }
        
        if(movemenu>=slide1top) {
            $(".goscroll").show();
            $(".goscroll>ul>li>a").removeClass("tabcolor2");
            $(".goscroll>ul>li:eq(0)>a").addClass("tabcolor2");
        } else {
            $(".goscroll").hide();
        }
        if(movemenu>=slide2top) {
            $(".goscroll>ul>li>a").removeClass("tabcolor2");
            $(".goscroll>ul>li:eq(1)>a").addClass("tabcolor2");
        }

        // 3개 열려있을떄

        if(num==3) {
            if(movemenu>=slide3top) {
                $(".goscroll>ul>li>a").removeClass("tabcolor2");
                $(".goscroll>ul>li:eq(2)>a").addClass("tabcolor2");
            }
        }

        // 2개 열려있을떄

        if(num==2) {
            if(movemenu>=(slide3top-380)) {
                $(".goscroll>ul>li>a").removeClass("tabcolor2");
                $(".goscroll>ul>li:eq(2)>a").addClass("tabcolor2");
            }
        }

        // 1개 열려있을떄

        if(num==1) {
            if(movemenu>=(slide3top-760)) {
                $(".goscroll>ul>li>a").removeClass("tabcolor2");
                $(".goscroll>ul>li:eq(2)>a").addClass("tabcolor2");
            }
        }

         // 0개 열려있을떄

         if(num==0) {
            if(movemenu>=(slide3top-1120)) {
                $(".goscroll>ul>li>a").removeClass("tabcolor2");
                $(".goscroll>ul>li:eq(2)>a").addClass("tabcolor2");
            }
        }







        

    });


    $(window).scroll(function() {
        var scrollTopval = $(this).scrollTop();
        
        if(scrollTopval>=12840) {
            $(".help_ad>div").fadeIn(3000);
            $(".help_ad>div>p").eq(0).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>p").eq(1).delay(200).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>p").eq(2).delay(400).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>a").delay(600).animate({marginLeft:"-120px"},1000);
        }

    });



});