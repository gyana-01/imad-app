//counter code
var button=document.getElementById('counter');

button.onclick= function(){
    //ctreate a request obj
    var request= new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if( request.readystate===XMLHttpRequest.DONE)
        {
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('counter');
                span.innerHTML=counter.toString();
            }
        }
    };
    //make the request
    request.open('GET','http://gyanaprakashsahu1997.imad.hasura-app.io/counter',true);
    request.send(null);
};