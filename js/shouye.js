
$(function(){ 
    $(".btn").click(function(){
    var username = document.getElementById("user").value;  
    var password = document.getElementById("password").value;  
    var fixedUsername = "admin";  
    var fixedPassword = "123456";  


    if (username == fixedUsername && password == fixedPassword) {  
 
      window.location.href = "./主页面/国家重点研发计划项目.html";
   } else {  

      const myElement = document.getElementById('cw');  
      
    // 显示元素  
    cw.style. visibility = 'initial';  
      
    // 设置定时器，在3秒后隐藏元素（3000毫秒 = 3秒）  
    setTimeout(() => {  
      cw.style. visibility = 'hidden';  
    }, 3000);  
    } 
   }) 
  })


  var elementToShow = document.getElementById('yj');  
  var elementToHide = document.getElementById('yj2');  
  var password = document.getElementById('password'); 
  // 为按钮添加点击事件监听器  
   yj.addEventListener('click', function() {  
      // 隐藏一个元素  
      yj.style.visibility = 'hidden';  
      

        
      // 显示另一个元素  
      yj2.style.visibility="initial" 
  });  

  yj2.addEventListener('click', function() {  
    // 隐藏一个元素  
    yj2.style.visibility = 'hidden';  
      
    // 显示另一个元素  
    yj.style.visibility="initial" 
});  

yj.addEventListener('click', function() {  
    if (password.type === 'password') {  
        password.type = 'text';  
      
    } else {  
        password.type = 'password';  
       
    }  
} );

yj2.addEventListener('click', function() {  
    if (password.type === 'text') {  
        password.type = 'password';  
      
    } else {  
        password.type = 'text';  
       
    }  
} );


  
