export default class imageslider {
  constructor() {
    this.body = document.getElementsByTagName("body")[0];
  }

  setup() {
    const div = document.createElement("div");
    div.classList.add("slider");
    div.innerHTML = this.createSlider();
    this.body.appendChild(div);

    this.hideImages();
    this.sliderControls();
  }

  createSlider() {
    return `
            <div class="slider__slides">
                <div class="slider__slide">
                    <img src="https://picsum.photos/600/400?image=0" alt="image 1">
                </div>
                <div class="slider__slide">
                    <img src="https://picsum.photos/600/400?image=1" alt="image 2">
                </div>
                <div class="slider__slide">
                    <img src="https://picsum.photos/600/400?image=2" alt="image 3">
                </div>
                <div class="slider__slide">
                    <img src="https://picsum.photos/600/400?image=3" alt="image 4">
                </div>
                <div class="slider__slide">
                    <img src="https://picsum.photos/600/400?image=4" alt="image 5">
                </div>
                <div class="slider__slide">
                    <img src="https://picsum.photos/600/400?image=5" alt="image 6">
                </div>
            </div>
            <div class="slider__controls">
                <button class="slider__control" data-direction="prev"><</button>
                <button class="slider__control" data-direction="next">></button>
            </div>`;
  }

  hideImages() {
    const images = document.querySelectorAll(".slider__slide");
    images.forEach((image) => {
      image.classList.add("hide");
    });
    images[0].classList.remove("hide");
  }

  sliderControls() {
    const controls = document.querySelectorAll(".slider__control");
    controls.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.changeSlide(e.target);
      });
    });
  }

  changeSlide() {
    const current = document.querySelector(".slider__slide:not(.hide)");
    const direction = event.target.dataset.direction;
    let next;
    if (direction === "next") {
      next =
        current.nextElementSibling || current.parentElement.firstElementChild;
    } else if (direction === "prev") {
      next =
        current.previousElementSibling ||
        current.parentElement.lastElementChild;
    }
    current.classList.add("hide");
    next.classList.remove("hide");
  }
}
