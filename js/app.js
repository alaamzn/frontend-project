const navMenu = document.querySelector('.nav__menu');
const clickMenu = document.querySelector('.nav__hamburger');
const closeMenu = document.querySelector('.close__toggle');

const links = document.querySelector('.nav__link');

links.addEventListener('click', close);

clickMenu.addEventListener('click', show); 
closeMenu.addEventListener('click', close);


function show(){
    navMenu.style.display = 'flex';
    navMenu.style.top = '0';
    navMenu.style.left = '0';
}

function close(){
    navMenu.style.top = '-100%';
}

// Smooth Scroll

const navBar = document.querySelector(".navigation");
const scrollLinks = document.querySelectorAll(".scroll-link");

Array.from(scrollLinks).forEach(link => {
  link.addEventListener("click", e => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const fixNav = navBar.classList.contains("fix__nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: "0",
      top: position,
    });

    menu.style.left = "-40rem";
    document.body.classList.remove("active");
  });
});




// FixNav

window.addEventListener("scroll", () => {
    const navHeight = navBar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
  
    if (scrollHeight > navHeight) {
      navBar.classList.add("fix__nav");
    } else {
      navBar.classList.remove("fix__nav");
    }
  });
  