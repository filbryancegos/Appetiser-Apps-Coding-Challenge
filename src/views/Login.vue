<template>
    <div>
        <h1 class="text-black text-3xl text-center">Login</h1>
        <div class="w-full sm:w-2/4 m-auto mt-8">
            <div class="text-red-500 text-base font-bold py-2">{{message}}</div>
           <form @submit.prevent="onLogin">
                <label class="block mb-6">
                    <span :class="[errorsMessages.username ? 'text-red-500' : 'text-gray-700']" class="text-base">Username</span>
                    <input
                    v-model="formData.username" 
                    type="email" 
                    :class="{ 'border-red-500': has_error && errorsMessages.username }" 
                    class="mt-1 block w-full rounded-sm" placeholder="">
                    <span class="help-block text-red-500 block mt-2" v-if="has_error && errorsMessages.username">{{ errorsMessages.username }}</span>
                 </label>
                 <label class="block mb-6">
                    <span :class="[errorsMessages.password ? 'text-red-500' : 'text-gray-700']" class="text-base">Password</span>
                    <input
                    v-model="formData.password" 
                    type="password" 
                    :class="{ 'border-red-500': has_error && errorsMessages.password }" 
                    class="mt-1 block w-full rounded-sm" placeholder="">
                    <span class="help-block text-red-500 block mt-2" v-if="has_error && errorsMessages.password">{{ errorsMessages.password }}</span>
                 </label>
                 <div class="flex mt-4">
                     <button class="bg-green-400 hover:bg-green-500 py-3  text-white w-full rounded-sm text-lg font-bold">Login</button>
                 </div>
                 <div class="mt-4">
                    <div class="text-lg font-bold text-center flex justify-center items-center">
                        <span>Don't have an account?</span>
                        <router-link :to="{name: 'Register'}">
                            <span class="text-green-500 hover:underline cursor-pointer ml-1"> Register</span>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
name: 'Login',
	data() {
		return {
			formData: {
				username: '',
				password: ''
			},
			errorsMessages: {
				username: '',
				password: ''
			},
            message: '',
			has_error: false
		}
	},
	methods: {
        onLogin() {
            this.$store.dispatch('login', this.formData)
            .then(() => {
                this.$router.push('/success')
                this.clearFields()
            },
            (error) => {
                const errors = error.response.data.errors
                this.has_error = true
                this.resetErrors()
                
                if (!errors) {
                    this.message = error.response.data.message
                } else {
                    this.message = ''
                }

                Object.keys(errors).forEach(err => {
                    const errorKey = err
                    this.errorsMessages[errorKey] = errors[errorKey][0]
                })
            });
        },
		clearFields() {
			this.formData.username = ''
			this.formData.password = ''
		},
        resetErrors() {
			this.errorsMessages.username = ''
			this.errorsMessages.password = ''
		}
	}
}
</script>

<style>

</style>