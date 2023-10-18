<?php
$json = file_get_contents('scripts/projects.json');
$data = json_decode($json, true);

$options = $data['options'];
$programs = $data['programs'];
$projects = $data['projects'];
?>

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

    <link rel="stylesheet" href="styles/swiper-bundle.min.css"/>
    <script src="scripts/plugins/swiper-bundle.min.js"></script>

    <link rel="stylesheet" href="styles/app.css">

    <script src="scripts/app.js" defer></script>
  </head>
  <body>
    <main>
      <section class="home">

        <!-- Slider main container -->
          <div class="swiper--2">
            <!-- Additional required wrapper -->
            <ul class="swiper-wrapper option__list">
              <!-- Slides -->
              <?php foreach($options as $option){
                $optionid = $option['id'];
                $optiontitle = $option['title'];
                ?>

                <li class="swiper-slide option__el" data-option="<?php echo $optionid ?>"><?php echo $optiontitle ?></li>

              <?php } ?>
            </ul>
          </div>

        <div class="container">
        </div>
      </section>

      <article id="projectPage" class="project project--hidden">
        <div class="project__context">
          <div class="project__details">
            <p id="projectOption" class="text"></p>
            <p class="text"><span id="projectType"></span> <span id="projectYear"></span></p>
            <div class="project__details--timing">
              <svg class="svg__hourglass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.15 18">
                <path class="svg__hourglass--stroke" d="M1.8 15.79v-.96c0-2.97 1.78-3.78 2.98-4.34.86-.4 1.49-.69 1.29-1.45v-.02c-.25-.88-.95-1.22-1.75-1.6-1.15-.56-2.51-1.21-2.51-4.06V2.21M12.41 2.21v1.15c0 2.84-1.36 3.5-2.51 4.06-.79.38-1.49.72-1.74 1.58v.02c-.22.78.41 1.07 1.28 1.47 1.21.56 2.98 1.37 2.98 4.34v.96"/>
                <path class="svg__hourglass--fill" d="M13.87 15.51H.28c-.15 0-.28.13-.28.28v1.93c0 .15.13.28.28.28h13.58c.15 0 .28-.13.28-.28v-1.93c0-.15-.13-.28-.28-.28ZM13.87 0H.28C.13 0 0 .13 0 .28v1.93c0 .15.13.28.28.28h13.58c.15 0 .28-.13.28-.28V.28c0-.15-.13-.28-.28-.28Z"/>
              </svg>

              <p id="projectDuration" class="text"></p>
            </div>
          </div>

          <div class="project__desc">
            <h2 id="projectTitle" class="project__title title">Titre du projet</h2>
            <p id="projectDesc" class="project__desc text text--big">Description du projet</p>
          </div>
          
          <ul id="projectPrograms" class="project__proglist">
          </ul>

          <div id="projectTeam" class="project__team">
          </div>

          <svg id="close" class="project__retour" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path d="m2,3v25h25"/>
            <path d="m4.7,26.38L26.3,3.7"/>
          </svg>
        </div>

        <div class="swiper project__content">
          <div id="swiperWrapper" class="swiper-wrapper project__slider">
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </article>
    </main>
  </body>
</html>