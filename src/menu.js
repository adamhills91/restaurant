function render() {
  const main = document.createElement("main");
  const mainContainerDiv = document.createElement("div");
  mainContainerDiv.classList.add("container");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");

  const title = document.createElement("h1");
  const subTitle = document.createElement("h2");
  title.textContent = "Menu";
  subTitle.textContent = "Oh my god you need to try the cheesecake. Unreal.";
  const lineBreak = document.createElement("hr");

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const menuImages = [];
  for (let i = 0; i < 6; i++) {
    menuImages[i] = document.createElement("img");
    menuImages[i].src = `./images/menu/menu${i + 1}.jpg`;
  }

  for (let j = 0; j < menuImages.length; j++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.appendChild(menuImages[j]);
    menuDiv.appendChild(menuItem);
  }

  titleDiv.appendChild(title);
  titleDiv.appendChild(subTitle);
  titleDiv.appendChild(lineBreak);

  mainContainerDiv.appendChild(titleDiv);
  mainContainerDiv.appendChild(menuDiv);
  main.appendChild(mainContainerDiv);
  content.appendChild(main);
}

export { render as renderMenu };
