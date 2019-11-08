window.alert("외부에서 연것임");


document.write("<h1> 환영합니다.</h1>");
document.write("<h2> 환영하니</h2>");

document.write("<h5>자료형은 문자형, 숫자형, 불린형 이 있습니다.<h5>");
document.write("<h5>문자형은 숫자연산은 가능하지 않고 숫자형만 가능합니다.<h5>");
document.write("<h5>불린형은 참거짓이며 불린의 거짓중에 특징적인은 0은 거짓 입니다. 조건문에서 특히 while에서 많이 쓰이는 형..</h5>");


document.write("<h5> 프론트앤드 개발자는 react.js 또는 vue.js를 할 수 있어야 한다 - 얘들은 프레임웤이다</h5>");
document.write("<h5> node.js를 모르고 react.js vue.js를 하면 사상 누각이다</h5>");
document.write("<h5> node.js를 알려면 ajax/dom/ecma를 할수 있어야 한다</h5>");


for(var i=1; i<=3; i++){
    for(var k=1; k<=2; k++){
        document.write(i+"행"+k+"열","<br />");
    }
    document.write("<br />");
}

/* Object() 내장객체 */
var tv = new Object();
tv.color = "white";
tv.price = 30000;
tv.info = function(){
    document.write("색상은"+this.color+"가격은"+this.price+"<br />");
    document.write("가격은"+this.price+"<br />");
}

document.write("<h1>tv 객체 메서드 호출할께요</h1>");
tv.info();

/* Date()내장 객체 사용 */
var today = new Date();
var nowMonth = today.getMonth();
nowDate = today.getDate();
nowDay = today.getDay();

document.write("<h1>오늘 날짜 정보</h1>");
document.write("현재 월 :" + nowMonth +"<br />");
document.write("현재 일자 :" + nowDate +"<br />");
document.write("현재 요일 :" + nowDay +"<br />");


document.write("<h1>컴퓨터 가위바위 보 맞추기</h1>");

var game = prompt("가위 바위 보 중 선택 하세요?","가위");
var gameNum;
switch(game){
    case "가위":
        gameNum = 1; break;
    case "바위":
        gameNum = 2; break;
    case "보":
        gameNum = 3; break;
    default:alert("잘못 작성했습니다");
        location.reload();
    }
        
    var com = Math.ceil(Math.random()*3);
    document.write("<img src=\"images/math_img_"+com+".jpg\">")
    
    if(gameNum==com) {
        document.write("<img src=\"images/game_1.jpg\">");
    }else {
        document.write("<img src=\"images/game_2.jpg\">");
    }

var arr = [30, "하이", true];

document.write("<h3>배열값 가져오기 방법 1<h3>");
document.write(arr[0]+"<br />");
document.write(arr[1]+"<br />");
document.write(arr[2]+"<br />");

document.write("<h3>배열값 가져오기 방법 2<h3>");
for(var i=0; i < arr.length; i++){
    document.write(arr[i]+"<br />");
}


document.write("<h3>배열값 가져오기 방법 3<h3>");
for(i in arr){
    document.write(arr[i]+"<br />");
}
document.write(arr.join("-")+"<br />");    