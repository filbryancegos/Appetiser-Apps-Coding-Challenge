import axios from 'axios';
export default function authHeader() {
	const token = localStorage.getItem('token')

	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
		return { 
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		};
	} else {
		return {
			Accept: 'application/json',
		};
	}
}