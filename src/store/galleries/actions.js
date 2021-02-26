import galleriesService from '../../services/GalleriesService';
export const actions = {
    async getAllGalleries(store) {
        const galleries = await galleriesService.getGalleries(store.state.searchTerm);
        store.commit('setMovies', galleries);
    },
    async deleteGallery(store, gallery) {
        await galleriesService.deleteGallery(gallery.id);
        store.commit('deleteGallery', gallery);
    },
};