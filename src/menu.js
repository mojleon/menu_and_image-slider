export default class menu {
  constructor() {
    this.body = document.getElementsByTagName("body")[0];
  }

  setup() {
    this.createMenu();
  }

  createMenu() {
    const nav = document.createElement("nav");
    nav.innerHTML = this.createHrefListWithSvgIcons();
    nav.appendChild(this.createHamburgerButton());
    this.body.appendChild(nav);
    this.hamburgerButtonEventListener(nav);
  }

  // createHrefList with svg icons in front of them
  createHrefListWithSvgIcons() {
    return `
            <ul class="menu__list">
                <li class="menu__item"> 
                    <a href="#" class="menu__link">
                        <svg class="menu__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                        Home
                    </a>
                </li>
                <li class="menu__item">
                    <a href="#" class="menu__link">
                        <svg class="menu__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        About
                    </a>
                </li>
                <li class="menu__item">
                    <a href="#" class="menu__link">
                        <svg class="menu__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                            <line x1="9.69" y1="8" x2="21.17" y2="8" />
                            <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                            <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                            <line x1="14.31" y1="16" x2="2.83" y2="16" />
                            <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                        </svg>
                        Contact
                    </a>
                </li>
            </ul>
        `;
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
