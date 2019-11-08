var num = 1;


function gal(direction){
    if(direction){
        if(num==8) return;
        num = num+1;
    }else{
        if(num==1) return;
        num = num-1;
    }

var imgTag = document.getElementById("photo");
imgTag.setAttribute("src", "../images/pic_"+num+".jpg");
}