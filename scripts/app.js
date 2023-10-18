"use strict";

var projects;

fetch('scripts/projects.json')
  .then(response => response.json())
  .then(data => {
    const options = data['options'];
    console.info('%cToutes les options enregistrées',
    "color: darkslategray; font-weight:800;text-transform: uppercase;padding-top:20px"
    );
    console.table(options);

    const programs = data['programs'];
    console.info('%cTous les programmes enregistrés',
    "color: darkslategray; font-weight:800;text-transform: uppercase;padding-top:20px"
    );
    console.table(options);

    const socials = data['socials'];
    console.info('%cTous les réseaux sociaux enregistrés',
    "color: darkslategray; font-weight:800;text-transform: uppercase;padding-top:20px"
    );
    console.table(socials);

    projects = data['projects'];
    console.info('%cTous les projets enregistrés',
    "color: darkslategray; font-weight:800;text-transform: uppercase;padding-top:20px"
    );
    console.table(projects);

    const gridContainer = document.querySelector(".container");

    function generateGrid(filteredProjects) {
      shuffle(filteredProjects);

      for (let i = 0; i < 47; i++) {
        if (filteredProjects[i]) {
          // Petite animation d'apparition progressive, mais handleimageclick ne marche plus :(
          // setTimeout(() => {
            let project = filteredProjects[i];
            let option = project.option;
            let id = project.id;
            let step = project.steps[0];
            let img = step.img;
            let img2x = step.img2x;
            let alt = step.title;
            let place = i + 1;
      
            let div = document.createElement('div');
            div.classList.add('grid__item');
            div.classList.add('grid__item--' + place);
      
            let image = document.createElement('img');
            image.src = img;
            image.srcset = img2x;
            image.alt = alt;
            image.classList.add('grid__img');
            image.dataset.id = id;
            image.dataset.option = option;
      
            div.appendChild(image);
      
            gridContainer.appendChild(div);
          // }, i * 100);
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
              console.info('%cProjet sélectionné',
              "color: darkslategray; font-weight:800;text-transform: uppercase;padding-top:20px"
              );
              console.table(projectData);

            }
          }
    
          projectPage.classList.remove("project--hidden");
          
          // AFFICHAGE INFOS
          if (projectData) {
            // OPTION
            var projectOption = document.getElementById('projectOption');
            let matchingOption = null;
            for (let i = 0; i < options.length; i++) {
                if (options[i].id === projectData.option) {
                  matchingOption = options[i].title;
                };
            };
            if (matchingOption) {
              projectOption.innerText = matchingOption;
            }else{
              projectOption.innerText = "Option";
            };
    
            // TYPE DE PROJET (TFA, TFE, ...)
            var projectType = document.getElementById('projectType');
            if(projectData.type){
              projectType.innerText = projectData.type;
            }else{
              projectType.innerText = "Type de projet";
            };
    
            // ANNÉE
            var projectYear = document.getElementById('projectYear');
            if(projectData.year){
              projectYear.innerText = projectData.year;
            }else{
              projectYear.innerText = "20XX";
            };
    
            // DURÉE
            var projectDuration = document.getElementById('projectDuration');
            if(projectData.duration){
              projectDuration.innerText = projectData.duration;
            }else{
              projectDuration.innerText = "Temps pris à réaliser";
            };
    
            // TITRE
            var projectTitle = document.getElementById('projectTitle');
            if(projectData.title){
              projectTitle.innerText = projectData.title;
            }else{
              projectTitle.innerText = "Titre du projet";
            };
    
            // DESCRIPTION
            var projectDesc = document.getElementById('projectDesc');
            if(projectData.desc){
              projectDesc.innerText = projectData.desc;
            }else{
              projectDesc.innerText = "";
            };
            
            // PROGRAMMES
            if (projectData.programs) {
              // NE LIRA PAS PLUS QUE 4 PROGRAMMES AFIN DE PAS CASSER TOUT/AVOIR DES OVERFLOWS
              projectData.programs.slice(0, 4).forEach(programId => {
                  // Cherche le programme correspondant
                  let matchingProgram = null;
                  for (let i = 0; i < programs.length; i++) {
                      if (programs[i].id === programId) {
                          matchingProgram = programs[i];
                      };
                  };
          
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
            
            // TEAM
            if (projectData.team) {
              const teamData = projectData.team;
              var projectTeam = document.getElementById('projectTeam');
            
              // NE LIRA PAS PLUS QUE 4 MEMBRES AFIN DE PAS CASSER TOUT/AVOIR DES OVERFLOWS
              teamData.slice(0, 4).forEach(person => {
                const projectPerson = document.createElement('details');
                projectPerson.classList.add('project__person');
              
                const projectSummary = document.createElement('summary');
                projectSummary.classList.add('project__summary', 'text', 'text--bold');
                projectSummary.innerText = person.name;
                projectPerson.appendChild(projectSummary);

                // Vérifie qu'il y ai au moins 1 info >:(
                if(
                  (person.app !== null && person.app !== undefined && person.app !== '') &&
                  (person.social !== null && person.social !== undefined && person.social !== '') &&
                  (person.tasks !== null && person.tasks !== undefined && person.tasks !== '')
                ){
                  const projectRoll = document.createElement('div');
                  projectRoll.classList.add('project__roll');
                  projectPerson.appendChild(projectRoll);

                  // Affichage Réseau Social étudiant
                  const projectSocial = document.createElement('div');
                  projectSocial.classList.add('project__socialmed');

                  let matchingSocial = null;
                  for (let i = 0; i < socials.length; i++) {
                      if (socials[i].id === person.app) {
                        matchingSocial = socials[i];
                      };
                  };
                  if (matchingSocial) {
                    const projectSocialSVG = document.createElement('img');
                    projectSocialSVG.src = "assets/svg_socials/" + matchingSocial.id + ".svg";
                    projectSocialSVG.alt = matchingSocial.name;
                    projectSocialSVG.classList.add('svg__social');
                    projectSocial.prepend(projectSocialSVG);
                  }else{
                    // S'il n'y a pas le SVG, pour tout de même mettre en avant le RS de l'étudiant, j'écris en toute lettres le RS
                    const projectSocialMissingSVG = document.createElement('small');
                    projectSocialMissingSVG.classList.add('text', 'text--small', 'text--bold');
                    const projectSocialMissingAppLow = person.app;
                    const projectSocialMissingApp = projectSocialMissingAppLow.charAt(0).toUpperCase() + projectSocialMissingAppLow.slice(1);
                    projectSocialMissingSVG.innerText = projectSocialMissingApp;
                    projectSocial.prepend(projectSocialMissingSVG);
                  };

                  const projectSocialTitle = document.createElement('small');
                  projectSocialTitle.classList.add('text', 'text--small');
                  projectSocialTitle.innerText = "@" +  person.social;
                  projectSocial.appendChild(projectSocialTitle);

                  projectPerson.appendChild(projectSocial);

                  // Affichage Liste des rôles pris
                  const projectTask = document.createElement('ul');
                  projectTask.classList.add('project__task');
                  const projectTaches = person.tasks;
                  // NE LIRA PAS PLUS QUE 9 RÔLES AFIN DE PAS CASSER TOUT/AVOIR DES OVERFLOWS
                  projectTaches.slice(0, 9).forEach(task => {
                    const projectRole = document.createElement('li');
                    projectRole.classList.add('project__role', 'text');
                    projectRole.innerText = task;
                    projectTask.appendChild(projectRole);
                  })
                  projectPerson.appendChild(projectTask);
                
                  
                }else{
                  // const projectSummary = document.querySelector('.project__summary');
                  console.log(projectSummary);
                  projectSummary.classList.add('nodetails');
                }

                projectTeam.appendChild(projectPerson);
              });

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
            };

            // STEPS
            if (projectData.steps) {
              const swiperWrapper = document.getElementById('swiperWrapper');
              const projectSteps = projectData.steps;
              projectSteps.forEach(step =>{
                const swiperSlide = document.createElement('div');
                swiperSlide.classList.add('swiper-slide', 'project__slide');

                const projectStep = document.createElement('div');
                projectStep.classList.add('project__step');
                swiperSlide.appendChild(projectStep);

                const projectPres = document.createElement('div');
                projectPres.classList.add('project__pres')
                projectStep.appendChild(projectPres);

                const projectPic = document.createElement('img');
                projectPic.classList.add('project__pic');
                projectPic.src = step.img;
                projectPic.srcset = step.img2x;
                projectPic.alt = step.name;
                projectPres.appendChild(projectPic);

                const projectEl = document.createElement('small');
                projectEl.classList.add('project__el', 'text');
                if(step.name){
                  projectEl.innerText = step.name;
                }else{
                  projectEl.innerText = "Étape";
                };
                projectPres.appendChild(projectEl);

                swiperWrapper.appendChild(swiperSlide);
              })
            };
          };
        });
      });
      
      var projectClose = document.querySelector('#close');
      projectClose.addEventListener('click', (e) =>{
        projectPage.classList.add('project--hidden');
        
        var programEl = document.querySelectorAll('.project__progel');
        programEl.forEach(el => el.remove());

        var projectPerson = document.querySelectorAll('.project__person');
        projectPerson.forEach(el => el.remove());

        var projectSteps = document.querySelectorAll('.project__slide');
        swiper.slideTo(0);
        projectSteps.forEach(el => el.remove());
      });

      // let timeoutId;

      // function reinitialiserTimeout() {
      //   clearTimeout(timeoutId); 
      //   timeoutId = setTimeout(() => {
      //     const element = document.getElementById('votreElement'); // Remplacez "votreElement" par l'ID de votre élément
      //     element.classList.remove('votreClasse'); // Remplacez "votreClasse" par le nom de la classe que vous souhaitez retirer
      //   }, 30000); // 30 secondes
      // }

      // // Écouteur d'événement pour le clic
      // document.addEventListener('click', () => {
      //   reinitialiserTimeout(); // Réinitialiser le timeout à chaque clic
      // });

      // projectPage.addEventListener(('click', () =>{

      // }))
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
              return project.option === option;
            });
          }
    
          var gridContainer = document.querySelector(".container");
          gridContainer.innerHTML = '';
    
          generateGrid(filteredProjects);
        }
      }
    });

    generateGrid(projects);

    // handleImageClicks();
  })
  .catch(error => {
    console.error('Erreur :', error);
  });

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
};



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
