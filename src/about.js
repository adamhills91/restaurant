function render() {
  const main = document.createElement("main");
  const mainContainerDiv = document.createElement("div");
  mainContainerDiv.classList.add("container");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");

  const title = document.createElement("h1");
  const subTitle = document.createElement("h2");
  title.textContent = "Listen to me";
  subTitle.textContent = "You will absolutely love it here I just know it";
  const lineBreak = document.createElement("hr");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const imagesGrid = document.createElement("div");
  imagesGrid.classList.add("images-grid");

  const image1 = document.createElement("img");

  const image2 = document.createElement("img");
  const image3 = document.createElement("img");
  image1.classList.add("featured");
  image1.src = "../src/images/food1.jpg";
  image2.src = "../src/images/food2.jpg";
  image3.src = "../src/images/food3.jpg";

  const infoTextDiv = document.createElement("div");
  infoTextDiv.classList.add("info-text");
  const infoPara1 = document.createElement("p");
  const infoPara2 = document.createElement("p");
  const infoPara3 = document.createElement("p");
  infoPara1.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere nisi molestias facilis placeat commodi a quaerat sint eum laboriosam quo sunt, blanditiis voluptatem fuga alias, odio quis debitis molestiae nam optio cumque quod maxime autem doloribus perferendis? Aliquam, dignissimos odit.";
  infoPara2.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore obcaecati deserunt mollitia eveniet inventore alias nulla harum atque iste cumque!";
  infoPara3.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime inventore accusamus sed praesentium animi velit dicta nobis ex sequi?";

  imagesGrid.appendChild(image1);
  imagesGrid.appendChild(image2);
  imagesGrid.appendChild(image3);
  infoTextDiv.appendChild(infoPara1);
  infoTextDiv.appendChild(infoPara2);
  infoTextDiv.appendChild(infoPara3);

  infoDiv.appendChild(imagesGrid);
  infoDiv.appendChild(infoTextDiv);

  titleDiv.appendChild(title);
  titleDiv.appendChild(subTitle);
  titleDiv.appendChild(lineBreak);

  mainContainerDiv.appendChild(titleDiv);
  mainContainerDiv.appendChild(infoDiv);
  main.appendChild(mainContainerDiv);
  content.appendChild(main);
}

export { render as renderAbout };
