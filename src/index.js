import { initialLoad } from "./initial-load.js";
import { renderNav } from "./nav.js";
import { renderAbout } from "./about.js";
import { renderFooter } from "./footer.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";

const content = document.getElementById("content");

function home() {
  content.innerHTML = "";
  initialLoad();
}
function menu() {
  content.innerHTML = "";
  renderNav();
  renderMenu();
  renderFooter();
}
function contact() {
  content.innerHTML = "";
  renderNav();
  renderContact();
  renderFooter();
}

home();

document.addEventListener("click", (e) => {
  const target = e.target;
  if (
    target.classList.contains("nav-link1") ||
    target.parentNode.classList.contains("logo")
  )
    home();

  if (target.classList.contains("nav-link2")) menu();
  if (target.classList.contains("nav-link3")) contact();
});

export { content };
