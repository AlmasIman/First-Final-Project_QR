// let myImage = document.querySelector('.katalog-photo-2');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === "katalog-photo-2.png"){
//         myImage.setAttribute('src', "img/katalog-photo-1.png");
//     }
//     else {
//         myImage.setAttribute('src', "img/katalog-photo-2.png");
//     }
// }


const faq = document.querySelectorAll(".faqs .faq-header");

faq.forEach((header,i) => {
    header.addEventListener("click", () => {
        header.nextElementSibling.classList.toggle("active");

        const open = header.querySelector(".open");
        const close = header.querySelector(".close");

        if(header.nextElementSibling.classList.contains("active")){
                open.classList.remove("active");
                close.classList.add("active");
            }else{
                open.classList.add("active");
                close.classList.remove("active");
            }
    });
});
