<template>
  <div class="home"> <!-- primer izgleda jedne galerije -->
    
    <ul>
      <a href="https://www.google.com">
        <li>
          <div class="card" style="width: 18rem;">
            <img src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/671589/2017-10best-cars-the-best-cars-for-sale-in-america-today-feature-car-and-driver-photo-672522-s-original.jpg?resize=768:*" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">opis galerije</p>
            <p></p>
            </div>
          </div>
        </li>
      </a>
    </ul>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
ul {
  list-style-type:none;
}
</style>
