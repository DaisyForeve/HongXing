$(function () {
    // PC导航搜索
    $(".searchOpen").click(function () {
        $(".searchInput").animate({
            width: "205"
        }, 500);
        $(this).css("display", "none");
        $(".searchClose").css("display", "block");
    })
    $(".searchClose").click(function () {
        $(".searchInput").animate({
            width: "0"
        }, 500);
        $(this).css("display", "none");
        $(".searchOpen").css("display", "block");
    })

    //移动端导航栏
    $(".mobileBar").click(function () {
        $(".mobileNav").slideToggle();

    })


    // PC端导航固定在顶部
    var aWidth = $(document).width();
    if(aWidth>1300){
        $(window).scroll(function(){
            var aHeight = $(document).scrollTop();
            if(aHeight>0){
                $(".navTop").css("height","0");
                $(".pcHeader").css("height","55px");
                $(".banner").css("top","55px");
                $(".logo").css("margin-top","10px");
                $(".logo img").css("height","40px");
                $(".logo-name>strong").css("font-size","18px");
                $(".nyBanner").css("top","55px");
                $(".nyMain").css("margin-top","55px");
                if(aHeight>550){
                    $(".banner").css("display","none");
                    $("footer").css("display","block");
                }else{
                    $(".banner").css("display","block");
                    $("footer").css("display","none");

                }
                
            }else{
                $(".navTop").css("height","45px");
                $(".pcHeader").css("height","100px");
                $(".banner").css("top","100px");
                $(".logo").css("margin-top","17px");
                $(".logo img").css("height","57px");
                $(".logo-name>strong").css("font-size","26px");
                $(".nyBanner").css("top","100px");
                $(".nyMain").css("margin-top","100px");
            }
           
        })
    }
    
    // banner图
    var bannerSwiper = new Swiper(".banner", {
        loop: true,
        autoplay: true,
        speed: 2000,
        navigation: {
            nextEl: '.banner .swiper-button-next',
            prevEl: '.banner .swiper-button-prev',
        },
        pagination: {
            el: '.banner .swiper-pagination',
            clickable: true,
        },
    })


    // 首页技术服务
    $(".index-service-pic").eq(0).hover(
        function () {
            $(this).find("img").attr('src', "images/index-achievement1.png")
            $(this).find("img").addClass("tada")
        },
        function () {
            $(this).find("img").attr('src', "images/index-achievement.png")
            $(this).find("img").removeClass("tada");
        }
    )
    $(".index-service-pic").eq(1).hover(
        function () {
            $(this).find("img").attr('src', "images/index-standard1.png")
            $(this).find("img").addClass("tada");
        },
        function () {
            $(this).find("img").attr('src', "images/index-standard.png")
            $(this).find("img").removeClass("tada");
        }
    )
    $(".index-service-pic").eq(2).hover(
        function () {
            $(this).find("img").attr('src', "images/index-direction1.png")
            $(this).find("img").addClass("tada");
        },
        function () {
            $(this).find("img").attr('src', "images/index-direction.png")
            $(this).find("img").removeClass("tada");
        }
    )
    $(".index-service-pic").eq(3).hover(
        function () {
            $(this).find("img").attr('src', "images/index-map1.png")
            $(this).find("img").addClass("tada");
        },
        function () {
            $(this).find("img").attr('src', "images/index-map.png")
            $(this).find("img").removeClass("tada");
        }
    )

    new WOW().init();

    // 产品家族
    $(".proClassSelect").click(function(){
        $(".proClass").slideToggle();
    })

    // 产品分类
    var aLength = $(".proClass a").length;
    for(var i=0;i<aLength;i++){
        $(".proClass a").eq(i).click(function(){
            $("#proNameCin").attr("value",$(this).html());
            $(".proClass").css("display","none");
        })
    }

    // 产品内页
    var aLilength = $(".productsdUl li").length;
    var aUlWidth = ($(".productsdUl li").eq(0).width()+17)*(aLilength+1);
    $(".productsdUl").css("width",aUlWidth);


    var sportLength = $(".productsdUl li").eq(0).width() + 17;
    var index = 0;
    $(".productsdRight").click(runLeft);
    $(".productsdLeft").click(runRight);
    function runLeft(){
        if(index>=aLilength-3){
            index=aLilength-4;
        }
        index++;
        $(".productsdUl").css("left",sportLength*-index);
    }
    function runRight(){
        index--;
        if(index<=0){
            index=0;
        }
        $(".productsdUl").css("left",sportLength*-index);
    }

    for(var i=0;i<aLilength;i++){
        $(".productsdUl li").eq(i).children("img").click(function(){
            var oSrc = $(this).attr("src");
            console.log(oSrc);
            $(".productsdPic").children("img").attr("src",oSrc);
        })
    }


    // footer
    $()
})