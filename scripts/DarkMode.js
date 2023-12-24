const darkModeButton = document.querySelector("#darkModeButton")

const htmlDark = document.querySelector("html")

const main = document.querySelector("#main")

const budgetDark = document.querySelector("#budget")
const itemAddedDark = document.querySelector("#itemAdded")
const itemAddButtonDark = document.querySelector("#itemAddButton")
const plusIcon = document.querySelector(".plusIcon")
const plusIconDark = document.querySelector(".plusIconDark")

const shoppingListImage = document.querySelector("#shoppingListImage")
const shoppingListImageDark = document.querySelector("#shoppingListImageDark")
const textNoItemsDark = document.querySelector("#textNoItems")

const listItemsDark = document.querySelector("#listItems")

const totalSavingDivDark = document.querySelector("#totalSavingDiv")
const totalTitleDark = document.querySelector("#totalTitle")

const savingDark = document.querySelector("#saving")


darkModeButton.addEventListener("click", function() {
    htmlDark.classList.toggle("dark")

    main.classList.toggle("dark")

    budgetDark.classList.toggle("dark")
    itemAddedDark.classList.toggle("dark")
    plusIcon.classList.toggle("dark")
    plusIconDark.classList.toggle("dark")

    shoppingListImage.classList.toggle("dark")
    shoppingListImageDark.classList.toggle("dark")
    textNoItemsDark.classList.toggle("dark")

    listItemsDark.classList.toggle("dark")

    totalSavingDivDark.classList.toggle("dark")
    totalTitleDark.classList.toggle("dark")

    savingDark.classList.toggle("dark")
})

