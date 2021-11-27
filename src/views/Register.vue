<template>
    <div>
        <h1 class="text-black text-3xl text-center">Register</h1>
            <div class="w-full sm:w-2/4 m-auto mt-8">
                <form @submit.prevent="onRegister">
                    <label class="block mb-6">
                        <span
                        :class="[errorsMessages.email ? 'text-red-500' : 'text-gray-700']"  
                        class="text-base">Email</span>
                        <input 
                        v-model="formData.email"
                        type="email" 
                        class="mt-1 block w-full rounded-sm" placeholder=""
                        :class="{ 'border-red-500': has_error && errorsMessages.email }" 
                        >
                       <span class="help-block text-red-500 block mt-2" v-if="has_error && errorsMessages.email">{{ errorsMessages.email }}</span>
                    </label>
                    <label class="block mb-6">
                        <span 
                         :class="[errorsMessages.full_name ? 'text-red-500' : 'text-gray-700']"  
                        class="text-gray-700 text-base">Full Name</span>
                        <input 
                         v-model="formData.full_name"
                        type="text" 
                        class="mt-1 block w-full rounded-sm" placeholder="">
                        <span class="help-block text-red-500 block mt-2" v-if="has_error && errorsMessages.full_name">{{ errorsMessages.full_name }}</span>
                    </label>
                    <label class="block mb-6">
                        <span 
                         :class="[errorsMessages.password ? 'text-red-500' : 'text-gray-700']"  
                        class="text-gray-700 text-base">Password</span>
                        <input
                         v-model="formData.password" 
                        type="password" 
                        class="mt-1 block w-full rounded-sm" placeholder="">
                        <span class="help-block text-red-500 block mt-2" v-if="has_error && errorsMessages.password">{{ errorsMessages.password }}</span>
                    </label>
                    <label class="block mb-6">
                        <span 
                        :class="[errorsMessages.password_confirmation ? 'text-red-500' : 'text-gray-700']" 
                        class="text-gray-700 text-base">Password Confirmation</span>
                        <input
                        v-model="formData.password_confirmation"  
                        type="password" 
                        class="mt-1 block w-full rounded-sm" placeholder="">
                         <span class="help-block text-red-500 block mt-2" v-if="has_error && errorsMessages.password_confirmation">{{ errorsMessages.password_confirmation }}</span>
                    </label>
                    <div class="flex mt-4">
                        <button class="bg-blue-400 hover:bg-blue-500 py-3  text-white w-full rounded-sm text-lg font-bold">Register</button>
                    </div>
                    <div class="mt-4">
                        <div class="text-lg font-bold text-center flex justify-center items-center">
                            <span>Already have an account?</span>
                            <router-link :to="{name: 'Login'}">
                                <span class="text-blue-500 hover:underline cursor-pointer ml-1">Login</span>
                            </router-link>
                        </div>
                    </div>
                </form>
            </div>
    </div>
  
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            formData: {
                email: '',
                full_name: '',
                password: '',
                password_confirmation: ''
            },
            errorsMessages: {
                email: '',
                full_name: '',
                password: '',
                password_confirmation: ''
            },
			has_error: false,
            email: '',
            full_name: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {
        onRegister() {
            this.$store.dispatch('register', this.formData)
            .then(() => {
                this.$router.push('/verification')
                this.clearFields()
            },
            (error) => {
                this.resetErrors()
                const errors = error.response.data.errors
                this.has_error = true
                Object.keys(errors).forEach(err => {
                    const errorKey = err
                    this.errorsMessages[err] = errors[errorKey][0]
                })
            });
        },
        clearFields() {
            this.formData.email = ''
            this.formData.full_name = ''
            this.formData.password = ''
            this.formData.password_confirmation = ''
        },
        resetErrors() {
            this.errorsMessages.email = '',
            this.errorsMessages.full_name = '',
            this.errorsMessages.password = '',
            this.errorsMessages.password_confirmation = ''
        }
    }
}
</script>

<style>

</style>