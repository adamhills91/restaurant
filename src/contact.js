function render() {
  const main = document.createElement("main");
  const mainContainerDiv = document.createElement("div");
  mainContainerDiv.classList.add("container");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");

  const title = document.createElement("h1");
  const subTitle = document.createElement("h2");
  title.textContent = "Contact Us";
  subTitle.textContent =
    "Right you lot, if you can't say something nice, don't say nothin at all!";
  const lineBreak = document.createElement("hr");

  const formDiv = document.createElement("div");

  const form = document.createElement("form");
  form.classList.add("form");
  form.action = "";
  const nameInput = document.createElement("input");
  nameInput.placeholder = "Name";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Email Address";
  const messageInput = document.createElement("textarea");
  messageInput.placeholder = "Type your message";
  messageInput.rows = 9;
  const submitButton = document.createElement("input");
  submitButton.type = "button";
  submitButton.value = "Send Message";

  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(messageInput);
  form.appendChild(submitButton);
  formDiv.appendChild(form);

  titleDiv.appendChild(title);
  titleDiv.appendChild(subTitle);
  titleDiv.appendChild(lineBreak);

  mainContainerDiv.appendChild(titleDiv);
  mainContainerDiv.appendChild(formDiv);
  main.appendChild(mainContainerDiv);
  content.appendChild(main);
}

export { render as renderContact };
