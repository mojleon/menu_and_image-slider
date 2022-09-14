import hamburgerbuttonsvg from './hamburger-button.svg';

export default class menu {
    constructor() {
        this.body = document.getElementsByTagName("body")[0]
    }

    setup() {
        this.createMenu();
    }

    createMenu() {
        const nav = document.createElement("nav");
        nav.innerHTML = this.createHrefList() + this.createHamburgerButton();
        nav.getElementsByTagName("ul")[0].style.display = "none";
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
            </ul>`
    }

    createHamburgerButton() {
        const hamburgerButton = `<img src="${hamburgerbuttonsvg}" id="hamburgerbutton"/>`
        return hamburgerButton
    }

    hamburgerButtonEventListener(nav) {
        const id = nav.querySelector("#hamburgerbutton");
        id.addEventListener("click", (e) => {
            this.toggleHrefs(nav);
        })
    }

    toggleHrefs(nav) {
        let navDisplay = nav.getElementsByTagName("ul")[0].style.display;

        if(navDisplay == 'none') return nav.getElementsByTagName("ul")[0].style.display = 'inline'
        nav.getElementsByTagName("ul")[0].style.display = 'none';
    }

    log() {
        console.log('menu log');
    }
}