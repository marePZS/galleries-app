<template>
  <div class="register">
        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="firstName" class="form-label">First name</label>
                <input v-model="userData.first_name" type="text" class="form-control" id="firstName" aria-describedby="firstName">
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last name</label>
                <input v-model="userData.last_name" type="text" class="form-control" id="lastName" aria-describedby="lastName">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input v-model="userData.email" type="email" class="form-control" id="email" aria-describedby="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="userData.password" type="password" class="form-control" id="password">
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm password</label>
                <input v-model="userData.confirm_password" type="password" class="form-control" id="confirmPassword">
            </div>
            <div class="mb-3 form-check">
                <input v-model="userData.terms" type="checkbox" class="mx-auto" id="checkbox">
                <label class="form-check-label" for="checkbox">Accept Terms and Conditions</label>
            </div>
            <p v-if="registerFailed">Registration Failed, check credentials</p>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    name : 'register',
    data(){
        return{
            registerFail: false,
            userData:{
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                confirm_password: '',
                terms: false,
            }
        }
    },

    methods: {
    async onSubmit() {
        this.registerFailed = false;
        try {
            await this.register(this.userData);
            this.$router.push('/');
        } catch {
            this.registerFailed = true;
        }
    },

    ...mapActions('auth', ['register']),

  },
}
</script>

<style>

</style>