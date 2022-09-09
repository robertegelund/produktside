const phoneToBuyOrange = document.querySelector(".phone-to-buy-orange");
const phoneToBuyGreen = document.querySelector(".phone-to-buy-green");
const buyBtnOrange = document.querySelector(".buy-btn-orange");
const buyBtnGreen = document.querySelector(".buy-btn-green");
const basket = document.querySelector("#basket");
const count = document.querySelector("#count");
const basketOverview = document.querySelector(".basket-overview");
const totSum = document.querySelector(".totsum")
const basketList = document.querySelector(".basket-list")
const closeBasket = document.querySelector(".close-basket");

const keyframesScale = [
    { transform: "scale(1.4)" },
    { transform: "scale(1.0)" },
];

const settings = {
    duration: 500,
    fill: "forwards"
};

let buy = 0;
let buyNumber = 0;
let sums = [];
let totalSum = 0;


function addOrangeToBasket() {
    basketList.innerHTML += `
        <li class="bought">
            <p class="bought-name-orange">${phoneToBuyOrange.dataset.name}</p>
            <p>NOK ${phoneToBuyOrange.dataset.price},-</p>
        </li>
    `;

    sums.push(phoneToBuyOrange.dataset.price);
    count.animate(keyframesScale, settings);
    basketOverview.style.visibility = "visible";
    basketOverview.style.animation = "comeDownGetUp 4s";

    for (let i=0; i<sums.length; i++) {
        totalSum += Number(sums[i]);
        totSum.innerHTML = "";
        totSum.innerHTML += `Total NOK:<br> ${totalSum},-`;
    }

    buy = basketOverview.querySelectorAll(".bought");
    buyNumber = buy.length;
    count.innerHTML = buyNumber;
}

function addGreenToBasket () {
    basketList.innerHTML += `
        <li class="bought">
            <p class="bought-name-green">${phoneToBuyGreen.dataset.name}</p>
            <p>NOK ${phoneToBuyGreen.dataset.price},-</p>
        </li>
    `;

    sums.push(phoneToBuyGreen.dataset.price);
    count.animate(keyframesScale, settings);
    basketOverview.style.visibility = "visible";
    basketOverview.style.animation = "comeDownGetUp 4s";

    for (let i=0; i<sums.length; i++) {
        totalSum += Number(sums[i]);
        totSum.innerHTML = "";
        totSum.innerHTML += `Total NOK:<br> ${totalSum},-`;
    }

    buy = basketOverview.querySelectorAll(".bought");
    buyNumber = buy.length;
    count.innerHTML = buyNumber;
}

function showBasketOverview() {
    basketOverview.style.animation = "comeDown 1s forwards";
    basketOverview.style.visibility = "visible";
}

function hideBasketOverview() {
    basketOverview.style.animation = "getUp 1s forwards"
    basketOverview.style.visibility = "hidden";
}

buyBtnOrange.addEventListener("click", addOrangeToBasket);
buyBtnGreen.addEventListener("click", addGreenToBasket);
basket.addEventListener("click", showBasketOverview);
closeBasket.addEventListener("click", hideBasketOverview);