$(function() {
// 도와주세요 광고

var adtop = $(".help_ad").offset().top;
adtop-=$(window).height();


$(window).scroll(function() {
    var scrollTopval = $(this).scrollTop();
    
    if(scrollTopval>=adtop) {
        $(".help_ad>div").fadeIn(3000);
        $(".help_ad>div>p").eq(0).animate({marginLeft:"-120px"},1000);
        $(".help_ad>div>p").eq(1).delay(200).animate({marginLeft:"-120px"},1000);
        $(".help_ad>div>p").eq(2).delay(400).animate({marginLeft:"-120px"},1000);
        $(".help_ad>div>a").delay(600).animate({marginLeft:"-120px"},1000);
    }

});
});