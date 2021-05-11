function tercs(){
    var mensaje=" No hay igualdad"
    var nombre = document.getElementById("nomb").value;
    var x1 = Math.trunc(Math.random()*20) + 1;
    var x2 = Math.trunc(Math.random()*20) + 1;
    var x3 = Math.trunc(Math.random()*20) + 1;
    //Amigos
    switch (x1)
    {
        case 1:
            document.getElementById("box1").innerHTML="<img src='dib/f01.jpg'>"
            break;

        case 2:
            document.getElementById("box1").innerHTML="<img src='dib/f02.jpg'>"
            break;

        case 3:
            document.getElementById("box1").innerHTML="<img src='dib/f03.jpg'>"
            break;

        case 4:
            document.getElementById("box1").innerHTML="<img src='dib/f04.jpg'>"
            break;

        case 5:
            document.getElementById("box1").innerHTML="<img src='dib/f05.jpg'>"
            break;
        
    }

   

    switch (x2)
    {
        case 1:
            document.getElementById("box2").innerHTML="<img src='dib/f01.jpg'>"
            break;

        case 2:
            document.getElementById("box2").innerHTML="<img src='dib/f02.jpg'>"
            break;

        case 3:
            document.getElementById("box2").innerHTML="<img src='dib/f03.jpg'>"
            break;

        case 4:
            document.getElementById("box2").innerHTML="<img src='dib/f04.jpg'>"
            break;

        case 5:
            document.getElementById("box2").innerHTML="<img src='dib/f05.jpg'>"
            break;
        
    }



    

    switch (x3)
    {
        case 1:
            document.getElementById("box3").innerHTML="<img src='dib/f01.jpg'>"
            break;

        case 2:
            document.getElementById("box3").innerHTML="<img src='dib/f02.jpg'>"
            break;

        case 3:
            document.getElementById("box3").innerHTML="<img src='dib/f03.jpg'>"
            break;

        case 4:
            document.getElementById("box3").innerHTML="<img src='dib/f04.jpg'>"
            break;

        case 5:
            document.getElementById("box3").innerHTML="<img src='dib/f05.jpg'>"
            break;
        
    }
        
    if((x1==x2)&&(x1==x3))
        mensaje="Tienes Tercias";
    else if ((x1==x2)||(x1==x3))
         mensaje="Genial, Tienes Pares";
    else
        mensaje="No hay igualdad";
    
    document.getElementById("Sal01").innerHTML="Hola "+nombre+" Tus resultados son: ";
    document.getElementById("resul").innerHTML=mensaje;
}