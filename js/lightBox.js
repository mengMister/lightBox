/**
 * Created by Amitabha on 2017/11/23.
 */

function lightbox(id){
    var num;
    var last = $("#"+id+" figure").length;
    $("#"+id).append("<div id='lightboxMask'>" +
        "<img id='maskImg' src=''/>" +
        "<img id='btnClose' src='img/close.png'/>" +
        "<img id='btnNext' src='img/toNext.png'/>" +
        "<img id='btnPre' src='img/toPre.png'/>" +
        "</div>");
    // 点击关闭按钮时，隐藏灯箱蒙版
    $("#btnClose").click(function(){
        "use strict";
        $("#lightboxMask").hide();
    })

    $("#"+id+" figure").each(function (index,obj) {
        $(obj).attr("num",index);
        //console.log($(obj).attr("num"));
        $(this).click(function () {
            $("#lightboxMask").show();
            var imgUrl=$(this).find("img").eq(0).attr("src")
            $("#maskImg").attr("src",imgUrl);
            num = $(this).attr("num");
            //console.log(num);
        });
    });

    //上一张
    $("#btnPre").click(function(){
        "use strict";
        num--;
        for(var i=0;i<last;i++){
            var a = $("#"+id+" figure").eq(i).attr("num");
            if(num<0){
                num=0;
            }
            if(a==num){
                $("#lightboxMask").show();
                var b = $("#"+id+" figure").eq(i).find("img").eq(0).attr("src");
                //console.log(b);
                $("#maskImg").attr("src",b);
            }
        }
    })

    //下一张
    $("#btnNext").click(function () {
        num++;
        for(var i =0;i<last;i++){
            var a = $("#"+id+" figure").eq(i).attr("num");
            if(num>last){
                num=last;
            }
            if(a==num){
                $("#lightboxMask").show();
                var b = $("#"+id+" figure").eq(i).find("img").eq(0).attr("src");
                $("#maskImg").attr("src",b);
            }
        }
    })
}




