<template>
  <v-row class="my-10">
      <v-col cols="12" xs="12">
          <h2 id="title-borders">Países vizinhos</h2>
      </v-col>
      <v-col v-for="borderCountries in propsBordersFlags" :key="borderCountries.nameReq" cols="12" md="4" xs="12" @click="emitClickCountry(borderCountries.nameReq)">
          <div>
              <v-img :src="borderCountries.flag"/>
              <!-- src flags -->
          </div>
      </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'Borders',

    props: {
        propsBordersInfos: {
            type: Array
        },

        propsBordersFlags: {
            type: Array
        }
    },

    methods: {
        emitClickCountry(country) {
            this.$emit('click-border',country.toLowerCase())
        }
    }
}
</script>

<style scoped>
    #title-borders {
        font-size: 18px;
        font-weight: normal;
    }
</style>