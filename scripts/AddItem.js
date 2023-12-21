// const budget = document.querySelector("#budget");
// const saving = document.querySelector("#saving");
// const totalSavingDiv = document.querySelector("#totalSavingDiv");

// const itemAdded = document.querySelector("#itemAdded");
// const button = document.querySelector("#itemAddButton");
// const list = document.querySelector("#listItems");



// button.addEventListener("click", function() {

//     if (itemAdded.value != "") {
//         // li
//         const li = document.createElement("li");
//         li.classList.add("item");

//         // div (MAIN)
//         const divMain = document.createElement("div");
//         divMain.classList.add("itemDiv");

//         // div (CHECK AND ITEM)
//         const divCheckItem = document.createElement("div");
//         divCheckItem.classList.add("checkItem");
//         // check
//         const inputCheck = document.createElement("input");
//         inputCheck.setAttribute("type", "checkbox");
//         inputCheck.setAttribute("class", "check");
//         // p item
//         const p = document.createElement("p");
//         p.classList.add("itemP");
//         p.innerHTML = itemAdded.value;

//         // div (PRICE)
//         const divPrice = document.createElement("div");
//         divPrice.classList.add("priceDiv");
//         // p money
//         const moneyP = document.createElement("p");
//         moneyP.innerHTML = "R$";
//         moneyP.classList.add("money");
//         // input price
//         const inputPrice = document.createElement("input");
//         inputPrice.setAttribute("type", "number");
//         inputPrice.setAttribute("class", "price");
//         inputPrice.setAttribute("placeholder", "0.00");

//         // delete button
//         const deleteButton = document.createElement("button");
//         deleteButton.classList.add("deleteButton");
//         // svg x
//         const SVG_NS = "http://www.w3.org/2000/svg";
//         const svg = document.createElementNS(SVG_NS, "svg");
//         svg.setAttributeNS(null, "version", "1.1");
//         svg.setAttributeNS(null, "class", "deleteIcon");
//         svg.setAttributeNS(null, "x", "0px");
//         svg.setAttributeNS(null, "y", "0px");
//         svg.setAttributeNS(null, "width", "16");
//         svg.setAttributeNS(null, "height", "16");
//         svg.setAttributeNS(null, "viewBox", "0 0 122.879 122.879");
//         svg.setAttributeNS(null, "enable-background", "new 0 0 122.879 122.879");
//         // g
//         const g = document.createElementNS(SVG_NS, "g");
//         // path
//         const path = document.createElementNS(SVG_NS, "path");
//         path.setAttributeNS(null, "fill-rule", "evenodd");
//         path.setAttributeNS(null, "clip-rule", "evenodd");
//         path.setAttributeNS(null, "fill", "#ff5757");
//         path.setAttributeNS(null, "d", "M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z");

//         // check and item div
//         divCheckItem.append(inputCheck);
//         divCheckItem.append(p);

//         // price div
//         divPrice.append(moneyP);
//         divPrice.append(inputPrice);

//         // create svg
//         g.append(path);
//         svg.append(g);
//         deleteButton.append(svg);

//         // append
//         divMain.append(divCheckItem);
//         divMain.append(divPrice);

//         li.append(divMain);
//         li.append(deleteButton);

//         list.appendChild(li);

//         // delete item name after added
//         itemAdded.value = "";

        

//         // aria label to browser readers
//         deleteButton.ariaLabel = "Delete Item";

//         // delete button function
//         deleteButton.addEventListener("click", function() {
//             list.removeChild(li);

//             calculatePrice();
//         })

        
        
//         updateTotalPrice();
        
//     }
//     else {
//         window.alert("You don't have entered an item! Please enter one.");
//     }

// });

// function updateTotalPrice() {
//     const prices = document.querySelectorAll(".price");

//     prices.forEach(price => {
//         price.addEventListener("change", calculatePrice)
//     })

//     budget.addEventListener("change", calculateSaving);
//     budget.addEventListener("change", calculatePrice);
// }

// function calculatePrice() {
//     const prices = document.querySelectorAll(".price");
//     const totalPriceElement = document.querySelector("#total");


//     let total = 0;

//     prices.forEach(price => {
//         if (price.value != "") {
//             total += parseFloat(price.value);
//         }
//     });

//     totalPriceElement.innerHTML = total.toFixed(2);

//     calculateSaving(total);

    
// }

// function calculateSaving(total) {

//     // saving
//     let moneySaved = parseFloat(budget.value) - total;

   
    
//     if (budget.value != "") {
//         if (total > parseFloat(budget.value)) {
//             totalSavingDiv.style.backgroundColor = "#ff5757";
//             saving.innerHTML = `Owing R$ ${moneySaved.toFixed(2)}`;
//         }
//         else if (total > parseFloat(budget.value) * 0.95) {
//             totalSavingDiv.style.backgroundColor = "#ff914d";
//             saving.innerHTML = `Saving R$ ${moneySaved.toFixed(2)}`;
//         }
//         else if (total < parseFloat(budget.value)) {
//             totalSavingDiv.style.backgroundColor = "#008444";
//             saving.innerHTML = `Saving R$ ${moneySaved.toFixed(2)}`;
//         }
//     }
//     else if (budget.value == "") {
//         totalSavingDiv.style.backgroundColor = "#0097b2";
//         saving.innerHTML = "";
//     }

// }

// function deleteItem() {
//     const deleteButtons = document.querySelectorAll(".deleteButton");

//     deleteButtons.forEach(deleteButton => {
//         deleteButton.addEventListener("click", function() {
//             list.removeChild(deleteButton.parentElement);
    
//             calculatePrice();
//         })
//     })
    
// } 

// // THIS NEXT FUNCTION WORKS, BUT IT IS NOT NEEDS IN THIS CASE
// // function checkItem() {
// //     const checkboxes = document.querySelectorAll(".check");

// //     checkboxes.forEach(check => {
// //         check.addEventListener("change", function() {
// //             check.nextElementSibling.classList.toggle("checked");
// //         })
// //     })
// // }

// // checkItem();

// deleteItem();

// updateTotalPrice();


