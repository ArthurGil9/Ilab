"use strict";

var projects;

fetch('scripts/projects.json')
  .then(response => response.json())
  .then(data => {
    projects = data['projects'];
    console.log(projects);

    handleImageClicks();
  })
  .catch(error => {
    console.error('Erreur :', error);
  });

function handleImageClicks() {
  var gridImgs = document.querySelectorAll('.grid__img');
  gridImgs.forEach(function(gridImg) {
    gridImg.addEventListener('click', function() {
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
        // Mettre à jour le contenu
        var titleElement = document.getElementById('title');
        titleElement.innerText = projectData.title;
      }
    });
  });
}