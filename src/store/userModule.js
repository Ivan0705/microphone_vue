import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export const userModule = {
    state: () => ({
        users: [],
        isLoading: false,
    }),
    getters: {},
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setIsLoading(state, bool) {
            state.isLoading = bool;
        },
    },
    actions: {
        fetchUsers({commit}) {
            try {
                commit('setIsLoading', true);
                setTimeout(async () => {
                    const response = await axios.get(baseUrl)
                        .catch(err => {
                            commit('setIsLoading', false);
                            console.log(err)
                        });
                    commit('setUsers', response.data);
                    console.log('Response: ', response.data);
                    commit('setIsLoading', true);
                    console.log('Users: ', this.users)
                }, 800);

            } catch (e) {
                console.log('Error:', e);
                commit('setIsLoading', false)
            }finally {
                commit('setIsLoading', false)
            }
        }
    },
    namespaced: true
};
