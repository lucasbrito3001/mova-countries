<template>
  <v-row
    class="my-10"
    cols='12'
    align="center"
  >
    <v-col lg='3'
      class="mr-auto"
    >
      <v-select id="firstSelect"
        filled
        label="Filtrar por"
        :items="propsTypeFilterSelect"
        :item-value="propsValueSelect"
        v-model="secondSelectLabel"
      >
      </v-select>
    </v-col>
    <v-col lg='3'>
      <v-select
        filled
        :label="secondSelectLabel"
      >
      </v-select>
    </v-col>
    <v-col lg='3'
      class="ml-auto"
    >
      <v-btn @click="sendRequestGET" id="button-search"
      >
      <span class="mr font-weight-regular">Pesquisar</span>
      </v-btn>
    </v-col>
  </v-row>
  
</template>

<script>

export default {
  name: 'SelectsComponent',

  props: {
    propsTypeFilterSelect: {
      type: Array
    },
    propsValueSelect: {
      type: Array
    }
  },

  data() {
    return {
      secondSelectLabel: ''
    }
  },

  methods: {
    async sendRequestGET() {
      try {
        
        const req = await this.axios.get(`https://restcountries.eu/rest/v2/${selectValue}/`)
        const res = await req.json()
        console.log(res)

      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style lang='scss' src='./styleSelects.scss' scoped/>