/*var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
       var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
*/

const faq = document.querySelectorAll(".faqs .faq-header");

faq.forEach((header,i) => {
    header.addEventListener("click", () => {
        header.nextElementSibling.classList.toggle("active");

        const open = header.querySelector(".open");
        const close = header.querySelector(".close");

        if(header.nextElementSibling.classList.contains
            ("active")){
                open.classList.remove("active");
                close.classList.add("active");
            }else{
                open.classList.add("active");
                close.classList.remove("active");
            }
    });
});