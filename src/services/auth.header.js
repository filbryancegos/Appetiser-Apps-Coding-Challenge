export default function authHeader() {
	const token = localStorage.getItem('token')
	if (token) {
		console.log("eking");
		return { 
			Authorization: `Bearer ${token}`,
			Accept: 'application/json'
		};
	} else {
		return {
			Accept: 'application/json',
		};
	}
}