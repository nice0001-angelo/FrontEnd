var userName = prompt("당신의 영문이름은","");

var upperName = userName.toUpperCase();
document.write(upperName+"<br />");

var usrNum = prompt("당신의 연락처는","");
var result = userNum.substring(0,userNum.length-4)+"****";
document.write(result+"<br />");