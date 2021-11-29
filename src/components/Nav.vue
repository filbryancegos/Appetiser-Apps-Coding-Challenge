<template>
  <div class="bg-green-500 px-10 py-4 text-white">
    <div>
      <ul class="space-x-4">
        <div class="flex w-full space-x-4 justify-between">
          <div class="flex w-full space-x-4 justify-end">
            <li v-if="!isLogin" class="space-x-4 text-base">
              <router-link :to="{ name: 'Login' }">Login</router-link>
            </li>

            <li v-if="!isLogin" class="space-x-4 text-base">
              <router-link :to="{ name: 'Register' }">Register</router-link>
            </li>

            <li v-if="isLogin" class="space-x-4 text-base flex items-center space-x-4">
              <div>Welcome<span class="ml-1 capitalize">{{isUsername}}</span>!</div>
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
  data() {
    return {
      isLoggedIn: ''
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogedin
    },
    isUsername() {
      return this.$store.getters.isUserName
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(
        () => {
          localStorage.removeItem('token')
          this.$router.push("/login");
        },
        (error) => {
          console.log(error.response.data.message, "error");
        }
      );
    },
  },
  created() {
    if (!this.isLogin) {
      this.$router.push("/login").catch(() => {});
    }     
  },
};
</script>

<style>
</style>