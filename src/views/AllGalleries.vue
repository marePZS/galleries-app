<template>
  <div>
    <single-gallery />
  </div>
</template>

<script>
import SingleGallery from '../components/SingleGallery'

export default {
  
  name: 'AllGalleries',
  components: {SingleGallery},
}
</script>

<style>
ul {
  list-style-type:none;
}
</style>
