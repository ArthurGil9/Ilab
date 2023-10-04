<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
          
      <!-- CHANGE HERE -->
    <meta name="description" content="Hey there! I'm a Web Design student at Albert Jacquard University College in Belgium! ✨">
          
    <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@lindsay_colard">
    <meta name="twitter:creator" content="@lindsay_colard">
    <meta name="twitter:title" content="Lindsay Colard">
      <!-- CHANGE HERE -->
    <meta name="twitter:description" content="Hey there! I'm a Web Design student at Albert Jacquard University College in Belgium! ✨">
    <!-- Twitter summary card with large image must be at least 280x150px -->
    <meta name="twitter:image" content="https://lindsay-colard.be/assets/images/meta-pic.png">
          
    <!-- Open Graph data -->
      <!-- CHANGE HERE -->
    <meta property="og:site_name" content="Lindsay Colard">
    <meta property="og:title" content="Lindsay Colard">
    <meta property="og:description" content="Hey there! I'm a Web Design student at Albert Jacquard University College in Belgium! ✨">
    <meta property="og:type" content="website">
      
      <!-- CHANGE HERE -->
    <meta property="og:url" content="https://lindsay-colard.be">
    <meta property="og:image" content="https://lindsay-colard.be/assets/images/meta-pic.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="675">
      
      <!-- CHANGE HERE -->
    <title>iLab</title>

    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon.ico">
    
    <link rel="stylesheet" href="https://use.typekit.net/mcs5uqx.css">

    <link rel="stylesheet" href="styles/app.css">

    <link rel="stylesheet" href="styles/swiper-bundle.min.css"/>
    <script src="scripts/plugins/swiper-bundle.min.js"></script>

    <script src="scripts/app.js" defer></script>
    <script src="scripts/swiper.js" defer></script>
  </head>
  <body>
    <main>
      <article class="project">
        <div class="project__context">
          <div class="project__details">
            <p class="text">Option</p>
            <p class="text">Travail de fin d'études 2023</p>
            <p class="text">(SVG) Temps</p>
          </div>

          <div class="project__desc">
            <h2 class="title">Titre du projet</h2>
            <p class="text text--big">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          
          <ul class="project__proglist">
            <li class="project__progel text">(SVG) Logiciel</li>
            <li class="project__progel text">(SVG) Logiciel</li>
            <li class="project__progel text">(SVG) Logiciel</li>
            <li class="project__progel text">(SVG) Logiciel</li>
          </ul>

          <div class="project__team">
            <details>
              <summary class="text text--bold">Personne Lambda</summary>

              <div class="project__roll">
                <small class="text text--small">(SVG) @socialmedia</small>
                <ul class="project__task">
                  <li class="project__role text">Rôle</li>
                  <li class="project__role text">Rôle</li>
                  <li class="project__role text">Rôle</li>
                  <li class="project__role text">Rôle</li>
                  <li class="project__role text">Rôle</li>
                </ul>
              </div>
              
            </details>
            <details>
              <summary class="text text--bold">Personne Lambda</summary>

              <div class="project__roll">
                <small class="text text--small project__socialmed">(SVG) @socialmedia</small>
                <ul class="project__task">
                  <li class="project__role text">Rôle</li>
                  <li class="project__role text">Rôle</li>
                  <li class="project__role text">Rôle</li>
                  <li class="project__role text">Rôle</li>
                  <li class="project__role text">Rôle</li>
                </ul>
              </div>
              
            </details>
          </div>

          <svg class="project__retour" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <defs>
              <style>
                .cls-1 {
                  fill: none;
                  stroke: #090909;
                  stroke-linecap: square;
                  stroke-width: 4px;
                }
              </style>
            </defs>
            <path class="cls-1" d="m2,3v25h25"/>
            <path class="cls-1" d="m4.7,26.38L26.3,3.7"/>
          </svg>
        </div>

        <!-- <div class="project__content">
          <ul class="project__nav">
            <li class="project__navel">BARRE</li>
            <li class="project__navel">BARRE</li>
            <li class="project__navel">BARRE</li>
            <li class="project__navel">BARRE</li>
          </ul>

          <div class="project__step">
            <img src="" alt="" class="project__img">

            <small class="project__el text"></small>
          </div>
        </div> -->

        <!-- Test Swiper -->

        <div class="swiper project__content">

          <div class="swiper-wrapper project__slider">

            <div class="swiper-slide">
              <div class="project__step">
                <img class="project__pic" src="assets/placeholders/placeholder_paysage.jpg" srcset="assets/placeholders/placeholder_paysage@2x.jpg 2x" alt="Ceci est un placeholder en format paysage">
                <small class="project__el text">Etape</small>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="project__step">
                <img class="project__pic" src="assets/placeholders/placeholder_paysage.jpg" srcset="assets/placeholders/placeholder_paysage@2x.jpg 2x" alt="Ceci est un placeholder en format paysage">
                <small class="project__el text">Etape</small>
              </div>
            </div>
          </div>

          <div class="swiper-pagination"></div>

        </div>
      </article>
    </main>
  </body>
</html>