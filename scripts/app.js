"use strict";

var projects;

fetch('scripts/projects.json')
  .then(response => response.json())
  .then(data => {
    var options = data['options'];
    console.log(options);
    projects = data['projects'];
    console.log(projects);

    const gridContainer = document.querySelector(".container");
  
    shuffle(projects);
    
    for (let i = 0; i < 47; i++) {
      if (projects[i]) {
          let project = projects[i];
          let option = project.filter;
          let id = project.id;
          let step = project.steps[0];
          let img = step.img;
          let img2x = step.img2x;
          let place = i + 1;
      
          let div = document.createElement('div');
          div.classList.add('grid__item');
          div.classList.add('grid__item--' + place);
      
          let image = document.createElement('img');
          image.src = img;
          image.srcset = img2x;
          image.alt = '';
          image.classList.add('grid__img');
          image.dataset.id = id;
          image.dataset.option = option;
      
          div.appendChild(image);
      
          gridContainer.appendChild(div);
      }
    }

    handleImageClicks();
  })
  .catch(error => {
    console.error('Erreur :', error);
  });


  // Mélanger les éléments dans le tableau projects
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }


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