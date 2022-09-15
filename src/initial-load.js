import { renderNav } from "./nav.js";
import { renderAbout } from "./about.js";
import { renderFooter } from "./footer.js";

function initialLoad() {
  renderNav();
  renderAbout();
  renderFooter();
}

export { initialLoad };
