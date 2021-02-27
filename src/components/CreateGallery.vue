<template>
  <div class="createGallery">
      <form @submit.prevent='onSubmit'>
            <div class="mb-3">
                <label for="galleryName" class="form-label">Gallery name</label>
                <input v-model="galleryData.name" type="text" class="form-control" id="galleryName" aria-describedby="">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Gallery description</label>
                <textarea v-model="galleryData.description" type="text" class="form-control" id="description"></textarea>
            </div>
            <div class="mb-3">
                <label for="imageUrl" class="form-label">Image URL</label>
                <input v-model="pictureData.imageUrls" type="url" class="form-control" id="imageUrl" aria-describedby="">
            </div>
            <button type="submit" class="btn btn-primary">Post</button>
        </form>
  </div>
</template>

<script>
export default {
    name: 'createGallery',
    data(){
        return{
            galleryData:{
                name: '',
                description: '',
            },
            pictureData:{
                imageUrls: [{url:''}],
            }
        }
    },
    methods: {
        async onSubmit() {
            this.registerFailed = false;
            try {
                await this.register(this.userData);
                this.$router.push('/');
            } catch {
                this.registerFailed = true;
            }
    },
    }
}
</script>

<style>

</style>