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
    });
    
    console.log("=======The end1========");
    
    $.each($("#menu2 li"), function(i,o) {
        window.alert(i+":",o);
        console.log(i+":",o);
    });
    
    console.log("=======The end2========");
    
    $.each($("#menu2 li"), function(i) {
        window.alert(i+":",$(this));
        console.log(i+":",$(this));
    });

});