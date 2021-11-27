<template>
	<div>
		<Nav />
		<div class="px-10 py-8 min-h-screen">
			<router-view></router-view>
		</div>
		<Footer />
	</div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'
export default {
	components: {
		Nav,
		Footer
	},
	computed : {
		isLoggedIn() {
			return this.$store.getters.isLogedin
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('logout')
			.then(() => {
				this.$router.push('/login')
			})
		},
	},
	created() {
		if (this.$store.state.auth.token === '') {
			this.$router.push("/register").catch(()=>{});
		}
		if (this.$store.state.auth.isLogin !== '') {
			this.$router.push("/success").catch(()=>{});
		}
	}
}
</script>

<style>

</style>