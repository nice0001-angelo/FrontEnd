var color = ["white", "yellow", "aqua", "purple"];

var i = 0;

function changeColor() {
    i++;
    if (i >= color.length) {
        i = 0;
    }

    var bodyTag = document.getElementById("theBody");
    bodyTag.style.backgroundColor = color[i];
}

function myFnc(name,area){
    document.write("안녕하세요"+name+"입니다"+"<br />");
    document.write("사는곳은"+area+"입니다."+"<br />");
}


myFnc("남진현","토론토");

myFnc("노지영","토론토");


var rightId = "nice0001";
var rightPw = "hyun953j";

function login(id,pw){
    if(id == rightId){
        if(pw == rightPw){
            document.write(id+"님 방문을 환영합니다.");
        }else{
            alert("잘못된 비밀번호입니다.");
        }
    }else{
        alert("잘못된 ID입니다.");
    }
}

var userId = prompt("ID를 입력하세요","");
var userPw = prompt("Password를 입력하세요","");

login(userId,userPw);


var num = 1';

function gally(direction){
    if(direction){
        if(num==8) return;
        num = num+1;
    }else {
        if(num == 1) return;
        num = num-1;
    }

    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src","pic_"+num+".jpg");
}