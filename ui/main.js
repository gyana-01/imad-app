var submit=document.getElementById('submit_btn');
submit.onclick=function(){
  var request= new XMLHttprequest();
  request.onreadystatechange=function(){
      if(request.readystate===XMLHttprequest.DONE){
          if(request.status===200)
          {
              alert('logged in sucessfully');
          }
          else if(request.status===403)
          {
              alert('username/password is incorrect');
          }
          else if(request.status===500)
          {
              alert('something wen twrong on server');
          }
      }
  };
  var username=document.getElementById('username');
   var password=document.getElementById('password');
   console.log(username);
   console.log(password);
   request.open('POST','http://gyanaprakashsahu1997.imad.hasura-app.io/login',true);
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({username:username,password:password}));
};