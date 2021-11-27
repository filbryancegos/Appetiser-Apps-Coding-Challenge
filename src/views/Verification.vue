<template>
    <div>
        <h1 class="text-black text-3xl text-center">Verify</h1>
        <div class="w-full sm:w-2/4 m-auto mt-8">
            <div class="text-red-500 text-lg mb-2">{{errorMsg}}</div>
            <form @submit.prevent="onVerify()">
                <label class="block mb-6">
                    <span class="text-gray-700 text-base">Verification Code</span>
                    <input
                    v-model="verification_code" 
                    type="text" 
                    class="mt-1 block w-full rounded-sm" placeholder="">
                </label>
                <div class="flex mt-4">
                    <button class="bg-blue-400 hover:bg-blue-500 py-3  text-white w-full rounded-sm text-lg font-bold">Verify</button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Verification',
    data() {
        return {
            verification_code: '',
            errorMsg: ''
        }
    },
    methods: {
        onVerify() {
            const data = {
                token: this.verification_code,
                via: "email"
            }
           
            this.$store.dispatch('verify', data)
            .then((response) => {
                console.log(response);
                this.$router.push('/login')
            },
            (error) => {
                this.errorMsg = error.response.data.message
            });
        },
    }
     
}
</script>

<style>

</style>