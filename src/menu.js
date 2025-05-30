const content = document.getElementById("content");

const createFood = function(nazev,text, price){
    const food = document.createElement("div");
    food.style.color = "white";
    food.className = "menu";
    const title = document.createElement("h2");
    food.appendChild(title);
    const textMenu = document.createElement("p");
    textMenu.style.marginLeft = "50px";
    textMenu.textContent = text;
    food.appendChild(textMenu);
    const priceElem = document.createElement("p");
    priceElem.textContent = price + " CZK";
    priceElem.style.fontWeight = "700";
    priceElem.style.textAlign = "right";
    food.appendChild(priceElem);
    title.textContent = nazev;
    const img = document.createElement("div");
    img.style.border = "2px solid white";
    img.style.width = "190px";
    img.style.height = "190px";
    img.style.marginLeft = "auto";
    food.appendChild(img);
    return food;
}

export const createMenu = function(){
    content.style.flexDirection = "column";
    content.style.alignItems = "center";
    const title = document.createElement("h1");
    title.textContent = "MENU";
    title.className = "menu-title"
    content.appendChild(title);
    content.appendChild(createFood("papaja", "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!", 200));
    content.appendChild(createFood("Beary Tea", "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.", 120));
    content.appendChild(createFood("Toast and Jam", "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.", 20));
    content.appendChild(createFood("Fresh Fruit", "A small bowl of fresh fruit, whatever we find at the market for the day.", 60));
    content.appendChild(createFood("Pancakes", "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.", 198));
}