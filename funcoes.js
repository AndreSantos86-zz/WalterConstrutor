function clique(img){
    var modal=document.getElementById('janelaModal');
    var modalImg=document.getElementById("imgModal");
    var btFechar=document.getElementsByClassName("close")[0];

    modal.style.display="block";
    modalImg.src=img.src;
    
    

    btFechar.onclick=function(){
          modal.style.display="none";
    }
}