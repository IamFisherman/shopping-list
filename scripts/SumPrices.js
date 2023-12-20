const prices = document.querySelectorAll(".price");
// const checkboxes = document.querySelectorAll(".check");
const totalPriceElement = document.querySelector("#total");

prices.forEach(price => {
    price.addEventListener("change", updateTotalPrice)
})

function updateTotalPrice() {
    let total = 0;

    prices.forEach(price => {

        if (price.value != "") {
            total += parseFloat(price.value);
        }
    
        
    
        
    });

    totalPriceElement.innerHTML = total;

}



// // prices.forEach(price => {
//     prices.addEventListener("change", updateTotalPrice)
// // })

// // checkboxes.forEach(checkbox => {
// //     checkbox.addEventListener('change', updateTotalPrice);
// //   });

//   function updateTotalPrice() {
//     // let total = 0;

//     // price.forEach(price => {
//     //     total += price.value;
//     // })

//     totalPriceElement.textContent = prices.value;

//     // checkboxes.forEach(checkbox => {
//     //   if (checkbox.checked) {
//     //     const price = parseFloat(checkbox.getAttribute('data-price'));
//     //             const priceInput = checkbox.parentElement.nextElementSibling.lastElementChild;
//     //             total += price * parseFloat(priceInput.value || 0);
//     //   }
//     // });

    
//   }