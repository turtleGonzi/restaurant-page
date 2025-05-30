import foodImg from "./img/paella.jpg";

const createDiv = function (className, parentElement) {
  const div = document.createElement("div");
  div.className = className;
  parentElement.appendChild(div);
  return div;
};

export function createHome() {
  const content = document.getElementById("content");
  content.style.flexDirection = "row";
  const leftDiv = createDiv("left", content);
  const rightDiv = createDiv("right", content);
  const paella = document.createElement("img");
  paella.src = foodImg;
  rightDiv.appendChild(paella);
  const title = document.createElement("h1");
  title.textContent = "Best honey restaurant";
  leftDiv.appendChild(title);
  const text = document.createElement("p");
  text.className = "text";
  text.textContent =
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  leftDiv.appendChild(text);
}
