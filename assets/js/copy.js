/*Copiar para area de transferencia */

function copyToClipboardWithSnackbar(element) {
    const textToCopy = element.getAttribute('data-copy');
    
    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(textToCopy).then(
      function() {
        // Exibe o snackbar
        const snackbar = document.getElementById('snackbar');
        snackbar.classList.add('show');
        
        // Esconde o snackbar após 3 segundos
        setTimeout(function() {
          snackbar.classList.remove('show');
        }, 3000);
      },
      function(err) {
        alert("Erro ao copiar texto: " + err);
      }
    );
  }

/* Carousel */
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel-images-fp');
  const images = document.querySelectorAll('.carousel-images-fp img');

  // Duplicar as imagens para criar um loop contínuo
  images.forEach(img => {
    const clone = img.cloneNode(true);
    carousel.appendChild(clone); // Adiciona uma cópia da imagem
  });

  let width = 0;
  // Calcular a largura total do carrossel (com todas as imagens)
  images.forEach(img => {
    width += img.offsetWidth + 100; // Considerando o gap de 100px
  });

  // Aplicar a largura total ao container
  carousel.style.width = width * 2 + 'px'; // Duplicando o comprimento do carrossel

  function moveCarousel() {
    let currentTransform = parseInt(carousel.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    let newTransform = currentTransform - (images[0].offsetWidth + 100); // Move uma imagem por vez
    if (newTransform <= -width) {
      newTransform = 0; // Resetar para o início do carrossel
    }
    carousel.style.transform = `translateX(${newTransform}px)`;
  }

  setInterval(moveCarousel, 50); // Move o carrossel a cada 50ms
});








