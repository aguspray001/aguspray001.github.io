const heroSection = document.querySelector("#home");
const experienceSection = document.querySelector("#experience");
const profileSection = document.querySelector("#profile");
const buttonScrollToTop = document.querySelector(".btn__scroll");
const profileSectionPosition = profileSection;

const scrollToTop = () => {
    scrollTo(0,0)
}

buttonScrollToTop.addEventListener("click", function(){
    scrollToTop();
})

window.addEventListener("load", function(){
    heroSection.classList.add("fade-in");
})

window.addEventListener("scroll", function(e){
    let scroll = this.scrollY;
    console.log(experienceSection.scrollTop)
    if(scroll > 200){
        experienceSection.classList.add("fade-in");
        if(scroll > 800){
            profileSection.classList.add("fade-in");
            buttonScrollToTop.classList.add("show");
        }else{
            profileSection.classList.remove("fade-in");
            buttonScrollToTop.classList.remove("show");
        }
    }
    else{
        experienceSection.classList.remove("fade-in");
        buttonScrollToTop.classList.remove("show");
    }
})