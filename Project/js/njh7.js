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