"use strict";

var projects;

fetch('scripts/projects.json')
  .then(response => response.json())
  .then(data => {
    projects = data['projects'];
    console.log(projects);

    // Appeler la fonction pour gérer les clics
    handleImageClicks();
  })
  .catch(error => {
    // Gestion des erreurs
    console.error('Erreur :', error);
  });

function handleImageClicks() {
  var images = document.querySelectorAll('.click-image');
  images.forEach(function(image) {
    image.addEventListener('click', function() {
      var dataId = this.getAttribute('data-id');
      var projectData = null;
      // Chercher le projet correspondant dans les données du projet
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === dataId) {
          projectData = projects[i];
          console.log(projectData);
        }
      }
      // Utiliser les données du projet
      if (projectData) {
        // Mettre à jour le contenu de l'élément h2 avec l'ID "title"
        var titleElement = document.getElementById('title');
        titleElement.innerText = projectData.title;
      }
    });
  });
}