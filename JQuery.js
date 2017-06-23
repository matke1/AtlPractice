//$(document).ready(function(){
   // $(".openMenu").click(function(){
    //    $(".navOver").slideDown(100);
     //   $(".wrapper").slideUp(100);
     //   $('.close').slideDown(100);
     //   $('.dropDownLogo').slideDown(100);
    //    $('.navOverlayFIT').slideDown(100);
   // });
//});
//$(document).ready(function(){
   // $(".close").click(function(){
     //   $('.close').slideUp(300);
    //    $('.dropDownLogo').slideUp(300);
    //    $(".navOver").slideUp(300);
    //    $(".wrapper").slideDown(300);
    //    $('.navOverlayFIT').slideUp(300);
   // });
//});


$(document).ready(function(){
    $(".openMenu").click(function(){
        $(".navOver").slideToggle(400);
        $(".wrapper").css("position","fixed");
    });
});
$(document).ready(function(){
    $(".close").click(function(){
        $(".navOver").slideToggle(400);
        $(".wrapper").css("position","");
    });
});