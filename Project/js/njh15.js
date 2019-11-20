var sum = 0 ;

for(i = 1 ; i <= 10; i++){
    sum =i;
    document.write("<p>["+sum+"]</p>")
};


var sum = 0 ;

for(i = 1 ; i <= 10; i++){
    sum =i;
    document.write(sum)
};



var sum =0;

for(i = 0 ; i <= 10; i++){
    sum = sum+i;
    document.write("<p>1~10까지 sum ="+sum+"</p>")
};



document.write("<hr />")

sum=0;

for(i = 0 ; i <= 100; i++){
    sum = sum+i;
    document.write("<p>1~100까지 sum ="+sum+"</p>")
};



document.write("<hr />")
           
               
a = 0;
while(a < 5) {
    document.write("<p> 뭔지 모르지만 반복하라 5번인듯??</p>")
    a++;
}

 $( function() {
    $( "#sortable" ).sortable();
    $( "+#sortable" ).disableSelection();
  } );

