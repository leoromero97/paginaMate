var i = 0;
var images = [];
var time = 3000;

images[0] = 'img/imagen1.jpg';
images[1] = 'img/imagen.png';
images[2] = 'img/imagen2.jpg';


function changeImages(){
    document.slides.src = images[i];

    if(i < images.length -1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImages()", time);
}

window.onload = changeImages;
