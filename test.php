<?php
$json = file_get_contents('scripts/projects.json');
$data = json_decode($json, true);

$options = $data['options'];
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
    <script src="scripts/swiper.js" defer></script>
  </head>
  <body>
    <main>
      <section class="home">
        <ul class="option__list">
          <?php foreach($options as $option){
            $optionid = $option['id'];
            $optiontitle = $option['title'];
            ?>

            <li><button class="option__el" data-option="<?php echo $optionid ?>"><?php echo $optiontitle ?></button></li>

          <?php } ?>
        </ul>

        <div class="container">
 
        </div>
      </section>
    

    <article class="project--test">
        <h2 id="title">Projet</h2>
    </article>
    </main>
  </body>
</html>