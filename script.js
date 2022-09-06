function LigarDesligar(){
    var imagem = document.getElementById('imagem')

    if(imagem.src.match("acesa")){
        imagem.src = "assets/apagada.png"
        console.log("imagem");
        document.body.style.backgroundColor = "black";
        
    }
    else{
        imagem.src = "assets/acesa.png"
        console.log("imagem");
        document.body.style.backgroundColor = "white";
        
    } 
}