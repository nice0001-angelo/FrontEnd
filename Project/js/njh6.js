var userName = prompt("당신의 영문이름은?", "");

var upperName = userName.toUpperCase();
document.write(upperName + "<br />");

var userNum = prompt("당신의 연락처는?", "");
var result = userNum.substring(0, userNum.length - 4) + "****";
document.write(result + "<br />");

var userEmail = prompt("당신의 이메일은","");
var arrUrl = [".co.kr",".com",".net","or.kr","go.kr"];

var check1 = false;
var check2 = false;

if(userEmail.indexOf("@") > 0){check1=true};

for(var i; i < arrUrl.length; i++){
    if(userEmail.indexOf(arrUrl[i])>0) {
        check2 = true;
    }
}

if (check1 && check2){
    document.write(userEmail);
}else {
    alert("이메일 형식이 잘못되었습니다");
}

window.open("winpopup.html","pop1","width=300, height=400, left=300, top=50");