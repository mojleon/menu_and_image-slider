export default class event {
  hamburgerButtonEventListener(nav) {
    const id = nav.querySelector(".menu-btn");
    id.addEventListener("click", (e) => {
      this.toggleHamburgerButton(nav);
      this.toggleNav(nav);
    });
  }

  toggleHamburgerButton(nav) {
    nav.querySelector(".menu-btn").classList.toggle("open");
  }

  toggleNav(nav) {
    nav.classList.toggle("nav__open");
  }

  changeCSSScreenSize() {
    const nav = document.querySelector("nav");
    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 768) {
        nav.setAttribute("style", "transition: none");
      } else {
        nav.setAttribute("style", "transition: all 1s ease-in-out");
      }
    });
  }
}
