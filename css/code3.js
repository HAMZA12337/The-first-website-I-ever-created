
var numberphoto=4;
var currentphoto=0;

 function nextPhoto(){
    if(numberphoto==currentphoto){
        currentphoto=1;
        showImage();
        currentphoto++;
    }else{
        currentphoto+=1;
        showImage();
    }
    
 }
        function Startslide(){
            
         mytimer=setInterval(nextPhoto,2000);
        
        }
      
        function showImage(){
           
        
            image.innerHTML='<center><img src="images/'+currentphoto +'.png"</center>';
        }
       