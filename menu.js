document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  let menuVisible = false;
  let menuTimeout;
  
  // Fonction pour afficher le menu
  function showMenu() {
    menu.classList.remove('menu-hidden');
    menu.classList.add('menu-visible');
    menuVisible = true;
  }
  
  // Fonction pour cacher le menu
  function hideMenu() {
    menu.classList.remove('menu-visible');
    menu.classList.add('menu-hidden');
    menuVisible = false;
  }
  
  // Événement au clic sur l'icône du menu
  menuIcon.addEventListener('click', function() {
    if (menuVisible) {
      hideMenu();
    } else {
      showMenu();
    }
  });
  
  // Événement au survol de l'icône du menu
  menuIcon.addEventListener('mouseenter', function() {
    clearTimeout(menuTimeout);
    showMenu();
  });
  
  // Événement au survol du menu
  menu.addEventListener('mouseenter', function() {
    clearTimeout(menuTimeout);
  });
  
  // Événement lorsque la souris quitte l'icône du menu
  menuIcon.addEventListener('mouseleave', function() {
    menuTimeout = setTimeout(function() {
      if (!menu.matches(':hover')) {
        hideMenu();
      }
    }, 300);
  });
  
  // Événement lorsque la souris quitte le menu
  menu.addEventListener('mouseleave', function() {
    menuTimeout = setTimeout(hideMenu, 300);
  });
  
  // Fermer le menu si on clique ailleurs sur la page
  document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target) && menuVisible) {
      hideMenu();
    }
  });
});
