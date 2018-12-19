$("#sendmail").click(function(){
  $("#form").css("opacity","0") 
  $(".editorial").css("opacity","0")   
  $(".topic").css("opacity","0")     
  $("body").css("background-color","#c64029");  
  $(".sendok").css("opacity","1");
  $(".sendok").css("letter-spacing","5px");
  
  setTimeout(function(){
  $("#form").css("opacity","1") 
  $(".editorial").css("opacity","1")   
  $(".topic").css("opacity","1")     
  $("body").css("background-color","white"); 
  }
             ,2000);

 });