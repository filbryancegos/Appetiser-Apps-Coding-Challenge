import AuthService from '../services/auth.service';

const state = {
    user: {},
    isLogin: localStorage.getItem('login') || '',
    username: localStorage.getItem('user') || '',
}

const getters = {
    isLogedin: state => state.isLogin,
    isUserName: state => state.username,
}

const actions = {
    login({commit}, user) {
        return AuthService.login(user).then(
            response => {
            localStorage.setItem('token', response.data.data.access_token);
            localStorage.setItem('user', response.data.data.user.full_name);
            localStorage.setItem('login', 'is_login');
            commit('auth_success', response.data)
            commit('auth_login', true)
            return Promise.resolve(response.data);
        },
        error => {
            return Promise.reject(error);
        });
    },
    register({commit}, user) {
        return AuthService.register(user).then(
        response => {
            localStorage.setItem('token', response.data.data.access_token);
            commit('auth_success', response.data)
            commit('auth_login', false)
            return Promise.resolve(response.data);
        },
        error => {
            return Promise.reject(error);
        }
    )},
    verify({commit}, code) {
        return AuthService.verify(code).then(
            response => {
                commit('auth_login', false)
                return Promise.resolve(response.data);
            },
            error => {
                return Promise.reject(error);
            }
    )},
    logout({commit}) {
        return AuthService.logout().then(
            response => {
                commit('auth_login', false)
                localStorage.setItem('login', '');
                localStorage.setItem('user', '');
                return Promise.resolve(response.data);
            },
            error => {
                console.log(error.response);
                return Promise.reject(error);
            }
            )
	},
}

const mutations = {
    auth_success(state, response){
		state.user = response.data.user
        state.username = response.data.user.full_name
	},
    auth_login(state, islogin){
        state.isLogin = islogin
    }
}

export default {
    state,
	getters,
	actions,
	mutations
}