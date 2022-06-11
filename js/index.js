$(function() {

    //슬라이드

    var ww = $(window).width();
    $(".slide_pre").hide();
    $(".slide_next").hide();


    $(".slide_cover>div").css("width",ww+"px");
    $(".slide_cover>div").not(":eq(0)").css("left",ww+"px");


    //윈도우창 리사이징

    function resizing() {
        $(window).resize(function() {
            ww = $(window).width();
            $(".slide_cover>div").animate({width:ww+"px"},0);
        });
    };

    setInterval(resizing, 1000);


    var clear = setInterval(slide,3000);

    // 마우스 오버시 멈췄다 아웃시 다시시작

    $(".slide_cover").mouseover(function() {
        clearInterval(clear);
    })
    
    $(".slide_cover").mouseout(function() {
        clear = setInterval(slide,3000);
    })






    // 슬라이드 0-1-2-3-0-1-2-3

    var now = 0;
    var num = 3;

    function slide() {
        $(".slide_cover>div").not(":eq("+now+")").css("left",ww+"px");

        now = now == num ? 0 : now+=1;

        $(".slide_cover>div").eq(now-1).animate({left:-ww+"px"},1000);
        $(".slide_cover>div").eq(now).animate({left:"0px"},1000, function() {
            $(".slide_cover>div").not(":eq("+now+")").css("left",ww+"px");
        });
        $(".bullet>li").eq(now).addClass("bullet_hover").animate({width:"70px"},500);
        $(".bullet>li").not(":eq("+now+")").removeClass("bullet_hover").animate({width:"10px"},500);
    };


    // 슬라이드 3-2-1-0-3-2-1-0

    function prevslide() {
        var num = 0;
        $(".slide_cover>div").not(":eq("+now+")").css("left",-ww+"px");

        now = now == num ? 3 : now-=1;

        if(now==3) {
            $(".slide_cover>div").eq(0).animate({left:ww+"px"}, 1000);
        }else{
            $(".slide_cover>div").eq(now+1).animate({left:ww+"px"}, 1000);
        }
        $(".slide_cover>div").eq(now).animate({left:"0px"}, 1000, function() {
            $(".slide_cover>div").not(":eq("+now+")").css("left",-ww+"px");
        });
    };



    $(".slide_pre, .slide_next, .bullet>li").click(function() {
        clearInterval(clear);
    })

    $(".slide_cover, .slide_pre, .slide_next").mouseover(function() {
        $(".slide_pre, .slide_next").stop().fadeIn("slow");
    });

    $(".slide_cover, .slide_pre, .slide_next").mouseout(function() {
        $(".slide_pre, .slide_next").stop().fadeOut("slow");
    });

    //버튼 클릭시 함수 호출

    $(".slide_next").click(function() {
        slide();
    });

    $(".slide_pre").click(function() {
        prevslide();
    });

    //불릿기호 클릭시 이미지 변경

    $(".bullet>li").click(function() {
        var bulletNum = $(this).index();
        if (now==bulletNum) return;
        else {
            $(".slide_cover>div").not(":eq("+now+")").css("left",ww+"px");
            $(".slide_cover>div").eq(now).animate({left:-ww+"px"},1000);
            $(".slide_cover>div").eq(bulletNum).animate({left:"0px"},1000, function() {
                $(".slide_cover>div").not(":eq("+bulletNum+")").css("left",ww+"px");
            });
            $(".bullet>li").removeClass("bullet_hover");
            $(".bullet>li").eq(bulletNum).addClass("bullet_hover").animate({width:"70px"},500);
            $(".bullet>li").not(":eq("+bulletNum+")").removeClass("bullet_hover").animate({width:"10px"},500);
            now = bulletNum
        }
    });



    // 팝업

    $(".popup_cover").hide();

    $(".popup_btn").click(function() {
        $(".popup_cover").show();
    });

    $(".close").click(function() {
        $(".popup_cover").hide();
    });


    $(".pop_prev").hide();

    var i = 0;
    var imgNum = $(".pop_contents>ul>li").length;
    var clickNum = imgNum-1;
    // alert(imgNum);

    $(".pop_next").click(function() {
        i+=1;
        var page = 450*i;

        if(i>=1&&i<=clickNum){
            $(".pop_contents>ul").animate({left:-page+"px"},500);
            $(".pop_prev").fadeIn("slow");
        }
        else {
            return;
        };

        if(i==clickNum){
            $(".pop_next").fadeOut("slow");
        };
    });

    $(".pop_prev").click(function() {
        i-=1;
        var page = 450*i;

        if(i>=0&&i<=clickNum){
            $(".pop_contents>ul").animate({left:-page+"px"},500);
            $(".pop_next").fadeIn("slow");
        }
        else {
            return;
        };
        
        if(i==0) {
            $(".pop_prev").fadeOut("slow");
        };
    });




    //프로덕트

    $(".product_pre").hide();

    function proSlide() {
        var proNow = 0;

        $(".product_next").click(function() {
            proNow+=1;
            var page = 160*proNow;
        
            if(proNow>=1&&proNow<=2){
                $(".product_cover>ul").animate({left:-page+"px"}, 500);
                $(".product_pre").fadeIn("slow");
            }
            else {
                return;
            }
            if(proNow==2){
                $(".product_next").fadeOut("slow");
            }
        });

        $(".product_pre").click(function() {
            proNow-=1;
            var page = 160*proNow;
        
            if(proNow>=0&&proNow<=2){
                $(".product_cover>ul").animate({left:-page+"px"}, 500);
                $(".product_next").fadeIn("slow");
            }
            else {
                return;
            }
            if(proNow==0){
                $(".product_pre").fadeOut("slow");
            }
        });
    }

    // 공지사항

    $(".notice_detail>li").mouseover(function() {
        $(">a>ul>li:first",this).css("color","#d6264e");
    });

    $(".notice_detail>li").mouseout(function() {
        $(">a>ul>li:first",this).css("color","#666");
    });




    proSlide();

    $(".help_ad>div").hide();




//도와주세요 광고

    $(window).scroll(function() {

        var scrollTopval = $(this).scrollTop();

        // alert(scrollTopval);

        if(scrollTopval>=1500) {
            $(".help_ad>div").fadeIn(3000);
            $(".help_ad>div>p").eq(0).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>p").eq(1).delay(200).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>p").eq(2).delay(400).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>a").delay(600).animate({marginLeft:"-120px"},1000);
        }
    });




});