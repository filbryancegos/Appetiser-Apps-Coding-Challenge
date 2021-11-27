import AuthService from '../services/auth.service';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    isLogin: localStorage.getItem('isLoggedin') || ''
}

const getters = {
    isToken: state => state.token,
    isLogedin: state => state.isLogin
}

const actions = {
    login({commit}, user) {
        return AuthService.login(user).then(
            response => {
            localStorage.setItem('token', response.data.data.access_token);
            localStorage.setItem('isLoggedin', 'isLoggedin');
            commit('auth_success', response.data)
            commit('auth_login', true)
            return Promise.resolve(response.data);
        },
        error => {
            commit('auth_error')
            return Promise.reject(error);
        });
    },
    register({commit}, user) {
        return AuthService.register(user).then(
        response => {
            localStorage.setItem('token', response.data.data.access_token);
           
            commit('auth_success', response.data)
            return Promise.resolve(response.data);
        },
        error => {
            commit('auth_error')
            return Promise.reject(error);
        }
    )},
    verify({commit}, code) {
        console.log(commit);
        return AuthService.verify(code).then(
            response => {
                console.log(response);
                commit('auth_login', true)
                return Promise.resolve(response.data);
            },
            error => {
                return Promise.reject(error);
            }
    )},
    logout({commit}) {
		AuthService.logout()
        commit('auth_logout')
        commit('auth_login', false)
        localStorage.setItem('isLoggedin', '');
	},
}

const mutations = {
    auth_success(state, response){
		state.token = response.data.access_token
		state.user = response.data.user
	},
    auth_login(state, islogin){
        state.isLogin = islogin
    },
    auth_error(state){
		state.status = 'error'
	},
    auth_logout(state){
        state.token = ''
		state.user = ''
    }
}

export default {
    state,
	getters,
	actions,
	mutations
}