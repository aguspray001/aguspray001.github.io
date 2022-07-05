const heroSection = document.querySelector("#home");
const experienceSection = document.querySelector("#experience");
const profileSection = document.querySelector("#profile");
const footerWave = document.querySelector(".footer__wave");

const mobileMenuContainer = document.querySelector(".mobile-menu__container");

const homeHeroImage = document.querySelector(".home__image__hero img");
const darkHeroImageAlt = "./assets/images/boy-code-alt.png";
const darkHeroImage = "./assets/images/boy-code.gif";

const buttonScrollToTop = document.querySelector(".btn__scroll");
const buttonMenu = document.querySelector(".fa-bars");

const navLink = document.querySelectorAll(".nav__link li");
const navLinkMobile = document.querySelectorAll(".mobile-menu__container li");

const darkModeToggle = document.querySelector(".nav__link #dark-toggle");
console.log(darkModeToggle)
const navContainer = document.querySelector(".nav__container");
// footer
const waIcon = document.querySelector("footer .fa-whatsapp-square");
const instagramIcon = document.querySelector("footer .fa-instagram-square");

// open menu in mobile version
buttonMenu.addEventListener("click", () => {
  mobileMenuContainer.classList.toggle("show");
  
});
// scroll to top
const scrollToPos = (yPos) => {
  scrollTo(0, yPos);
};

buttonScrollToTop.addEventListener("click", function (e) {
  buttonScrollToTop.classList.add("shake__animation")
  setTimeout(() => {
    scrollToPos(scroll);
    buttonScrollToTop.classList.remove("shake__animation")
  }, 1000);
});

// dark mode function utilities
const darkMode = (darkState) => {
  if (darkState === true) {
    localStorage.setItem("theme", "dark");
    // change image
    homeHeroImage.setAttribute("src", darkHeroImageAlt);
    // change icon
    darkModeToggle.classList.add("fa-sun");
    darkModeToggle.classList.remove("fa-moon");
    // change shadow color
    navContainer.classList.add("white-shadow");
  } else {
    localStorage.setItem("theme", "light");
    // change image
    homeHeroImage.setAttribute("src", darkHeroImage);
    // change icon
    darkModeToggle.classList.remove("fa-sun");
    darkModeToggle.classList.add("fa-moon");
    // change shadow color
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

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    darkMode(true);
  } else {
    document.body.classList.remove("dark");
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
      // buttonScrollToTop.classList.add("shake__animation");
    } else {
      profileSection.classList.remove("fade-in");
      buttonScrollToTop.classList.remove("show");
      // buttonScrollToTop.classList.remove("shake__animation");
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
};

const openInstagram = () => {
  window.open("https://www.instagram.com/aiot.maker/", "_blank");
};

waIcon.addEventListener("click", () => {
  sendMessageToWA();
});

instagramIcon.addEventListener("click", () => {
  openInstagram();
});

for (const link of navLink) {
  link.addEventListener("click", function (e) {
    if (e.target.id === "profile-nav") {
      profileSection.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.id === "home-nav") {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.id === "project-nav") {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

for (const link of navLinkMobile) {
  link.addEventListener("click", function (e) {
    if (e.target.id === "profile-nav") {
      profileSection.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.id === "home-nav") {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.id === "project-nav") {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}
