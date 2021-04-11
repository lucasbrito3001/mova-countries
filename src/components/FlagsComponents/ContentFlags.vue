<template>
  <v-row>
      <v-col v-for="(flag,index) in propsFilteredFlags" :key="index"
        cols="12" md="4" sm="6" xs="12"
      >
        <img :src="flag" :alt="flag">
      </v-col>
  </v-row>
</template>

<script>
export default {
    props: {
        propsFilteredFlags: {
            type: Array
        }
    }
}
</script>

<style>

</style>