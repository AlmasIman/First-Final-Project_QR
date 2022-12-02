let myImage = document.querySelector('.katalog-photo-2');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "katalog-photo-2.png"){
        myImage.setAttribute('src', "img/katalog-photo-1.png");
    }
    else {
        myImage.setAttribute('src', "img/katalog-photo-2.png");
    }
}