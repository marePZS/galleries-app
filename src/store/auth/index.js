import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const token = JSON.parse(localStorage.getItem('token'));

const store = {
    namespaced: true,
    state: {
        token: token,
        activeUser: null,
    },
    actions,
    mutations,
    getters,
};

export default store;