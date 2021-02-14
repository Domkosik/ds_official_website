//pre-loader: after window is loaded completely 
window.onload = ()=>{
    document.querySelector(".preloader").style.display = "none";
}

//show menu after scroll
const navigation = document.querySelector(".nav");
const menuOnScroll = () => {
    if(document.body.scrollTop > 300) {
        navigation.style.top = 0;
    } else {
        navigation.style.top = -120;
    }
}
document.addEventListener("scroll", menuOnScroll);

// mini menu navigation trigger
const navBtn = document.querySelector(".nav__btn");
const navBar = document.querySelector(".nav__bar");
const navRow = document.querySelector(".nav__row");
navBtn.addEventListener("click", () => {
    navBar.classList.toggle("nav__bar--visibility");
    navRow.classList.toggle("nav__bar--toggle");
    navBtn.classList.toggle("nav__btn--zIndex");
    const bars = '<i class="fas fa-2x fa-bars"></i>';
    const times = '<i class="fas fa-2x fa-times"></i>';
    if (navBtn.innerHTML === bars) {
        navBtn.innerHTML = times;
    } else {
        navBtn.innerHTML = bars;
    }
});

// element animations for higher resolutions 
/*const elementAnimate = () => {
    const item = document.querySelector('.section__animeBackground');
    if(document.body.scrollTop > 320) {
        item.animate([
            { right: -20+"%" },
            { right: 36.15+'%' } //56.15
        ], {
                duration: 2000,
                easing: 'ease-in-out',
                iterations: 1,
                fill: 'forwards'
            });
    }
}
document.addEventListener("scroll", elementAnimate);*/


//smooth scrooling to clicked section 
const menuLink = document.querySelectorAll(".nav__list a");
const heroBtn = document.querySelector(".hero__btn");
const heroBtnLink = document.querySelector(".hero__btn a");
const hero = document.querySelector(".hero");
const navLogo = document.querySelector(".nav__logo");
for (let i=0; i<menuLink.length; i++){
    menuLink[i].addEventListener("click", (e) => {
        e.preventDefault();
        const href = menuLink[i].getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop-110;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });
}
const scrollOnFromHero = (e)=>{
    e.preventDefault();
    const href = heroBtnLink.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth"
    })
}
heroBtn.addEventListener("click", scrollOnFromHero);

//back to top scroll
const backToTop = document.querySelector(".backToTop");
const scrollFunction = () => {
    if(window.scrollY > 1000){
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}
document.addEventListener("scroll", scrollFunction);
backToTop.addEventListener("click", () => {
    document.body.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

//animation on scrool of sections
const bio1 = document.querySelector(".section__photo");
const bio2 = document.querySelector(".section__flexColumn1");
const bio3 = document.querySelector(".section__quotation");
const skills = document.querySelector(".section__flexColumn2");
const fadeInOnScroll = () => {
    if(document.body.scrollTop > 320){
        bio1.style.animation = "fadeInSection 1s ease-out forwards";
        bio2.style.animation = "fadeInSection 1s ease-out forwards";
        bio3.style.animation = "fadeInSection 1s ease-out forwards";
    }
    if (document.body.scrollTop > 1050){
        skills.style.animation = "fadeInSection 1s ease-out forwards";
    }
}
document.addEventListener("scroll", fadeInOnScroll);

//img slider - portfolio
let slides = document.querySelector('.slider__items').children;
const nextSlide = document.querySelector(".right__slide");
const prevSlide = document.querySelector(".left__slide");
const totalSlides = slides.length;
let index = 0;
console.log(slides);
nextSlide.onclick = () => {
    next("next");
    console.log("click");
}
prevSlide.onclick = () => {
    next("prev");
    console.log("click");
}
const next = direction => {
    if(direction == "next"){
        index++;
        if(index == totalSlides){
            index = 0;
        }
    } else
        { if(index == 0){
            index = totalSlides-1;
        } else {
            index--;
        }
    }
for(i=0; i<slides.length; i++){
    slides[i].classList.remove("active");
}
    slides[index].classList.add("active");     
}

//email Validation
const email_name = document.getElementById("email");
const emailValidation = () => {
    const mailFormat = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;
    const email_value = email_name.value;
    if(!email_value.match(mailFormat))
    { 
        email_name.style.borderColor = "#FF0000";
    } else 
    {
        email_name.style.borderColor = "#00AF33";
    }
};
email_name.addEventListener("focusout", emailValidation);

//name Validation 
const form_name = document.getElementById("name");
const nameValidation = () => {
    const nameFormat = /^[a-zA-Z._-\s\u00C6\u00D0\u018E\u018F\u0190\u0194\u0132\u014A\u0152\u1E9E\u00DE\u01F7\u021C\u00E6\u00F0\u01DD\u0259\u025B\u0263\u0133\u014B\u0153\u0138\u017F\u00DF\u00FE\u01BF\u021D\u0104\u0181\u00C7\u0110\u018A\u0118\u0126\u012E\u0198\u0141\u00D8\u01A0\u015E\u0218\u0162\u021A\u0166\u0172\u01AFY\u0328\u01B3\u0105\u0253\u00E7\u0111\u0257\u0119\u0127\u012F\u0199\u0142\u00F8\u01A1\u015F\u0219\u0163\u021B\u0167\u0173\u01B0y\u0328\u01B4\u00C1\u00C0\u00C2\u00C4\u01CD\u0102\u0100\u00C3\u00C5\u01FA\u0104\u00C6\u01FC\u01E2\u0181\u0106\u010A\u0108\u010C\u00C7\u010E\u1E0C\u0110\u018A\u00D0\u00C9\u00C8\u0116\u00CA\u00CB\u011A\u0114\u0112\u0118\u1EB8\u018E\u018F\u0190\u0120\u011C\u01E6\u011E\u0122\u0194\u00E1\u00E0\u00E2\u00E4\u01CE\u0103\u0101\u00E3\u00E5\u01FB\u0105\u00E6\u01FD\u01E3\u0253\u0107\u010B\u0109\u010D\u00E7\u010F\u1E0D\u0111\u0257\u00F0\u00E9\u00E8\u0117\u00EA\u00EB\u011B\u0115\u0113\u0119\u1EB9\u01DD\u0259\u025B\u0121\u011D\u01E7\u011F\u0123\u0263\u0124\u1E24\u0126I\u00CD\u00CC\u0130\u00CE\u00CF\u01CF\u012C\u012A\u0128\u012E\u1ECA\u0132\u0134\u0136\u0198\u0139\u013B\u0141\u013D\u013F\u02BCN\u0143N\u0308\u0147\u00D1\u0145\u014A\u00D3\u00D2\u00D4\u00D6\u01D1\u014E\u014C\u00D5\u0150\u1ECC\u00D8\u01FE\u01A0\u0152\u0125\u1E25\u0127\u0131\u00ED\u00ECi\u00EE\u00EF\u01D0\u012D\u012B\u0129\u012F\u1ECB\u0133\u0135\u0137\u0199\u0138\u013A\u013C\u0142\u013E\u0140\u0149\u0144n\u0308\u0148\u00F1\u0146\u014B\u00F3\u00F2\u00F4\u00F6\u01D2\u014F\u014D\u00F5\u0151\u1ECD\u00F8\u01FF\u01A1\u0153\u0154\u0158\u0156\u015A\u015C\u0160\u015E\u0218\u1E62\u1E9E\u0164\u0162\u1E6C\u0166\u00DE\u00DA\u00D9\u00DB\u00DC\u01D3\u016C\u016A\u0168\u0170\u016E\u0172\u1EE4\u01AF\u1E82\u1E80\u0174\u1E84\u01F7\u00DD\u1EF2\u0176\u0178\u0232\u1EF8\u01B3\u0179\u017B\u017D\u1E92\u0155\u0159\u0157\u017F\u015B\u015D\u0161\u015F\u0219\u1E63\u00DF\u0165\u0163\u1E6D\u0167\u00FE\u00FA\u00F9\u00FB\u00FC\u01D4\u016D\u016B\u0169\u0171\u016F\u0173\u1EE5\u01B0\u1E83\u1E81\u0175\u1E85\u01BF\u00FD\u1EF3\u0177\u00FF\u0233\u1EF9\u01B4\u017A\u017C\u017E\u1E93]+$/;
    const name_value = form_name.value;
    if (!name_value.match(nameFormat)){
        form_name.style.borderColor = "#FF0000"
    } else {
        form_name.style.borderColor = "#00AF33";
    }
};
form_name.addEventListener("focusout", nameValidation);
