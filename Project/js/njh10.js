$(function(){
    var obj = [{
        "area":"서울"
    },{
        "area":"부산"
    },{
        "area":"전주"
    }]
    
    $(obj).each(function(i,o){
        window.alert(i+":",o);
        console.log(i+":",o);
        console.table(i+":",o);
    });
    
    console.log("=======The end1========");
    
    $.each($("#menu2 li"), function(i,o) {
        window.alert(i+":",o);
        console.log(i+":",o);
        console.table(i+":",o);
    });
    
    console.log("=======The end2========");
    
    $.each($("#menu2 li"), function(i) {
        window.alert(i+":",$(this));
        console.log(i+":",$(this));
        console.table(i+":",$(this));
    });

    
    var a = 10;
    var b = 20;
    
    document.write("<h2>");
    document.write("a=10, b=20");
    document.write("<hr />");
    document.write(a+=b);
    document.write("<hr />");
    document.write(a-=b);
    document.write("<hr />");
    document.write(a*=b);
    

            
});