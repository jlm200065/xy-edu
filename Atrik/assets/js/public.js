
//$(window).scroll(function () {
//    if ($(document).scrollTop() >= 350) {
//        $(".about_title").css({
//            "position": "fixed",
//            "top": "100px",
//            "z-index": "9999",
//            "width": "100%",
//            "background-color": "#f3f4f9",
//            "transition": "all 0.5s ease-in-out"
//        })

        
//    }
//    else {
//        $(".about_title").css({
//            "position": "static"
//        })
//    }
//    if ($(document).scrollTop() > 100) {
//        $(".about_title .about_title_ul li:nth-child(1)").addClass("active5").siblings().removeClass("active5");
//    }
//    if ($(document).scrollTop() > 1100) {
//        $(".about_title .about_title_ul li:nth-child(2)").addClass("active5").siblings().removeClass("active5");
//    }
//    if ($(document).scrollTop() > 1900) {
//        $(".about_title .about_title_ul li:nth-child(3)").addClass("active5").siblings().removeClass("active5");
//    }
//    if ($(document).scrollTop() > 3000) {
//        $(".about_title .about_title_ul li:nth-child(4)").addClass("active5").siblings().removeClass("active5");
//    }
//    if ($(document).scrollTop() > 4200) {
//        $(".about_title .about_title_ul li:nth-child(5)").addClass("active5").siblings().removeClass("active5");
//    }

//})

$('.sixmiddle_ul li').mouseover(function () {
	$(this).find(".ul_img").css('display', 'block');
})
$('.sixmiddle_ul li').mouseleave(function() {
	$(this).find(".ul_img").css('display', 'none');
})

$(".countus_content_top img").click(function() {
	$(".countus_content").animate({
		bottom: "-710px"
	}, 500)
})

$("footer .solution_content_bottom2_content input").click(function() {
	$(".countus_content").animate({
		bottom: "0px"
	}, 500)
})

//$(".countus_content_top img").click(function(){
//					$('.countustan', parent.document).animate({
//								bottom: "-710px"
//							}, 500)
//				})
//$("footer .solution_content_bottom2_content input").click(function(){
//					$('.countustan', parent.document).animate({
//								bottom: "0px"
//							}, 500)
//				})

$(".menu_open").click(function() {
	$(".had_nav").animate({
		'left': '0'
	}, 400);
	$(".hcover").animate({
		'right': '0'
	}, 400);
});
$(".hcover").click(function() {
	$(this).animate({
		'right': '-80%'
	}, 400);
	$(".had_nav").animate({
		'left': '-80%'
	}, 400);
});



//var uuid=121;
//$(".footer_middle_left1 li:nth-of-type(2)").click(function() {
//	uuid=121;
//    location.href = '~/Home/Product_service?' + uuid
//});
//$(".footer_middle_left1 li:nth-of-type(3)").click(function() {
//	uuid=122;
//	location.href = 'Product_service.html?' + uuid
//});
//$(".footer_middle_left1 li:nth-of-type(5)").click(function() {
//	uuid=123;
//	location.href = 'Product_service.html?' + uuid
//});
//$(".footer_middle_left1 li:nth-of-type(4)").click(function() {
//	uuid=124;
//	location.href = 'Product_service.html?' + uuid
//});

//$(".product_top_title input").click(function () {
//    $(".countus_content").animate({
//        bottom: "-710px"
//    }, 500)
//})

$(".product_top_title input").click(function () {
    $(".countus_content").animate({
        bottom: "0px"
    }, 500)
})


//$(".product_content_middle4_content_li_content_right_btn input").click(function () {
//    $(".countus_content").animate({
//        bottom: "-710px"
//    }, 500)
//})

$(".product_content_middle4_content_li_content_right_btn input").click(function () {
    $(".countus_content").animate({
        bottom: "0px"
    }, 500)
})

$(".product_content_middle4_content_li_content_right_btn input").click(function () {
    //$('.zxgm', window.parent.document).animate({
    //    bottom: "150px"
    //    }, 500)
    $('.zxgm_content', window.parent.document).css('display', "block");
})

$(".zxgm_content_top img").click(function () {
    $(".zxgm_content").css('display', "none");
})



var _height = window.innerHeight;//��ȡ��ǰ���ڵĸ߶�
var _width = $("body").width();//��ȡ��ǰ���ڵĿ���
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    
} else {
    //var _height = $("body").height();//��ȡ��ǰ���ڵĸ߶�
    //var _width = $("body").width();//��ȡ��ǰ���ڵĿ���
    
    console.log(_height);
    if (_height > 721 && _height <= 880) {
        console.log("700>");
        $('.twopage .twopage_title a img').css(
            {
                "width": "200px"
            });
        $('.first_title').css(
            {
                "top": "30%"
            });
        $('.zxgm_content_top').css(
            {
                "margin-top": "150px"
            });


        $('.product_Classification').css(
            {
                "bottom": "-36px"
            });


        $('.circle').css(
            {
                "width": "28vw",
                "height": "28vw"
            });
        $('.daqiu').css(
            {
                "width": "28vw",
                "height": "28vw"
            });


        $('.twopage .twopage_title a img').css(
            {
                "width": "23%"
            });



        $('.threecontent_ul li .threecontent_ul_content').css(
            {
                "height": "195px"
            });
        $('.threecontent_ul_content_bottom').css(
            {
                "top": "25px",
                "left": "50px"
            });
        $('.threecontent_ul_content_bottom p').css(
            {
                "margin-top": "10px",
                "line-height": "20px",
                "font-size": "13px"
            });
        $('.threecontent_ul_content_bottom span').css(
            {
                "font-size": "20px",
            });
        $('.threecontent_ul_content_top img').css(
            {
                "width": "25px",
                "height": "25px"
            });
        $('.threecontent_ul_content_top').css(
            {
                "left": "10px",
                "top": "27px",
            });
        $('.fourpage_left_ul_litop').css(
            {
                "height": "220px",
            });
        $('.fourpage_left_top img').css(
            {
                "width": "200px",
            });
        $('.threepage .threetitle img').css(
            {
                "width": "200px",
            });

        $('.fourpage_left_ul li').css(
            {
                "margin-top": "85px"
            });
        $('.threecontent_ul li').css(
            {
                "margin-top": "25px"
            });

        $('.fourpage_right_ul_litop').css(
            {
                "height": "130px",
            });
        $('.fourpage_right_ul li:nth-child(3)').css(
            {
                "margin-top": "30px"
            });
        $('.fourpage_right_ul li:nth-child(4)').css(
            {
                "margin-top": "30px"
            });

        $('.fourpage_right_ul li').css(
            {
                "padding": "15px 15px 15px 15px"
            });
        $('.fourpage_right_ul_libottom_bottom').css(
            {
                "margin-top": "5px"
            });
        $('.fourpage_right_ul_libottom_top').css(
            {
                "margin-top": "5px"
            });

        $('.fivepage .fivetitle img').css(
            {
                "width": "200px",
                "margin-top": "100px"
            });

        $('.abt_one p').css(
            {
                "bottom": "-200px",
            });

        $('.fivelun .swiper-slide img').css(
            {
                "width": "210px"
            });

        $('.fivepage .fivetitle p').css(
            {
                "font-size": "14px",
                "margin-top": "15px"
            });




        $('.sixcontent').css(
            {
                "margin-top": "130px",
            });

        $('.sixtop_left img:nth-of-type(1)').css(
            {
                "width": "200px",
            });
        
        $('.sixtop_left_content p').css(
            {
                "font-size": "13px",
            });


        $('.sixtop_left_content p').css(
            {
                "margin-top": "20px",
            });
        $('.sixtop_left_content p:nth-child(1)').css(
            {
                "margin-top": "40px",
            });
        $('.containeraa').css(
            {
                "height": "300px",
            });
        $('.kuangt img').css(
            {
                "width": "80px",
            });
        $('.kuangt p').css(
            {
                "font-size": "12px",
            });

        $('.ul_img').css(
            {
                "bottom": "50px",
                "left": "-10px",
            });
        $('.sixmiddle_ul li .ljlogo').css(
            {
                "width": "35px",
            });
        $('.sixmiddle_ul li span').css(
            {
                "font-size": "12px",
            });
        $('.sixmiddle_ul li').css(
            {
                "padding-left": "20px",
            });
        $('.sixcontent .sixmiddle').css(
            {
                "margin-top": "30px",
            });

        $('.sixbottom .sixbottom_ul li').css(
            {
                "font-size": "12px",
            });
        $('footer a').css(
            {
                "font-size": "14px",
            });
        $('.footerright a').css(
            {
                "font-size": "12px",
            });
        $('.footerleft span').css(
            {
                "font-size": "12px",
            });




        $('.pro-nav-list .zh').css(
            {
                "font-size": "18px",
                "margin-top": "15px",
            });
        $('.pro-nav-list .ico').css(
            {
                "width": "45px",
            });
        $('.pro-nav-list .cbox p').css(
            {
                "font-size": "14px",
                "margin-bottom": "5px",
            });


        $('.solution_bottom_title p').css(
            {
                "font-size": "30px",
            });

        $('.solution_content_bottom > div').css(
            {
                "padding-top": "40px",
            });
        $('.solution_content_top').css(
            {
                //"height": "99.8vh",
            });
        $('.solution_bottom_content ul li .solution_bottom1_contentul_title_content span').css(
            {
                "font-size": "24px",
            });
        $('.solution_bottom_content ul li .solution_bottom1_contentul_con p').css(
            {
                "font-size": "14px",
                "line-height": "25px",
            });
        $('.solution_bottom_content ul li').css(
            {
                "padding": "30px",
                "min-height": "230px",
            });
        $('.bottom_picture').css(
            {
                "margin-top": "150px",
            });
        $('.swipernum .swiper-slide img').css(
            {
                "width": "450px",
                "height": "150px",
            });
        $('.bottom_picture .videoimg .closevideo').css(
            {
                "width": "25px",
            });

        $('.video_top').css(
            {
                "margin-top": "140px",
                "width": "800px",
                "height": "500px",
            });
        $('.learnmore_content .videoimg').css(
            {
                "right": "12%",
            });


        $('.about_top').css(
            {
                "margin-top": "65px",
            });

        $('.detail_top').css(
            {
                "height": "400px",
            });


        $('.detail_bottom').css(
            {
                "margin-top": "80px",
            });


        $('.detail_content .detail_title').css(
            {
                "font-size": "26px",
                "padding-bottom": "35px",
                "padding-top": "35px",
            });

        $('.case_content_top').css(
            {
                "height": "500px",
            });
        $('.product_content_top').css(
            {
                "height": "500px",
            });



        $('.product_top_title p:nth-of-type(1)').css(
            {
                "font-size": "36px",
            });

        $('.product_top_title').css(
            {
                "top": "200px",
            });


        $('.case_top_title p:nth-of-type(1)').css(
            {
                "font-size": "36px",
            });

        $('.case_top_title').css(
            {
                "top": "200px",
            });

        $('.case_content .case_content_bottom').css(
            {
                "margin-top": "70px",
            });












    }
    if (_height <= 721) {
        console.log("<700>");
        $('.threecontent_ul li .threecontent_ul_content').css(
            {
                "height": "100px",
                "font-size": "200%"
            });
        $('.threecontent_ul_content_top').css(
            {
                "top": "10px"
            });
        $('.threecontent_ul_content_top img').css(
            {
                "top": "10px",
                "width": "12px",
                "height": "12px"
            });

        $('.history_content').css(
            {
                "height": "600px"
            });
        $('.history_bottom_left').css(
            {
                "height": "500px"
            });
        $('.history_bottom_right').css(
            {
                "height": "380px"
            });
        $('.threecontent_ul_content_bottom').css(
            {
                "top": "10px",
                "left": "35px",
                //"height": "10px"
            });
        $('.threecontent_ul_content_bottom span').css(
            {
                "font-size": "11px"
            });
        $('.threecontent_ul_content_bottom p').css(
            {
                "font-size": "9px",
                "line-height": "15px",
            });
        $('.threecontent_ul_content').css(
            {
                "height": "100px"
            });
        $('.threepage .threetitle img').css(
            {
                "width": "150px"
            });
        $('.fourpage_left_top img').css(
            {
                "width": "150px"
            });

        $('.case_Classification').css(
            {
                "bottom": "-40px"
            });

        $('.fourpage_right_ul_litop').css(
            {
                "height": "200px"
            });
        $('header .head').css(
            {
                "height": "70px"
            });
        $('header .header_left .leftlogo ul li').css(
            {
                "height": "70px",
                "line-height": "70px"
            });
        $('.menu_open').css(
            {
                "margin-top": "25px"
            });
        $('.header .header_left .leftlogo ul li img').css(
            {
                "width": "110px",
                "height": "35px"
            });
        $('header .header_middle ul li').css(
            {
                "height": "70px",
                "line-height": "70px"
            });
        $('header .header_middle ul li a').css(
            {
                "font-size": "12px"
            });

        $('header .header_right ul li').css(
            {
                "height": "70px",
                "line-height": "70px"
            });
        $('header .header_right ul li a').css(
            {
                "font-size": "12px"
            });



        $('.mousedown a').css(
            {
                "font-size": "8px",
                "width": "55px",
                "text-align": "center",
            });
        $('.mousedown a img').css(
            {
                "width": "20px",
                "margin-top": "10px",
                "text-align": "center",
            });

        $('.fourpage_right_ul_libottom_top p').css(
            {
                "font-size": "12px",
            });
        $('.fourpage_right_ul_libottom_top').css(
            {
                "margin-top": "5px",
            });
        $('.fourpage_content').css(
            {
                "margin-top": "90px",
            });
        $('.fourpage_right_ul_libottom_bottom span').css(
            {
                "font-size": "10px",
            });
        $('.fourpage_right_ul_libottom_bottom').css(
            {
                "margin-top": "5px",
            });
        $('.fourpage_right_ul_libottom_bottom p').css(
            {
                "font-size": "11px",
            });

        $('.fourpage_right_ul li:nth-child(3)').css(
            {
                "margin-top": "20px",
            });
        $('.fourpage_right_ul li:nth-child(4)').css(
            {
                "margin-top": "20px",
            });

        $('.fivepage .fivetitle img').css(
            {
                "margin-top": "80px",
                "width": "150px"
            });
        $('.fivepage .fivetitle p').css(
            {
                "margin-top": "8px",
                "font-size": "10px"
            });
        $('.fivelun .swiper-slide img').css(
            {
                "width": "200px",
            });


        $('.sixcontent').css(
            {
                "margin-top": "100px",
            });
        $('.sixtop_left img:nth-of-type(1)').css(
            {
                "width": "150px",
            });
        
        $('.sixtop_left_content p').css(
            {
                "font-size": "10px",
            });


        $('.sixtop_left_content p').css(
            {
                "margin-top": "15px",
            });
        $('.sixtop_left_content p:nth-child(1)').css(
            {
                "margin-top": "40px",
            });
        $('.containeraa').css(
            {
                "height": "265px",
            });
        $('.kuangt img').css(
            {
                "width": "150px",
            });
        $('.kuangt p').css(
            {
                "font-size": "12px",
            });

        $('.sixmiddle_ul li .ljlogo').css(
            {
                "width": "28px",
            });
        $('.sixmiddle_ul li span').css(
            {
                "font-size": "12px",
            });
        $('.sixmiddle_ul li').css(
            {
                "padding-left": "10px",
            });
        $('.sixcontent .sixmiddle').css(
            {
                "margin-top": "30px",
            });

        $('.sixbottom .sixbottom_ul li').css(
            {
                "font-size": "9px",
                "margin-left": "10px",
                "padding-right": "10px",
            });
        $('footer a').css(
            {
                "font-size": "14px",
            });
        $('.footerright a').css(
            {
                "font-size": "10px",
            });
        $('.footerleft span').css(
            {
                "font-size": "10px",
            });
        $('footer span').css(
            {
                //"font-size": "10px",
            });
        $('.sixcontent footer').css(
            {
                "margin-top": "7px",
            });
        $('.sixbottom').css(
            {
                "margin-top": "15px",
            });


        $('.sixmiddle_ul li span').css(
            {
                "padding-right": "10px",
                "padding-left": "5px",
            });
        $('.countus_content').css(
            {
                "height": "400px",
            });

        $('.countus_content_top').css(
            {
                "padding-top": "10px",
            });
        $('.countus_content_top').css(
            {
                "height": "40px",
            });
        $('.countus_content_top img').css(
            {
                "right": "35px",
                "width": "30px",
            });
        $('.countus_content_bottom2').css(
            {
                "height": "355px",
            });


        $('.countus_content_bottom2 span').css(
            {
                "font-size": "16px",
            });

        $('.case_content_top').css(
            {
                "height": "350px",
            });
        $('.case_top_title').css(
            {
                "top": "120px",
            });
        $('.case_content_top').css(
            {
                "height": "350px",
            });
        $('.case_content_top').css(
            {
                "height": "350px",
            });

        $('.product_top_title').css(
            {
                "top": "100px",
            });
        $('.product_content_top').css(
            {
                "height": "350px",
            });
        $('.product_Classification').css(
            {
                "bottom": "-70px",
            });
        $('.product_top_title p:nth-of-type(1)').css(
            {
                "font-size": "26px",
            });
        $('footer span').css(
            {
                //"font-size": "12px",
            });
        $('.product_top_title p:nth-of-type(2)').css(
            {
                "font-size": "12px",
                "margin-top": "10px",
            });
        $('.product_top_title input').css(
            {
                "width": "120px",
                "height": "35px",
                "font-size": "12px",
                "margin-top": "15px",
            });


        $('.case_top_title p:nth-of-type(1)').css(
            {
                "font-size": "26px",
            });
        $('.case_top_title p:nth-of-type(2)').css(
            {
                "font-size": "12px",
                "margin-top": "10px",
            });


        $(' .abt_one p').css(
            {
                "bottom": "-200px",
            });
        $(' .threecontent_ul li .threecontent_ul_content').hover(
            {
                "background-size": "cover",
            });

        $('.nav_ul').css(
            {
                "margin-top": "50px",
            });

        $('.product_content_middle4_content_li_content_right_bottom .twopa').css(
            {
                "font-size": "13px",
                "color": "#2d6fee",
            });
        $('.product_content_middle4_content_li_content_right_bottom p').css(
            {
                "font-size": "13px",
                "color": "#2d6fee",
            });

        $('.pro-nav-list .zh').css(
            {
                "font-size": "15px",
                "margin-top": "10px",
            });
        $('.pro-nav-list .ico').css(
            {
                "width": "30px",
            });
        $('.pro-nav-list .en').css(
            {
                "font-size": "9px",
            });

        $('.tbox p:nth-of-type(4) img').css(
            {
                "width": "10px",
            });

        $('.pro-nav-list .cbox p').css(
            {
                "font-size": "11px",
            });

        $('.solution_bottom_title p').css(
            {
                "font-size": "25px",
            });

        $('.solution_content_bottom > div').css(
            {
                "padding-top": "40px",
            });
        $('.solution_content_top').css(
            {
                //"height": "99.8vh",
            });
        $('.solution_bottom_content ul li .solution_bottom1_contentul_title_content span').css(
            {
                "font-size": "20px",
            });
        $('.solution_bottom_content ul li .solution_bottom1_contentul_con p').css(
            {
                "font-size": "12px",
                "line-height": "20px",
            });
        $('.solution_bottom_content ul li').css(
            {
                "padding": "25px",
                "min-height": "200px",
            });
        $('.solution_bottom_content ul li .solution_bottom1_contentul_con p').css(
            {
                "font-size": "12px",
                "line-height": "20px",
            });
        $('.bottom_picture').css(
            {
                "margin-top": "100px",
            });
        $('.swipernum .swiper-slide img').css(
            {
                "width": "600px",
                "height": "300px",
            });
        $('.bottom_picture .videoimg .closevideo').css(
            {
                "width": "25px",
            });

        $('.video_top').css(
            {
                "margin-top": "120px",
                "width": "700px",
                "height": "400px",
            });
        $('.learnmore_content .videoimg').css(
            {
                "right": "12%",
            });
        $('.case_Classification ul li').css(
            {
                "font-size": "12px",
            });

        $('.case_Classification span').css(
            {
                "font-size": "13px",
            });

        $('.case_content_bottom_ul li').css(
            {
                "width": "200px",
            });


        $('.case_content_bottom_li_content_bottom p:nth-of-type(2)').css(
            {
                "font-size": "13px",
            });
        $('.case_content .case_content_bottom').css(
            {
                "margin-top": "70px",
            });
        
        $('.about_title_ul li a').css(
            {
                "font-size": "14px",
            });



        $('.about_content_banner').css(
            {
                "height": "300px",
            });
        $('.about_content_banner .about_content_banner_title').css(
            {
                "padding-top": "120px",
            });

        $('.about_top').css(
            {
                "margin-top": "50px",
            });

        $('.fourpage_right_ul li:nth-child(3)').css(
            {
                "display": "none",
            });
        $('.fourpage_right_ul li:nth-child(4)').css(
            {
                "display": "none",
            });

        
        $('.product_Classification ul li').css(
            {
                "height": "70px",
            });


        $('.product_Classification ul li span').css(
            {
                "font-size": "12px",
            });
        $('.product_Classification ul li p').css(
            {
                "font-size": "10px",
            });
        $('.product_Classification ul li').css(
            {
                "padding-top": "15px",
            });
        $('.product_Classification_ul li a').css(
            {
                "font-size": "8px",
                "margin-top": "2px",
            });

        $('.about_content_banner .about_content_banner_title p:nth-of-type(1)').css(
            {
                "font-size": "30px",
            });
        $('.about_content_banner .about_content_banner_title p:nth-of-type(2)').css(
            {
                "font-size": "14px",
                "margin-top": "10px",
            });
        $('.about_content_banner .about_content_banner_title img').css(
            {
                "width": "50px",
                "margin-top": "20px",
            });
        $('.about_title_ul li').css(
            {
                "height": "60px",
                "line-height": "60px",
            });
        $('.about_title').css(
            {
                "height": "58px",
            });
        $('.about_title_ul').css(
            {
                "text-align": "center",
                "height": "59px",
            });

        $('.about_top_number_ul').css(
            {
                "margin-top": "50px",
            });
        $('.about_top_number_ul li span').css(
            {
                "font-size": "45px",
            });
        $('.history_bottom').css(
            {
                "padding-top": "20px",
            });

        $('.history_bottom_leftbottom_ul li .history_bottom_leftbottom_ul_bottom p').css(
            {
                "font-size": "10px",
            });
        $('.history_bottom_leftbottom_ul li .history_bottom_leftbottom_ul_top span').css(
            {
                "font-size": "12px",
            });



        $('.detail_top').css(
            {
                "height": "350px",
            });


        $('.detail_bottom').css(
            {
                "margin-top": "50px",
            });
        $('.ul_img').css(
            {
                "bottom": "35px",
                "left": "-30px",
            });


        $('.ul_img').css(
            {
                "margin-top": "20%",
            });

        $('.zxgm_content_top').css(
            {
                "margin-top": "70px"
            });
        $('.zxgm').css(
            {
                "width": "240px",
            });

        $('.zxgm_content_top img').css(
            {
                "width": "35px",
            });

        $('.zxgm_content_top img').css(
            {
                "margin-right": "25%",
            });



        $('.twopage .twopage_title a:nth-child(1) img').css(
            {
                "top": "15%",
                "left":"16%"
            });
        $('.twopage .twopage_title a:nth-child(2) img').css(
            {
                "top": "15%",
                "right": "8%"
            });
        $('.twopage .twopage_title a:nth-child(3) img').css(
            {
                "top": "75%",
                "left": "16%"
            });
        $('.twopage .twopage_title a:nth-child(4) img').css(
            {
                "top": "75%",
                "right": "8%"
            });


        $('.circle').css(
            {
                "width": "26vw",
                "height": "26vw",
                "left":"37%"
            });
        $('.daqiu').css(
            {
                "width": "26vw",
                "height": "26vw"
            });


        $('.detail_content .detail_title').css(
            {
                "font-size": "24px",
                "padding-bottom": "35px",
                "padding-top": "35px",
            });
        $('.detail_bottom_content p').css(
            {
                "font-size": "15px",
            });
        //$('.footer_middle ul li a').css("font-size", "10px");



    }
}