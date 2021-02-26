export const getters = {
    activeUser: (state) => state.activeUser,
    isAuthenticated: (state) => !!state.token,
};