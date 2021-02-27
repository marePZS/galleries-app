<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <p class="navbar-brand"></p>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" >
                <router-link class="nav-link active" to="/">All Galleries</router-link>
                </li>
                <li class="nav-item">
                <router-link v-if="isAuthenticated" class="nav-link active" to="/mygalleries">My Galleries</router-link>
                </li>
                <li class="nav-item">
                <router-link v-if="isAuthenticated" class="nav-link active" to="/create">Create Gallery</router-link>
                </li>
                <li>
                <router-link v-if="!isAuthenticated" class="nav-link active" to="/register">Register</router-link>
                </li>
                <li class="nav-item">
                <router-link v-if="!isAuthenticated" class="nav-link active" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                <button id="logout" v-if="isAuthenticated" class="nav-link active" @click="logout">Logout</button>
                </li>
            </ul>
            <!-- <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link v-if="isAuthenticated" class="nav-link active" to="/user">{{activeUser.first_name}} {{activeUser.last_name}}</router-link>
              </li>
            </ul> -->
            <form class="d-flex">
                <input @input="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button  class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex';


export default {
  name: 'navbar',
  computed: {
    ...mapGetters('auth',['isAuthenticated','activeUser']),

  },
  methods: {
    search(evt) {
      this.setSearchTerm(evt.target.value);
      this.getAllGalleries();
    },
    ...mapActions('galleries', ['getAllGalleries']),
    ...mapMutations('galleries', ['setSearchTerm']),
    ...mapActions('auth', ['logout', 'getActiveUser']),
  },


};
</script>

<style>
#logout{
  border: none;
  background-color: transparent;
  color: none;
}


</style>