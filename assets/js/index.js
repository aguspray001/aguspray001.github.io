const heroSection = document.querySelector("#home");
const experienceSection = document.querySelector("#experience");
const profileSection = document.querySelector("#profile");

const homeHeroImage = document.querySelector(".home__image__hero img");
const darkHeroImageAlt = "./assets/images/boy-code-alt.png";
const darkHeroImage = "./assets/images/boy-code.gif";

const buttonScrollToTop = document.querySelector(".btn__scroll");
const darkModeToggle = document.querySelector(".nav__link .fa-moon");
const navContainer = document.querySelector(".nav__container");

// footer
const waIcon = document.querySelector("footer .fa-whatsapp-square");
const instagramIcon = document.querySelector("footer .fa-instagram-square");


// scroll to top
const scrollToTop = () => {
  scrollTo(0, 0);
};

buttonScrollToTop.addEventListener("click", function () {
  scrollToTop();
});

// dark mode function utilities
const darkMode = (darkState) => {
  if (darkState === true) {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", "dark");
    // change image
    homeHeroImage.setAttribute("src", darkHeroImageAlt);
    // change icon
    darkModeToggle.classList.add("fa-sun");
    darkModeToggle.classList.remove("fa-moon");
    // change shadow color
    navContainer.classList.remove("shadow");
    navContainer.classList.add("white-shadow");
  } else {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", "light");
    // change image
    homeHeroImage.setAttribute("src", darkHeroImage);
    // change icon
    darkModeToggle.classList.remove("fa-sun");
    darkModeToggle.classList.add("fa-moon");
    // change shadow color
    navContainer.classList.add("shadow");
    navContainer.classList.remove("white-shadow");
  }
};

// dark mode toggle
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark") === true) {
    darkMode(true);
  } else {
    darkMode(false);
  }
});

// fade in home on load listener
window.addEventListener("load", function () {
  heroSection.classList.add("fade-in");

  if (localStorage && localStorage.getItem("theme") === "dark") {
    darkMode(true);
  } else {
    darkMode(false);
  }
});

// Animation Section on scroll listener
window.addEventListener("scroll", function (e) {
  let scroll = this.scrollY;

  if (scroll > 200) {
    experienceSection.classList.add("fade-in");
    if (scroll > 800) {
      profileSection.classList.add("fade-in");
      buttonScrollToTop.classList.add("show");
    } else {
      profileSection.classList.remove("fade-in");
      buttonScrollToTop.classList.remove("show");
    }
  } else {
    experienceSection.classList.remove("fade-in");
    buttonScrollToTop.classList.remove("show");
  }
});

// contact me
const sendMessageToWA = () => {
    window.open(
        `https://api.whatsapp.com/send?phone=+6285961142551&text=Permisi *Admin*, apakah saya perlu bantuan untuk projek saya...`,
        "_blank"
      );
}

const openInstagram = () => {
    window.open("https://www.instagram.com/aiot.maker/", "_blank")
}

waIcon.addEventListener("click", ()=>{
    sendMessageToWA();
})

instagramIcon.addEventListener("click", ()=> {
    openInstagram();
})