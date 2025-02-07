
body {
  font-family: 'noche', sans-serif;
  text-align: center;
  
  /*background-image: url(https://i.pinimg.com/736x/3b/77/58/3b77589b254b4a6399141faa25151b19.jpg);*/
  background-color: #CDCDCD;
  background-image:
  repeating-linear-gradient(
      to right, transparent 0 150px, #0001 150px 151px
  ),
  repeating-linear-gradient(
      to bottom, transparent 0 150px, #0001 150px 151px
  ),
  linear-gradient(to right, #fd72dbda, #eec9f1e1),
  url(images/bg.jpg);
  background-size: cover;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
}



#blurBackground {
display: none; /* Se oculta inicialmente */

position: fixed; /* Asegúrate de usar 'fixed' para mantenerlo en su lugar */

width: 90%; /* Lo expandimos a todo el ancho */
height: 60%; /* Lo expandimos a toda la altura */
text-align: center;
justify-content: center;
background: rgba(0, 0, 0, 0.5); /* Fondo oscuro semitransparente */
backdrop-filter: blur(10px); /* Aplica el blur al fondo */
z-index: 100;
/* border: 5px solid #fff; Borde blanco */
border-radius: 10px; /* Bordes redondeados */

/* Animación de aparición suave */
opacity: 0;
animation: fadeIn 1s forwards; /* Aparece suavemente */
}









/* Fondo borroso elegante */
#blurBackground {
  display: none; /* Centra contenido */
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 80%;
  height: 60%;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  z-index: 100;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.6); /* Sombra con brillo rojo */
  padding: 20px;
  overflow: hidden;
}

/* Efecto de borde brillante */
@keyframes glowing-border {
  0% { box-shadow: 0 0 10px rgba(255, 0, 0, 0.6); }
  50% { box-shadow: 0 0 20px rgba(255, 0, 0, 1); }
  100% { box-shadow: 0 0 10px rgba(255, 0, 0, 0.6); }
}

#blurBackground {
  animation: glowing-border 2s infinite alternate;
}

/* Decoración con corazones en las esquinas */
#blurBackground::before,
#blurBackground::after {
  content: "❤";
  position: absolute;
  font-size: 50px;
  color: rgba(255, 0, 0, 0.8);
  animation: heartbeat 1.5s infinite alternate;
}

#blurBackground::before {
  top: 20px;
  left: 20px;
}

#blurBackground::after {
  bottom: 20px;
  right: 20px;
}

/* Animación de latido para los corazones */
@keyframes heartbeat {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.2); opacity: 1; }
}

/* Animación de entrada suave */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

#blurBackground {
  opacity: 0;
  animation: fadeIn 1s forwards;
}
















/* Animación de aparición */
@keyframes fadeIn {
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
}

/* Animación de desaparición */
@keyframes fadeOut {
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
}


#heart-animation {
position: fixed;
text-align: center;
z-index: 100;
display: none;
}


.heart-text {
font-size: 2em;
font-weight: bold;
color: pink;
opacity: 0;
transform: scale(0.5);
animation: textAppear 1.5s ease-out forwards 1s;
}

@keyframes crash {
0% { transform: translateY(-100vh) scale(0.5); opacity: 1; }
70% { transform: translateY(10vh) scale(1.2); }
100% { transform: translateY(0) scale(1); opacity: 1; }
}

@keyframes textAppear {
0% { opacity: 0; transform: scale(0.5); }
100% { opacity: 1; transform: scale(1); }
}

.show {
display: block !important;
}




.background-text {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
font-size: 20vw; /* Escala el tamaño de la letra dinámicamente */
font-weight: bold;
text-transform: uppercase;
opacity: 0.1; /* Reduce la visibilidad */
color: rgb(255, 255, 255);
white-space: nowrap;
z-index: -1;
display: flex;
flex-wrap: wrap;
align-content: start;
}

.background-text span {
width: 100%;
text-align: left;
padding-left: 0vw; /* Mueve el texto desde la izquierda */
line-height: 1; /* Reduce el espacio entre líneas */
}
.image-container {
  width: 80%;
  max-width: 300px;
  border: 5px solid white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-in-out;
}
.image-container img {
  width: 100%;
  display: block;
}
.container {
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-in-out;
  margin-top: 20px;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}
h1 {
  font-size: 1.8rem;
  color: #d63384;
}
.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
#yes-button {
  background: #ff4081;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
}
#yes-button:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(255, 64, 129, 0.5);
}
#no-button {
  background: #666;
  color: white;
  position: relative;
}
#animation-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 192, 203, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
  transform: scale(0);
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}
.show {
  transform: scale(1);
  opacity: 1;
}
.heart {
  position: absolute;
  bottom: 0;
  left: 50%;
  font-size: 5rem;
  color: #ff4081;
  animation: floatUp 2s infinite ease-in-out;
}
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}
.heart-crash img{
width: 7rem;
height: auto;
margin-top: 10px;
}
.love-letter {
  width: 90%;
  max-width: 400px;
  background: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
  display: none;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
.love-letter.show-letter {
  display: block;
  opacity: 1;
  transform: translateY(0);
}






/* Efecto de aparición y desaparición para el texto */
.heart-crash {
  font-size: 5rem;
  color: #000000;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeInOut 11s ease-in-out forwards; /* Animación de aparición y desaparición */
  text-shadow: 2px 2px 5px rgba(255, 0, 100, 0.4);
}

/* Animación de aparición y desaparición */
@keyframes fadeInOut {
  0% {
      opacity: 0;
      transform: translateY(-30px); /* Comienza desfasado */
  }
  50% {
      opacity: 1;
      transform: translateY(0); /* Alcanza su posición */
  }
  100% {
      opacity: 0;
      transform: translateY(30px); /* Se va desfasando hacia abajo */
  }
}

/* Efecto de transición para las palabras */
.heart-crash span {
  display: inline-block;
  opacity: 0;
  transform: translateX(-50px);
  animation: wordEffect 1s forwards;
  animation-delay: 1s; /* Retardo para que las palabras se muevan después */
}

/* Efecto de las palabras que aparecen una por una */
@keyframes wordEffect {
  0% {
      opacity: 0;
      transform: translateX(-50px);
  }
  100% {
      opacity: 1;
      transform: translateX(0);
  }
}


.hidden {
  display: none;
}
.love-letter {
  background: #ffffff;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  position: relative;
  box-shadow: 0 0 15px rgba(255, 0, 100, 0.4);
  font-family: "Comic Sans MS", cursive;
  animation: fadeIn 1s ease-in-out;
  display: none; /* Aseguramos que la carta no se vea hasta que se active */
}

/* Estilo para el texto */
.heart-text {
  font-size: 25px;
  color: #ff4081;
  text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.4);
}

/* Esquinas con detalles románticos 
.love-letter::before,
.love-letter::after {
  content: "❤️";
  position: absolute;
  font-size: 30px;
  color: #ff4081;
}

.love-letter::before {
  top: -15px;
  left: -15px;
}

.love-letter::after {
  bottom: -15px;
  right: -15px;
}
*/
/* Animación de aparición */
@keyframes fadeIn {
  from {
      opacity: 0;
      transform: scale(0.8);
  }
  to {
      opacity: 1;
      transform: scale(1);
  }
}

/* Animación de aparición de la carta */
.show-letter {
  display: block;
  animation: fadeIn 1s ease-in-out;
}










@font-face {
  font-family: 'noche';
  src: url('Neigh DEMO.otf') format('opentype');
}

@font-face {
  font-family: '2';
  src: url('Glacial Indifference Bold.otf') format('opentype');
}
button {
font-family: noche;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 22px 20px 22px;
  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: #e8e8e8;
  border-color: #ffe2e2;
  border-style: solid;
  border-width: 9px;
  border-radius: 35px;
  transition: transform 400ms cubic-bezier(.68,-0.55,.27,2.5), 
  border-color 400ms ease-in-out,
  background-color 400ms ease-in-out;
  word-spacing: -2px;
}

@keyframes movingBorders {
  0% {
    border-color: #fce4e4;
  }

  50% {
    border-color: #ffd8d8;
  }

  90% {
    border-color: #fce4e4;
  }
}

button:hover {
  background-color: #eee;
  transform: scale(105%);
  animation: movingBorders 3s infinite;
}

.filled,
.empty {
  fill: rgb(255, 110, 110);
  transition: opacity 100ms ease-in-out;
}

.filled {
  position: absolute;
  opacity: 0;
}

@keyframes beatingHeart {
  0% {
    transform: scale(1);
  }

  15% {
    transform: scale(1.15);
  }

  30% {
    transform: scale(1);
  }

  45% {
    transform: scale(1.15);
  }

  60% {
    transform: scale(1);
  }
}

button:hover .empty {
  opacity: 0;
}

button:hover .filled {
  opacity: 1;
  animation: beatingHeart 1.2s infinite;
}
