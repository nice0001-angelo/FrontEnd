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

    console.log("=======The end3========");
    
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
    
    $(function(){
        var arr1 = [{
            "area":"서울",
            "name":"무대리"
        }, {
            "area":"부산",
            "name":"홍대리"
        }, {
            "area":"대전",
            "name":"박사장"
        }, {
            "area":"서울",
            "name":"빅마마"
        }]          
        
        var arr2 = $.map(arr1,function(a,b){
            if(a.area == "서울"){
                window.alert(a);
                return a;
            }
        });
        
        console.log(arr2);
        console.log("============The End4============");
        
        
        
     });















