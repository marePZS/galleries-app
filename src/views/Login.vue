<template>
  <div class="login">
        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input v-model="credentials.email" type="email" required class="form-control" id="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="credentials.password" type="password" required class="form-control" id="password">
            </div>
            <p v-if="loginFailed">Login Failed</p>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: 'register',
    data() {
        return {
        loginFailed: false,
        credentials: {
          email: '',
          password: '',
        }
        };
    },

    methods: {
        async onSubmit() {
        this.loginFailed = false;
        try {
            await this.login(this.credentials);
            this.$router.push('/');
        } catch {
            this.loginFailed = true;
        }
        },
        ...mapActions('auth', ['login']),
    },
};
</script>

<style>

</style>