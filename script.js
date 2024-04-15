document.addEventListener('DOMContentLoaded', function() {  
    var changeImageBtn = document.getElementById('changeImageBtn');  
    var myImage = document.getElementById('myImage');  
    
    changeImageBtn.addEventListener('click', function() {  
      myImage.src = '2.jpg'; // 替换为您想要的新图像的路径  
    });  
  });