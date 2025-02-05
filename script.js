document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const animationContainer = document.getElementById("animation-container");
    const heartAnimation = document.getElementById("heart-animation");
    const loveLetter = document.getElementById("love-letter");
    
    noButton.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
    

    yesButton.addEventListener("click", function () {
        const blurBackground = document.getElementById("blurBackground");
    
        // Bloquear el desplazamiento en toda la página
        document.documentElement.style.overflow = "hidden"; // Evita el scroll en HTML
        document.body.style.overflow = "hidden"; // Evita el scroll en BODY
    
        // Mostrar el fondo con blur y animación de aparición
        blurBackground.style.display = "block"; // Activamos el fondo con blur
        blurBackground.style.animation = "fadeIn 1s forwards"; // Aparece suavemente
        
        // Primera animación (Corazón)
        heartAnimation.classList.add("show");
    
        setTimeout(() => {
            heartAnimation.classList.remove("show"); // Oculta el corazón después de 10s
    
            // Segunda animación (Carta de amor y desplazamiento)
            loveLetter.classList.add("show-letter");
            window.scrollTo({ top: loveLetter.offsetTop, behavior: 'smooth' });
        }, 10000);
    
        // Tercera animación (Crear corazones)
        for (let i = 0; i < 20; i++) {
            createHeart();
        }
    
        // Desaparecer el fondo con fadeOut después de 12 segundos
        setTimeout(() => {
            blurBackground.style.animation = "fadeOut 2s forwards"; // Animación de desaparición
    
            setTimeout(() => {
                blurBackground.style.display = "none"; // Ocultar el fondo después de la animación
                
                // Restaurar el desplazamiento
                document.documentElement.style.overflow = "auto"; // Restaurar el scroll en HTML
                document.body.style.overflow = "auto"; // Restaurar el scroll en BODY
            }, 2000); // Esperar 2 segundos para ocultar el fondo
        }, 9000); // 12 segundos para permitir que el fondo esté visible por un tiempo adecuado
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