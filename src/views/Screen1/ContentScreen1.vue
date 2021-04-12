<template>
    <main>
        <div id="screen1" v-if="showScreen1">
            <section>
                <Selects :props-type-filter-select='sendTypeFilterSelect' @filtered-flags='prepareFlagsArray' @length-flags-array="(element) => paginationLength = element"/>
            </section>
            <section>
                <Flags :props-filtered-flags='sendFlags' v-if="showFlags" :props-pagination-length='paginationLength' @click-flags="clickOnFlag"/>
            </section>
        </div>
        <div id="screen2" v-if="showScreen2">
            <Screen2 :props-clicked-country='clickedCountry' :props-borders-flags='bordersFlags' @click-region='requestRegion' @click-border="requestGET"/>
        </div>
    </main>
</template>

<script>

import Selects from '../../components/SelectsComponents/ContentSelects'
import Flags from '../../components/FlagsComponents/ContentFlags'
import Screen2 from '../../views/Screen2/ContentScreen2'

export default {
    name: 'FirstScreen',

    components: {
        Selects,
        Flags,
        Screen2
    },

    data() {
        return {
            sendTypeFilterSelect: [
                {selectedFilter: 'Região', value: 'region'},
                {selectedFilter: 'Capital', value: 'capital'},
                {selectedFilter: 'Língua', value: 'lang'},
                {selectedFilter: 'Pais', value: 'name'},
                {selectedFilter: 'Código de Ligação', value: 'callingcode'}
            ],

            sendFlags: [],

            paginationLength: '',

            showFlags: false,

            showScreen1: true,

            showScreen2: false,

            clickedCountry: [],

            bordersFlags: []
        }
    },

    methods: {
        prepareFlagsArray(flags) {
            this.showFlags = false
            this.sendFlags = flags
            this.showFlags = true
        },

        clickOnFlag(clicked) {
            this.showScreen1 = false
            this.showScreen2 = true

            this.requestGET(clicked)
        },

        async requestGET(countryToShow) {
            this.bordersFlags = []
            try {
                const res = await this.axios.get(`https://restcountries.eu/rest/v2/name/${countryToShow}`)
                const data = await res.data

                const borders = await data[0].borders

                borders.forEach(async (border) => {
                    const bordersInfos = await this.axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${border.toLowerCase()}`)
                    
                    const dataBorders = await bordersInfos.data

                    this.bordersFlags.push({flag: dataBorders[0].flag, nameReq: dataBorders[0].name})
                })

                this.clickedCountry = await data
            } catch (error) {
                console.error(error)
            }
        
        },

        async requestRegion(region) {
            let filteredFlags = []
            const res = await this.axios.get(`https://restcountries.eu/rest/v2/region/${region}`)

            const dataRegionClicked = await res.data
            console.log(dataRegionClicked)
            
            this.showScreen1 = true
            this.showScreen2 = false

            dataRegionClicked.forEach((element) => filteredFlags.push({flag: element.flag, nameReq: element.name.toLowerCase()}))

            this.sendFlags = filteredFlags

            const lengthFlagsArrayRegionClicked = this.filteredFlags.length
            lengthFlagsArrayRegionClicked < 12
            ? this.paginationLength = 1
            : this.paginationLength = lengthFlagsArrayRegionClicked / 12
        }
    }
}
</script>

<style lang='scss' src='./styleScreen1.scss' scoped/>