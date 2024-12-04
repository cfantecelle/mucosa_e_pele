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
document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length / 2; // Considera as imagens duplicadas
    let index = 0;
  
    // Função para mostrar a próxima imagem
    function showNextImage() {
      // Atualiza o índice
      index++;
  
      // Verifica se atingiu a última imagem
      if (index >= totalImages) {
        // Faz o reset do carrossel para o início
        carouselImages.style.transition = "none"; // Remove a transição
        carouselImages.style.transform = `translateX(0)`; // Reseta o carrossel
        index = 0; // Reseta o índice para reiniciar o ciclo
  
        // Reaplica a transição após um pequeno delay
        setTimeout(function () {
          carouselImages.style.transition = "transform 0.5s ease-in-out"; // Reaplica a transição suave
        }, 50); // Pequeno delay para garantir o reset da transição
      }
  
      // Move o carrossel para a próxima imagem
      const offset = index * -100; // Move o carrossel para a próxima posição
      carouselImages.style.transform = `translateX(${offset}%)`;
    }
  
    // Ciclo automático a cada 3 segundos
    setInterval(showNextImage, 3000);
  });
      
