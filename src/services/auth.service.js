import axios from 'axios';
import AuthHeader from './auth.header';
const API_URL = 'https://api.baseplate.appetiserdev.tech/api/v1/auth';

class AuthService {
	login(user) {
		return axios
		.post(`${API_URL}/login`, user)
		.then(response => {
		return response;
		});
	}
	register(user) {
		return axios
		.post(`${API_URL}/register`, user)
	}
	verify(data) {
		return axios
		.post(`${API_URL}/verification/verify`, data, { headers: AuthHeader() })
	}
	logout() {
		localStorage.removeItem('token')
	}
  }

  export default new AuthService();