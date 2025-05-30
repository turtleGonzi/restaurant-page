const content = document.getElementById("content");

const contactInfo = function(name, position, number, email){
    const contact = document.createElement("div");
    contact.style.color = "white";
    contact.className = "menu";
    const title = document.createElement("h2");
    title.textContent = name;
    contact.appendChild(title);

    const pos = document.createElement("p");
    pos.style.marginLeft = "50px";
    pos.textContent = position;Chef
    contact.appendChild(pos);

    const num = document.createElement("p");
    num.style.marginLeft = "50px";
    num.textContent = number;
    contact.appendChild(num);

    const mail = document.createElement("p");
    mail.style.marginLeft = "50px";
    mail.textContent = email;
    contact.appendChild(mail);
    return contact;
}

export const createContact = function(){
    content.style.flexDirection = "column";
    content.style.alignItems = "center";
    const title = document.createElement("h1");
    title.textContent = "CONTACT";
    title.className = "menu-title"
    content.appendChild(title);
    content.appendChild(contactInfo("Mama Bear",'Chef','555-555-5554','totallyRealEmail@notFake.com'));
    content.appendChild(contactInfo("Papa Bear",'Manager','555-555-5555','totallyRealEmail@notFake.com'));
    content.appendChild(contactInfo("Baby Bear",'Waiter','555-555-5556','totallyRealEmail@notFake.com'));
}