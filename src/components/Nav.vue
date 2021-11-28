<template>
  <div class="bg-blue-500 px-10 py-4 text-white">
    <div>
        <ul class="space-x-4">
            <div class="flex w-full space-x-4 justify-between">
                <div class="flex w-full space-x-4 justify-end">
                    <li v-if="!isLoggedIn" class="space-x-4 text-base">
                    <router-link :to="{name: 'Login'}">Login</router-link>
                    </li>

                    <li v-if="!isLoggedIn" class="space-x-4 text-base">
                        <router-link :to="{name: 'Register'}">Register</router-link>
                    </li>
                    
                    <li v-if="isLoggedIn" class="space-x-4 text-base">
                        <div @click="logout" class="cursor-pointer block">Logout</div>
                    </li>
                </div>
            </div>
        </ul>
    </div>
</div>
</template>

<script>
export default {
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
			this.$router.push("/login").catch(()=>{});
		}
		if (this.$store.state.auth.isLogin !== '') {
			this.$router.push("/success").catch(()=>{});
		}
	}
}
</script>

<style>

</style>