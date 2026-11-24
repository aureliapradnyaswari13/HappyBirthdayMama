
function openSurprise() {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });

    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 100);
    }
}

function openLetter(modalId) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.classList.add("active");
    }
}

function closeLetter(modalId) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.classList.remove("active");
    }
}

document.querySelectorAll(".letter-modal").forEach(modal => {
    modal.addEventListener("click", function(e) {
        if (e.target === this) {
            this.classList.remove("active");
        }
    });
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        document.querySelectorAll(".letter-modal").forEach(modal => {
            modal.classList.remove("active");
        });
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeLetter();
    }
});

function createHeart() {
    const container = document.getElementById("hearts");

    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (Math.random() * 20 + 12) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 1200);
