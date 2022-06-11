$(function() {


    //스트레칭의 효과

    $(".over").hide();

    $(".stretching_btn").mouseover(function() {
        $(".over").stop().slideDown("slow");
    });

    $(".stretching_btn").mouseout(function() {
        $(".over").stop().slideUp("slow");
    });

    // like
    
    var i = 0;

    $(".like_click").click(function() {
        var heart = 1;
        
        i = i!=heart ? 1 : 0;

        if(i==1) {
            $(this).html("<img src='images/like_click.png'>");
        };

        if(i==0) {
            $(this).html("<img src='images/like.png'>");
        };
    });




});