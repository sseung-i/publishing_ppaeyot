$(function() {

    // alert($(document).height());


    // 더보기 클릭

    $(".list>li:nth-child(n+9)").hide();

    var adTopSum = 0;

    $(".plus>button").click(function() {

        var allNum = $(".list>li").length;
        var now = $(".list>li:visible").length;

        now = Math.floor(now/4)*4;
        
        if(now>=allNum) {
            return;
        }
        else {
            $(".list>li").hide();
            $(".list>li:nth-child(-n+"+(now+4)+")").show();
            adTopSum+=1;
        }

        if(now+4>=allNum) {
            $(".plus>button").hide();
        }
        return false
        
    });





    // like

    $(".list>li>div:nth-child(3)>img").click(function() {
        
        var likeimg = $(this).attr("src");

        if(likeimg=="images/like.png") {
            $(this).attr("src","images/like_click.png");
        } else {
            $(this).attr("src","images/like.png");
        };
    });


    // 팝업

    $(".popup_cover").hide();

    $(".list>li>div:nth-child(1)").click(function() {
        $(this).next().next().next().show();
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

});