$(function() {
    $(".allproduct>ul>li:nth-child(n+9)").hide();


    $(".plus>button").click(function() {
        var allNum = $(".allproduct>ul>li").length;
        var now = $(".allproduct>ul>li:visible").length;

        now = Math.floor(now/4)*4;

        if(now+4>=allNum) {
            $(".plus>button").hide();
        }

        if(now>=allNum) {
            return;
        }
        else {
            $(".allproduct>ul>li").hide();
            $(".allproduct>ul>li:nth-child(-n+"+(now+4)+")").show();
        }
        return false

        

    });

    
    
    //분류 카테고리 선택
    
    $(".cate_name>ul>li>input[value=all]").next().css("color","#d6264e");
    /* 라디오버튼 보이게하면 전체 라디오는 선택 안되어있음 */


    
    $(".cate_name>ul>li>input").click(function() {
        
        $(".allproduct>ul>li").hide();
        $(".cate_name>ul>li>label").css("color","#666");
        
        if(this.checked) {
            for(i=0; i<=5; i++) {
                if($(".cate_name>ul>li:eq("+i+")>input").is(":checked")==true) {
                    inputVal=$(".cate_name>ul>li:eq("+i+")>input:checked").val();
                    $(".allproduct>ul>li[title="+inputVal+"]").show();
                }
            }
            $(this).next().css("color","#d6264e");
        } else {
            emptyNum = 0;
            for(i=0; i<=5; i++) {
                inputVal = inputVal = $(".cate_name>ul>li:eq("+i+")>input:checked").val();
                if($(".cate_name>ul>li:eq("+i+")>input").is(":checked")==false) {
                    $(".allproduct>ul>li[title="+inputVal+"]").hide();
                    emptyNum++;
                }
                else {
                    $(".allproduct>ul>li[title="+inputVal+"]").show();
                }
            }   
            $(this).next().css("color","#666");
        }

        $(".plus>button").hide();
        
        $(".cate_name>ul>li>input[value=all]").click(function() {
            $(".allproduct>ul>li:nth-child(-n+8)").show();
            $(".plus>button").show();
            $(this).next().css("color","#d6264e");
        })
        
            $(window).scroll(function() {
                var scrollTopval = $(this).scrollTop();
                
                if(scrollTopval>=1000) {
                    $(".help_ad>div").fadeIn(3000);
                    $(".help_ad>div>p").eq(0).animate({marginLeft:"-120px"},1000);
                    $(".help_ad>div>p").eq(1).delay(200).animate({marginLeft:"-120px"},1000);
                    $(".help_ad>div>p").eq(2).delay(400).animate({marginLeft:"-120px"},1000);
                    $(".help_ad>div>a").delay(600).animate({marginLeft:"-120px"},1000);
                }
        
            });
        
    });
    
    
    
    

});