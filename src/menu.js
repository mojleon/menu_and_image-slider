import hamburgerbuttonsvg from './hamburger-button.svg';

export default class menu {
    constructor() {
        this.body = document.getElementsByTagName("body")[0],
        this.nav = null
    }

    setup() {
        this.createMenu();
        this.addEventListeners();
    }

    addEventListeners() {
        this.hamburgerButtonEventListener();
    }

    createMenu() {
        const nav = document.createElement("nav");
        nav.innerHTML = this.createHrefList() + this.createHamburgerButton();
        nav.getElementsByTagName("ul")[0].style.display = "none";
        this.nav = nav;
        this.body.appendChild(nav);
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
            </ul>`
    }

    createHamburgerButton() {
        const hamburgerButton = `<img src="${hamburgerbuttonsvg}" id="hamburgerbutton"/>`
        return hamburgerButton
    }

    hamburgerButtonEventListener() {
        const id = document.querySelector("#hamburgerbutton");
        id.addEventListener("click", (e) => {
            this.toggleHrefs();
        })
    }

    toggleHrefs() {
        let navDisplay = this.nav.getElementsByTagName("ul")[0].style.display;

        if(navDisplay == 'none') return this.nav.getElementsByTagName("ul")[0].style.display = 'inline'
        this.nav.getElementsByTagName("ul")[0].style.display = 'none';
    }

    log() {
        console.log('menu log');
    }
}