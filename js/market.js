$(function() {


    // 리뷰 롤링  마우스오버시 멈췄다 아웃하면 다시 움직임

    var clear = setInterval(reviewRoll,3000);
    
    $(".review_cover").mouseover(function() {
        clearInterval(clear);
    })
    
    $(".review_cover").mouseout(function() {
        clear = setInterval(reviewRoll,3000);
    })



    function reviewRoll() {
        $(".review>div>ul").animate({left:"-390px"},600, function() {
            $(".review>div>ul>li:first").appendTo(".review>div>ul");
            $(".review>div>ul").css("left","0px");
        });
    }


    // 신상품

    $(".new_prev").hide();
    
    
    function newProduct() {
        var i = 0;
        var imgNum = $(".new_product>ul>li").length;
        var clickNum = imgNum-4;
        // alert(imgNum);
        
        $(".new_next").click(function() {
            i+=1;
            var page = 300*i;

            if(i>=1&&i<=clickNum){
                $(".new_product>ul").animate({left:-page+"px"},500);
                $(".new_prev").fadeIn("slow");
            }
            else {
                return;
            }
            if(i==clickNum) {
                $(".new_next").fadeOut("slow");
            }
        });

        $(".new_prev").click(function() {
            i-=1;
            var page = 300*i;

            if(i>=0&&i<=clickNum){
                $(".new_product>ul").animate({left:-page+"px"},500);
                $(".new_next").fadeIn("slow");
            }
            else {
                return;
            }
            if(i==0) {
                $(".new_prev").fadeOut("slow");
            }
        });
    };

    newProduct();


    //더보기
    $(".popular>ul>li:nth-child(n+5").hide();

    $(".plus>button").click(function() {
        var allNum = $(".popular>ul>li").length;
        var now = $(".popular>ul>li:visible").length;
        // alert(now);

        now = Math.floor(now/4)*4;

        if(now>=allNum){
            return;
        }
        else {
            $(".popular>ul>li").hide();
            $(".popular>ul>li:nth-child(-n+"+(now+4)+")").show();
        }

        if(now+4>=allNum) {
            $(".plus>button").hide();
        }
    })

    // 도와주세요 광고

    var adtop = $(".help_ad").offset().top;
    adtop-=$(window).height();

    $(window).scroll(function() {
        var scrollTopval = $(this).scrollTop();
        if(scrollTopval>=(adtop+200)) {
            $(".help_ad>div").fadeIn(3000);
            $(".help_ad>div>p").eq(0).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>p").eq(1).delay(200).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>p").eq(2).delay(400).animate({marginLeft:"-120px"},1000);
            $(".help_ad>div>a").delay(600).animate({marginLeft:"-120px"},1000);
        }
    });

    adTopval();



});