<template>
    <main>
        <section>
            <Selects :props-type-filter-select='sendTypeFilterSelect' @filtered-flags='prepareFlagsArray'/>
        </section>

        <section>
            <Flags :props-filtered-flags='sendFlags'/>
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

            sendFlags: []
        }
    }
}

        Selects</script>

<style lang='scss' src='./styleScreen1.scss' scoped/>