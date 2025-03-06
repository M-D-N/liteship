function toggleDropdown() {
    document.getElementById("dropdown-menu").classList.toggle("active");
}

function selectOption(option) {
    document.getElementById("selected-option").textContent = option;
    document.getElementById("dropdown-value").value = option;
    document.getElementById("dropdown-menu").classList.remove("active");
}

document.addEventListener("click", function (event) {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(event.target)) {
        document.getElementById("dropdown-menu").classList.remove("active");
    }
});

const tariffCards = document.querySelectorAll(".calculator__tarifcard");

tariffCards.forEach(card => {
    card.addEventListener("click", function (event) {
        tariffCards.forEach(card => {
            card.classList.remove("active")
        })
        event.currentTarget.classList.add("active");
        const cardId = event.currentTarget.id;
        document.querySelectorAll(".calculator__info").forEach(info => {
            info.classList.remove("active")
        })
        document.querySelector(`#${cardId}-content`).classList.add("active")
    })
})

document.querySelector(".calculator__options .btn").addEventListener("click", function (event) {
    event.preventDefault()

    const economContent = document.querySelector("#econom-content .calculator__infoprice span")
    const premiumContent = document.querySelector("#premium-content .calculator__infoprice span")

    const economTarifPrice = document.querySelector("#econom .calculator__tarifprice span")
    const economTarifFees = document.querySelector("#econom .calculator__tariffees span:last-child")
    const premiumTarifPrice = document.querySelector("#premium .calculator__tarifprice span")
    const premiumTarifFees = document.querySelector("#premium .calculator__tariffees span:last-child")

    const weight = parseFloat(document.getElementById("weight").value);
    const price = parseFloat(document.getElementById("price").value);


    let economPrice=9.55*weight;
    let economFees=0;

    let premiumPrice=12.37*weight;
    let premiumFees=0;

    if(price > 1000) {
        economFees = (price-1000)*0.3+7.5;
        premiumFees = (price-1000)*0.3+7.5;
    }

    economContent.textContent = economPrice.toFixed(2);
    economTarifPrice.textContent = economPrice.toFixed(2);
    economTarifFees.textContent = economFees.toFixed(2);

    premiumContent.textContent = premiumPrice.toFixed(2);
    premiumTarifPrice.textContent = premiumPrice.toFixed(2);
    premiumTarifFees.textContent = premiumFees.toFixed(2);
})