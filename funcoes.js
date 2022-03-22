$(document).ready(function(){ // executar apos pagina carregada
    $(".abrirModal").click(function() { 
        var url = $(this).find("img").attr("src");// url recebe a imagem que sera aberta no modal
        $("#myModal img").attr("src", url);//adiciona imagem na div
        $("#myModal").modal("show");// mostra a imagem com o modal.
      });
})

$(function(){
    $("#footer").load("footer.html")
})