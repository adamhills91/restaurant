function render() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const navItems = ["Home", "Menu", "Contact Us"];
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");

  const headerLogo = document.createElement("img");
  headerLogo.src = "../src/images/logo.png";

  const headerLogoText = document.createElement("a");
  headerLogoText.textContent = "Ernie's Eatery";

  logoDiv.appendChild(headerLogo);
  logoDiv.appendChild(headerLogoText);

  const ul = document.createElement("ul");
  navItems.forEach((element, i) => {
    const li = document.createElement("li");
    const navLink = document.createElement("p");
    navLink.classList.add("nav-link", `nav-link${i + 1}`);
    navLink.textContent = element;
    li.appendChild(navLink);
    ul.appendChild(li);
  });

  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  const bars = [];
  for (let i = 0; i < 3; i++) {
    const bar = document.createElement("span");
    bar.classList.add("bar");
    bars[i] = bar;
    hamburger.appendChild(bars[i]);
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    ul.classList.toggle("active");
  });

  navItems.forEach((e) => {
    // e.addEventListener("click", () => {
    //   hamburger.classList.remove("active");
    //   ul.classList.remove("active");
    // });
  });

  containerDiv.appendChild(logoDiv);
  containerDiv.appendChild(ul);
  containerDiv.appendChild(hamburger);
  nav.appendChild(containerDiv);

  const banner = document.createElement("div");
  banner.classList.add("banner");
  const bannerLogo = document.createElement("img");
  bannerLogo.src = "../src/images/logo.png";
  const bannerHeader = document.createElement("h2");
  bannerHeader.textContent = "Delicious Food";
  const bannerSubHeader = document.createElement("h3");
  bannerSubHeader.textContent = "It's really good here";

  banner.appendChild(bannerLogo);
  banner.appendChild(bannerHeader);
  banner.appendChild(bannerSubHeader);

  header.appendChild(nav);
  header.appendChild(banner);
  content.appendChild(header);
}

export { render as renderNav };
