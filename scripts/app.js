"use strict";

var projects;

fetch('scripts/projects.json')
  .then(response => response.json())
  .then(data => {
    const options = data['options'];
    console.log(options);
    const programs = data['programs'];
    console.log(programs);
    projects = data['projects'];
    console.log(projects);

    const gridContainer = document.querySelector(".container");

    function generateGrid(filteredProjects) {
      shuffle(filteredProjects);

      for (let i = 0; i < 47; i++) {
        if (filteredProjects[i]) {
          let project = filteredProjects[i];
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
      };

      handleImageClicks();
    }

    function handleImageClicks() {
      var projectPage = document.querySelector('#projectPage');
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
    
          projectPage.classList.remove("project--hidden");
          
          // AFFICHAGE INFOS
          if (projectData) {
            // OPTION
            if(projectData.option){
              var projectOption = document.getElementById('projectOption');
              projectOption.innerText = projectData.option;
            }
    
            // TYPE DE PROJET (TFA, TFE, ...)
            if(projectData.type){
              var projectType = document.getElementById('projectType');
              projectType.innerText = projectData.type;
            }
    
            // ANNÉE
            if(projectData.year){
              var projectYear = document.getElementById('projectYear');
              projectYear.innerText = projectData.year;
            }
    
            // DURÉE
            if(projectData.duration){
              var projectDuration = document.getElementById('projectDuration');
              projectDuration.innerText = projectData.duration;
            }
    
            // TITRE
            if(projectData.title){
              var projectTitle = document.getElementById('projectTitle');
              projectTitle.innerText = projectData.title;
            }
    
            // DESCRIPTION
            if(projectData.desc){
              var projectDesc = document.getElementById('projectDesc');
              projectDesc.innerText = projectData.desc;
            }
            
            // PROGRAMMES
            if(projectData.programs){
              projectData.programs.forEach(program => {
                // Vérifie si l'élément a un correspondant dans programs
                const matchingProgram = programs.find(element => element.id === program);
                
                if (matchingProgram) {
                  const programEl = document.createElement('li');
                  programEl.classList.add('project__progel', 'text');
                  
                  // Crée une nouvelle image
                  const progImg = document.createElement('img');
                  progImg.src = "assets/svg_programs/" + matchingProgram.id + ".svg";
                  progImg.alt = matchingProgram.alt;
                  progImg.classList.add('svg__progel');
                  programEl.appendChild(progImg);
                  
                  // Crée un nouveau texte avec le title du programme
                  const progText = document.createTextNode(matchingProgram.name);
                  programEl.appendChild(progText);
                  
                  var projectPrograms = document.getElementById('projectPrograms');
                  projectPrograms.appendChild(programEl);
                }
              });
            };
          };
        });
      });
      
      var projectClose = document.querySelector('#close');
      projectClose.addEventListener('click', (e) =>{
        projectPage.classList.add('project--hidden');
      })
    };

    const swiper2 = new Swiper('.swiper--2', {
      direction: 'vertical',
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
    
      on: {
        slideChangeTransitionEnd: function () {
          var activeSlide = this.slides[this.activeIndex];
          var option = activeSlide.getAttribute('data-option');
    
          var filteredProjects;
    
          if (option === 'all') {
            filteredProjects = projects;
          } else {
            filteredProjects = projects.filter(function(project) {
              return project.filter === option;
            });
          }
    
          var gridContainer = document.querySelector(".container");
          gridContainer.innerHTML = '';
    
          generateGrid(filteredProjects);
        }
      }
    });

    generateGrid(projects);

    handleImageClicks();
  })
  .catch(error => {
    console.error('Erreur :', error);
  });

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const details = document.querySelectorAll('.project__person');

details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});

const swiper = new Swiper(".swiper", {
  lazy: true,
  direction: "vertical",
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -1],
    },
    next: {
      translate: [0, "100%", 0],
    },
  },
});