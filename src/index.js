import css from "./style.css";
import menu from "./menu";
import imageslider from "./imageslider";

async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import("lodash");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}
getComponent().then((component) => {
  document.body.appendChild(component);
});

const m = new menu();
const is = new imageslider();

is.log();

m.setup();
m.log();