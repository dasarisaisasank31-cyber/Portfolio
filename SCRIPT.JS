// Typing Effect
const text = ["Web Developer", "UI Designer", "JavaScript Enthusiast"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < text[index].length) {
        document.querySelector(".typing").innerHTML += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            document.querySelector(".typing").innerHTML = "";
            charIndex = 0;
            index = (index + 1) % text.length;
            typeEffect();
        }, 1500);
    }
}
typeEffect();

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Scroll Reveal
window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let r of reveals) {
        const top = r.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) r.classList.add("active");
    }
});
