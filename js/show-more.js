$(document).ready(function(){
    var readmore = $('.content1').html();
    var readmore2 = $('.content2').html();
    var readmore3 = $('.content3').html();
    var readmore4 = $('.content4').html();
    var lessText = readmore.substr(0, 300) + '....'
    var lessText2 = readmore2.substr(0, 300) + '....'
    var lessText3 = readmore3.substr(0, 300) + '....'
    var lessText4 = readmore4.substr(0, 200) + '....'

    if(readmore.length >100){
        $(".content1").html(lessText).append("<a href='#' class ='showMore'>Read more</a> ");
        $(".content2").html(lessText2).append("<a href='#' class ='showMore'>Read more</a> ");
        $(".content3").html(lessText3).append("<a href='#' class ='showMore'>Read more</a> ");
        $(".content4").html(lessText4).append("<a href='#' class ='showMore'>Read more</a> ");
    }
    else{
        $(".content1").html(readmore);
        $(".content2").html(readmore2);
        $(".content3").html(readmore3);
        $(".content4").html(readmore4);
    }

    $("body").on("click", ".showMore", function(event){
        event.preventDefault();
        $(this).parent(".content1").html(readmore).append("<a href='#' class ='showLess' >Read less</a> ").hide().show(800);
        $(this).parent(".content2").html(readmore2).append("<a href='#' class ='showLess' >Read less</a> ").hide().show(800);
        $(this).parent(".content3").html(readmore3).append("<a href='#' class ='showLess' >Read less</a> ").hide().show(800);
        $(this).parent(".content4").html(readmore4).append("<a href='#' class ='showLess' >Read less</a> ").hide().show(800);
        
    });

    $("body").on("click", ".showLess", function(event){
        event.preventDefault();
        $(this).parent(".content1").html(readmore.substr(0, 300) + '....').append("<a href='#' class ='showMore' >Read more</a> ").hide().show(800);
        $(this).parent(".content2").html(readmore2.substr(0, 300) + '....').append("<a href='#' class ='showMore' >Read more</a> ").hide().show(800);
        $(this).parent(".content3").html(readmore3.substr(0, 300) + '....').append("<a href='#' class ='showMore' >Read more</a> ").hide().show(800);
        $(this).parent(".content4").html(readmore4.substr(0, 300) + '....').append("<a href='#' class ='showMore' >Read more</a> ").hide().show(800);
    });
});
