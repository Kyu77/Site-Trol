document.getElementById('button-62').addEventListener('click', function() {
    const poop = document.getElementById('poop');
    
    // Vérifie si l'animation est déjà active
    if (poop.classList.contains('dancing')) {
        poop.classList.remove('dancing'); // Arrête la danse
    } else {
        poop.classList.add('dancing'); // Lance la danse
    }
  });