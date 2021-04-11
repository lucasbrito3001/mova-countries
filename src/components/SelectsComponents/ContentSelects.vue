<template>
  <v-row
    class="my-10"
    align="center"
  >
    <v-col cols="12" xs="12" sm="6" md="4"
      class="mr-auto"
    >
      <v-select id="firstSelect"
        hide-selected
        filled
        label="Filtrar por"
        :items="propsTypeFilterSelect"
        item-value="value"
        item-text="selectedFilter"
        return-object
        :aria-selected="propsTypeFilterSelect[0].selectedFilter"
        v-model="firstReturnedObject"
        @input="prepareRequest"
      >
      </v-select>
    </v-col>
    <v-col cols="12" xs="12" sm="6" md="4">
      <v-select
        v-show="showSelect"
        :label="firstReturnedObject.selectedFilter"
        filled
        :items="secondTypeFilterSelect"
        item-value="value"
        item-text="text"
        v-model="secondReturnedObject"
        return-object
      >
      </v-select>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="4"
      class="ml-auto"
    >
      <v-btn @click="sendRequestGET" id="button-search"
      class="ml-auto"
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
    }
  },

  data() {
    return {
      firstReturnedObject: {},
      secondReturnedObject: {},
      secondTypeFilterSelect: [],
      objectWithObjectsPrepared: {region: [],capital: [],languages: [],callingCodes: [], countries: []},
      showSelect: false,
      filteredFlags: []
    }
  },

  async created() {
    try {

      const res = await this.axios.get('https://restcountries.eu/rest/v2/all?fields=region;languages;capital;callingCodes;name')
      const data = await res.data
      
      this.prepareSelects(data)

    } catch (error) {

      console.error(error)

    }
  },

  methods: {
    async sendRequestGET() {
      this.filteredFlags = []
      try {
        const res = await this.axios.get(`https://restcountries.eu/rest/v2/${this.firstReturnedObject.value}/${this.secondReturnedObject.value}`)
        
        const data = res.data

        data.forEach((element) => this.filteredFlags.push(element.flag))
        console.log(this.filteredFlags)

        this.$emit('filtered-flags',this.filteredFlags)
  
        const lengthFlagsArray = this.filteredFlags.length
        console.log(lengthFlagsArray)
        lengthFlagsArray < 12
        ? this.$emit('length-flags-array', 1)
        : this.$emit('length-flags-array',lengthFlagsArray / 12)

      } catch (error) {
        console.error(error)
      }
    },

    prepareSelects(responseData) {
      responseData.forEach((element) => {
        if(
          this.objectWithObjectsPrepared.region.find((region) => region.text === element.region) == undefined
        ){
          this.objectWithObjectsPrepared.region.push(
            {
              text: element.region,
              value: element.region.toLowerCase()
            }
          )
        }

        this.objectWithObjectsPrepared.capital.push(
          {text: element.capital, value: element.capital.toLowerCase()}
        )

        this.objectWithObjectsPrepared.countries.push(
          {text: element.name, value: element.name.toLowerCase()}
        )

        element.callingCodes.forEach((subCode) => {
          if(this.objectWithObjectsPrepared.callingCodes.indexOf(subCode) == -1){
            this.objectWithObjectsPrepared.callingCodes.push(
              {text: '+' + subCode, value: subCode}
            )
          }
        })

        element.languages.forEach((subLang) => {
          if(
            this.objectWithObjectsPrepared.languages.find((name) => name.text === subLang.name) == undefined
          ){
            this.objectWithObjectsPrepared.languages.push({text: subLang.name, value: subLang.iso639_1})
          }
        })

        
      })
      console.log(this.objectWithObjectsPrepared)
    },

    prepareRequest() {
      this.showSelect = true
      switch(this.firstReturnedObject.value) {
        case 'region':
          this.secondTypeFilterSelect = this.objectWithObjectsPrepared.region
          break

        case 'capital':
          this.secondTypeFilterSelect = this.objectWithObjectsPrepared.capital
          break

        case 'lang':
          this.secondTypeFilterSelect = this.objectWithObjectsPrepared.languages
          break

        case 'name':
          this.secondTypeFilterSelect = this.objectWithObjectsPrepared.countries
          break

        case 'callingcode':
          this.secondTypeFilterSelect = this.objectWithObjectsPrepared.callingCodes.sort()
          break
      }
    }
  }
}
</script>

<style lang='scss' src='./styleSelects.scss' scoped/>