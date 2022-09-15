export default class menu {
  constructor() {
    this.body = document.getElementsByTagName("body")[0];
  }

  setup() {
    this.createMenu();
  }

  createMenu() {
    const nav = document.createElement("nav");
    nav.innerHTML = this.createHrefList();
    nav.appendChild(this.createHamburgerButton());
    this.body.appendChild(nav);
    this.hamburgerButtonEventListener(nav);
  }

  createHrefList() {
    return `
            <ul>
                <li>
                    <a href="#/home">HOME</a>
                </li>
                <li>
                    <a href="#/about">ABOUT</a>
                </li>
                <li>
                    <a href="#/contact">CONTACT</a>
                </li>
            </ul>`;
  }

  createHamburgerButton() {
    const menuBut = document.createElement("div");
    menuBut.classList.add("menu-btn");
    const menuBtnBurger = document.createElement("div");
    menuBtnBurger.classList.add("menu-btn__burger");
    menuBut.appendChild(menuBtnBurger);
    return menuBut;
  }

  hamburgerButtonEventListener(nav) {
    const id = nav.querySelector(".menu-btn");
    id.addEventListener("click", (e) => {
      this.toggleHamburgerButton(nav);
      this.toggleHrefs(nav);
    });
  }

  toggleHamburgerButton(nav) {
    nav.querySelector(".menu-btn").classList.toggle("open");
  }

  toggleHrefs(nav) {
    nav.classList.toggle("open");
    nav.getElementsByTagName("ul")[0].classList.toggle("open");
  }
}
