<template>
  <v-row class="my-10">
      <v-col cols="12" md="5" sm="12">
          <div>
              <v-img :src="propsCountryInfos[0].flag" :alt="propsCountryInfos[0].name"/>
          </div>
      </v-col>
      <v-col cols="12" md="5" sm="12">
          <p>Nome: {{propsCountryInfos[0].name}}</p>
          <p>Capital: {{propsCountryInfos[0].capital}}</p>
          <p>Região: <a href="#" @click="emitClickRegion(propsCountryInfos[0].region)">{{propsCountryInfos[0].region}}</a></p>
          <p>Sub-região: {{propsCountryInfos[0].subregion}}</p>
          <p>População: {{propsCountryInfos[0].population | filterNumber}}</p>
          <p>Línguas: <span id='span-languages' v-for='language in propsCountryInfos[0].languages' :key="language.iso639_1">{{language.nativeName}}</span></p>
      </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'ClickedCountry',

    props: {
        propsCountryInfos: {
            type: Array
        }
    },

    filters: {
        filterNumber(el) {
            return el.toLocaleString('pt-BR')
        }
    },

    methods: {
        emitClickRegion(region) {
            this.$emit('click-region',region.toLowerCase())
            console.log(region.toLowerCase())
        }
    }
}
</script>

<style scoped>
    #span-languages {
        margin-left: 5px;
    }

    #span-languages:nth-child(n+1)::after {
        content: '-';
    }

    #span-languages:last-child::after {
        content: '';
    }
</style>