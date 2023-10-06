<?php
  $json = file_get_contents('scripts/projects.json');
  $data = json_decode($json, true);
  
  $options = $data['options'];
  $projects = $data['projects'];
  
  $selectedOption = $_GET['option'];
  
  // Filtrer les projets en fonction de l'option sélectionnée
  $filteredProjects = array_filter($projects, function($project) use ($selectedOption) {
    return $project['filter'] == $selectedOption;
  });
  
  shuffle($filteredProjects);
  
  for($i = 0; $i < 47; $i++){
    if (!empty($filteredProjects[$i])) {
      $project = $projects[$i];
      $option = $project['filter'];
      $id = $project['id'];
      $step = $project['steps'][0];
      $img = $step['img'];
      $img2x = $step['img2x'];
      $place = $i + 1;
      ?>
        <div class="grid__item <?php echo "grid__item--".$place ?>">
          <img
          src="<?php echo $img ?>"
          srcset="<?php echo $img2x ?>"
          alt=""
          class="grid__img"
          data-id="<?php echo $id; ?>"
          data-option="<?php echo $option ?>"
          >
        </div>
      <?php
    }
  }
?>
