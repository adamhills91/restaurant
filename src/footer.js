function render() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const logo = document.createElement("img");
  logo.src = "./images/logo.png";
  footer.appendChild(logo);

  content.appendChild(footer);
}

export { render as renderFooter };
