// instance the html elements we need
const budget = document.querySelector("#budget"); // budget input

const itemAdded = document.querySelector("#itemAdded"); // add item input
const button = document.querySelector("#itemAddButton"); // add item button
const list = document.querySelector("#listItems"); // list of items

const imgItemsDiv = document.querySelector("#imgItems"); // div there are no items

const saving = document.querySelector("#saving"); // saving text

updateTotalPrice(); // update total price when open the page

// const pricesList = getPricesList() || [];

// items array
let itemsArray = getItemList() || [];
itemsArray.forEach(item => {
    displayList(item);
}); 

// THIS NEXT CODE IS A CODE THAT NEEDS TO BE IMPROVED...

// function createPriceList() {
    
//     const prices = document.querySelectorAll(".price");
//     pricesList.splice(0, pricesList.length);


//     prices.forEach(price => {

//         pricesList.forEach(i => {
//             price.setAttribute("value", i);
//         })
        
//         if (price.value == "") {
//             pricesList.push("0.00");
//         }
//         else {
//             pricesList.push(price.value);
//         } 

        
//     })

//     localStorage.setItem('myArray', JSON.stringify(pricesList));
//     calculatePrice();
//     console.log(pricesList);
    
// }

// function getPricesList() {
//     return JSON.parse(localStorage.getItem('myArray'));
// }

// createPriceList();

// ************ ADD AN ITEM ************ //
button.addEventListener("click", function() {

    if (itemAdded.value != "") // if item input is not empty
    {
        if (itemsArray.includes(itemAdded.value)) // if item added is in the actual list
        {
            window.alert("This item is in the list already."); // message
        }
        else // if item added is NOT in the actual list
        {
            displayList(itemAdded.value); // create the item (li) and add it to list (ul)
            itemsArray.push(itemAdded.value); // add new item to item array
        
            setItemList(); // create a data local storage
            // createPriceList();
        
            itemAdded.value = ""; // clear add item input
        }
    }
    else // if item input is empty
    {
        window.alert("You don't have entered an item! Please enter one."); // message
    }

})

// ****** CREATE ITEM (li) AND ADD IT TO LIST (ul) ****** //
function displayList(item)
{
    // li
    const li = document.createElement("li");
    li.classList.add("item");

    // div (MAIN)
    const divMain = document.createElement("div");
    divMain.classList.add("itemDiv");

    // div (CHECK AND ITEM)
    const divCheck = document.createElement("div");
    divCheck.classList.add("checkDiv");
    // check
    const inputCheck = document.createElement("input");
    inputCheck.setAttribute("type", "checkbox");
    inputCheck.setAttribute("class", "check");

    // div (PRICE)
    const divItemPrice = document.createElement("div");
    divItemPrice.classList.add("itemPriceDiv");
    // p item
    const p = document.createElement("p");
    p.classList.add("itemP");
    p.innerHTML = item;

    // div final
    const divPrice = document.createElement("div");
    divPrice.classList.add("priceDiv");
    // p money
    const moneyP = document.createElement("p");
    moneyP.innerHTML = "R$";
    moneyP.classList.add("money");
    // input price
    const inputPrice = document.createElement("input");
    inputPrice.setAttribute("type", "number");
    inputPrice.setAttribute("class", "price");
    inputPrice.setAttribute("placeholder", "0.00");

    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    // svg x
    const SVG_NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "version", "1.1");
    svg.setAttributeNS(null, "class", "deleteIcon");
    svg.setAttributeNS(null, "x", "0px");
    svg.setAttributeNS(null, "y", "0px");
    svg.setAttributeNS(null, "width", "16");
    svg.setAttributeNS(null, "height", "16");
    svg.setAttributeNS(null, "viewBox", "0 0 122.879 122.879");
    svg.setAttributeNS(null, "enable-background", "new 0 0 122.879 122.879");
    // g
    const g = document.createElementNS(SVG_NS, "g");
    // path
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttributeNS(null, "fill-rule", "evenodd");
    path.setAttributeNS(null, "clip-rule", "evenodd");
    path.setAttributeNS(null, "fill", "#a6a6a6");
    path.setAttributeNS(null, "d", "M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z");

    // check div
    divCheck.append(inputCheck);
    divCheck.append(divItemPrice);

    // item and price div
    divItemPrice.append(p);
    divItemPrice.append(divPrice);

    // price div
    divPrice.append(moneyP);
    divPrice.append(inputPrice);

    // create svg
    g.append(path);
    svg.append(g);
    deleteButton.append(svg);

    // append
    divMain.append(divCheck);

    li.append(divMain);
    li.append(deleteButton);

    list.appendChild(li);

    // aria label to browser readers
    deleteButton.ariaLabel = "Delete Item";

    // delete button function
    deleteButton.addEventListener("click", function() {
        list.removeChild(li); // delete li
        deleteItemSelected(p.innerHTML); // delete item in local storage
        calculatePrice(); // update total price
        showImgNoItems(); // verify if list is empty to show the image "there are no items"
    })

    imgItemsDiv.classList.remove("show"); // every time that adding an item, the image "there are no items" will not be show 
    
    updateTotalPrice(); // update total price
}

// ******* CREATE LOCAL STORAGE ******* //
function setItemList()
{
    localStorage.setItem("myItemsList", JSON.stringify(itemsArray));
}

// ******* GET LOCAL STORAGE ******* //
function getItemList()
{
    return JSON.parse(localStorage.getItem("myItemsList"));
}

// ******* DELETE ITEM IN LOCAL STORAGE ******* //
function deleteItemSelected(chapter)
{
    // chapter = chapter.slice(0, chapter.length - 1);
    itemsArray = itemsArray.filter(item => item !== chapter);
    setItemList();
}

// ******* UPDATE TOTAL PRICE ******* //
function updateTotalPrice() 
{
    const prices = document.querySelectorAll(".price");

    prices.forEach(price => {
        price.addEventListener("change", calculatePrice);
        // price.addEventListener("change", createPriceList);
    })

    budget.addEventListener("change", calculateSaving);
    budget.addEventListener("change", calculatePrice);
}

// ******* CALCULATE TOTAL PRICE ******* //
function calculatePrice() 
{
    const prices = document.querySelectorAll(".price");
    const totalPriceElement = document.querySelector("#total");

    let total = 0;

    prices.forEach(price => {
        if (price.value != "") {
            total += parseFloat(price.value);
        }
    });

    totalPriceElement.innerHTML = `R$ ${total.toFixed(2)}`;

    calculateSaving(total);
}

// ******* CALCULATE SAVING ******* //
function calculateSaving(total) 
{
    // saving
    let moneySaved = parseFloat(budget.value) - total;

    // saving when dark mode
    let savingWhenDark = document.querySelector("#saving.dark")

    const totalPriceElement = document.querySelector("#total");

    if (budget.value != "") {
        if (total > parseFloat(budget.value)) {
            totalPriceElement.style.backgroundColor = "#ff5757";
            totalPriceElement.style.color = "#fff";
            saving.innerHTML = `Owing R$ ${moneySaved.toFixed(2)}`;
            saving.style.color = "#ff5757";
            savingWhenDark.style.color = "#d9d9d9"; // saving when dark mode
        }
        else if (total > parseFloat(budget.value) * 0.95) {
            totalPriceElement.style.backgroundColor = "#f08900";
            totalPriceElement.style.color = "#fff";
            saving.innerHTML = `Saving R$ ${moneySaved.toFixed(2)}`;
            saving.style.color = "#f08900";
            savingWhenDark.style.color = "#d9d9d9"; // saving when dark mode
        }
        else if (total < parseFloat(budget.value)) {
            totalPriceElement.style.backgroundColor = "#008444";
            totalPriceElement.style.color = "#fff";
            saving.innerHTML = `Saving R$ ${moneySaved.toFixed(2)}`;
            saving.style.color = "#008444";
            savingWhenDark.style.color = "#d9d9d9"; // saving when dark mode
        }
    }
    else if (budget.value == "") {
        totalPriceElement.style.backgroundColor = "#f6ca11";
        totalPriceElement.style.color = "#3b3b3b";
        saving.innerHTML = "";
    }
}

// ******* SHOW IMG NO ITEMS ******* //
function showImgNoItems() {
    if (itemsArray.length == 0) {
        imgItemsDiv.classList.add("show");
    }
    else if (itemsArray.length >= 1) {
        imgItemsDiv.classList.remove("show");
    }
}

showImgNoItems(); // verify if list is empty to show the image "there are no items"