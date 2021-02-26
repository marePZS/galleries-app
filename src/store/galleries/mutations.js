export const mutations = {
    setGalleries(state, galleries) {
        state.galleries = galleries;
    },
    deleteGAllery(state, gallery) {
        state.galleries = state.galleries.filter((g) => g.id !== gallery.id);
    },
    setSearchTerm(state, searchTerm) {
        state.searchTerm = searchTerm;
    },
};