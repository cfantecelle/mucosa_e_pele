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








