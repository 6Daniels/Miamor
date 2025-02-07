document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const blurBackground = document.getElementById("blurBackground");
    const heartAnimation = document.getElementById("heart-animation");
    const loveLetter = document.getElementById("love-letter");

    // Evitar que el botón "NO" recargue la página
    noButton.addEventListener("click", function (event) {
        event.preventDefault();
    });

    noButton.addEventListener("pointerover", function () {
        const maxX = window.innerWidth - noButton.clientWidth - 20;
        const maxY = window.innerHeight - noButton.clientHeight - 20;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noButton.style.position = "fixed";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener("click", function () {
        // Bloquear desplazamiento
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        // Mostrar animaciones
        blurBackground.style.display = "block";
        blurBackground.style.animation = "fadeIn 1s forwards";
        heartAnimation.classList.add("show");

        setTimeout(() => {
            heartAnimation.classList.remove("show");
            loveLetter.classList.add("show-letter");
            window.scrollTo({ top: loveLetter.offsetTop, behavior: 'smooth' });
        }, 10000);

        // Crear corazones
        for (let i = 0; i < 20; i++) {
            createHeart();
        }

        // Desaparecer fondo después de 12s
        setTimeout(() => {
            blurBackground.style.animation = "fadeOut 2s forwards";
            setTimeout(() => {
                blurBackground.style.display = "none";
                document.documentElement.style.overflow = "auto";
                document.body.style.overflow = "auto";
            }, 2000);
        }, 9000);
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        document.body.appendChild(heart);

        const randomX = Math.random() * window.innerWidth;
        heart.style.left = `${randomX}px`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
});
