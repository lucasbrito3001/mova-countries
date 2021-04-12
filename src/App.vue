<template>
  <v-app>
    <v-app-bar
      app
      light
      class="pr-10 pl-10"
      height="100"
    >
      <div class="d-flex align-center">
        <v-img
          alt="MOVA Logo"
          class="shrink mr-2"
          contain
          src="./assets/MOVA.svg"
          transition="scale-transition"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn id="button-return"
        outlined
        tile
        href="/"
      >
        <v-icon>mdi-keyboard-return</v-icon>
        <span class="mr font-weight-regular ml-5" v-show="showTextAppBar">Voltar</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    showTextAppBar: true,
  }),

  mounted() {
    window.addEventListener('load', () => {
      screen.availWidth < 768 ? this.showTextAppBar = false : this.showTextAppBar = true
      window.addEventListener('resize', () => {
        screen.availWidth < 768 ? this.showTextAppBar = false : this.showTextAppBar = true
      })
    })
  }
};
</script>

<style scoped lang='scss'>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap');
  @import './assets/scss/breakpoints.scss';

  $purple-default: #6D2080;

  * {
    font-family: 'Montserrat', sans-serif;
  }

  #button-return {
    color: $purple-default;
    @include breakpoint(smallOnly) {
      border: none;
    }
  }

</style>
