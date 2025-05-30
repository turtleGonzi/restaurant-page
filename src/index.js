import "./styles.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu"
import { createContact } from "./contact.js"

const removeContent = function(){
    const content = document.getElementById("content");
    while(content.firstChild){
      content.removeChild(content.firstChild);
    }
  }
  
  const createBtn = function (text) {
    const nav = document.querySelector("nav");
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.addEventListener("click",(e)=>{
      e.preventDefault();
      removeContent();
    })
    nav.appendChild(btn);
    return btn;
  };
  
  const btnsFnc = function (){
    const btnHome = createBtn("Home");
    btnHome.addEventListener("click", (e)=>{
      e.preventDefault();
      createHome();
    })
    const btnMenu = createBtn("Menu");
    btnMenu.addEventListener("click", (e)=>{
      e.preventDefault()
      createMenu();
  })
    const btnContact = createBtn("Contact");
    btnContact.addEventListener("click", (e)=>{
      e.preventDefault();
      createContact();
    })
  }

createHome();
btnsFnc();
