import "./style.css";
import menu from "./menu";
import imageslider from "./imageslider";
import event from "./event";

const e = new event();
const m = new menu(e);
const is = new imageslider();

m.setup();
is.setup();
e.changeCSSScreenSize();
