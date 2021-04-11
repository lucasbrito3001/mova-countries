<template>
    <main>
        <section>
            <Selects :props-type-filter-select='sendTypeFilterSelect' @filtered-flags='prepareFlagsArray' @length-flags-array="(element) => paginationLength = element"/>
        </section>

        <section>
            <Flags :props-filtered-flags='sendFlags' v-if="showFlags" :props-pagination-length='paginationLength'/>
        </section>
    </main>
</template>

<script>

import Selects from '../../components/SelectsComponents/ContentSelects'
import Flags from '../../components/FlagsComponents/ContentFlags'

export default {
    name: 'FirstScreen',

    components: {
        Selects,
        Flags
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

            showFlags: false
        }
    },

    methods: {
        prepareFlagsArray(flags) {
            this.showFlags = false
            this.sendFlags = flags
            this.showFlags = true
        }
    }
}
</script>

<style lang='scss' src='./styleScreen1.scss' scoped/>