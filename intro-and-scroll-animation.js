const phonegreen = document.querySelector(".phone-green");
const phoneorange = document.querySelector(".phone-orange");

phonegreen.addEventListener("animationend", () => {
    phonegreen.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(20vw)" }
    ], {
        duration: 1500,
        fill: "forwards"
    })
})

phoneorange.addEventListener("animationend", () => {
    phoneorange.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(20vw)" }
    ], {
        duration: 1700,
        fill: "forwards"
    })
})

function scrollPhones () {
    phonegreen.style.top = (10 + scrollY) + "vh";
    phoneorange.style.top = (10 - scrollY) + "vh";
}

document.addEventListener("scroll", scrollPhones);