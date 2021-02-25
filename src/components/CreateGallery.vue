<template>
  <div class="createGallery">
      <form>
            <div class="mb-3">
                <label for="galleryName" class="form-label">Gallery name</label>
                <input type="text" class="form-control" id="galleryName" aria-describedby="">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Gallery description</label>
                <textarea type="text" class="form-control" id="description"></textarea>
            </div>
            <div class="mb-3">
                <label for="imageUrl" class="form-label">Image URL</label>
                <input type="url" class="form-control" id="imageUrl" aria-describedby="">
            </div>
            <button type="submit" class="btn btn-primary">Post</button>
        </form>
  </div>
</template>

<script>
export default {
    name: 'createGallery',
}
</script>

<style>

</style>