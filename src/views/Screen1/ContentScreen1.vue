<template>
    <div>
        <Selects :props-type-filter-select='sendTypeFilterSelect'/>
    </div>
</template>

<script>

import Selects from '../../components/SelectsComponents/ContentSelects'

export default {
    name: 'FirstScreen',

    components: {
        Selects
    },

    data() {
        return {
            sendTypeFilterSelect: [
                'Região',
                'Capital',
                'Língua',
                'Pais',
                'Código de Ligação'
            ],
            
            sendValueSelect: [
                'region',
                'capital',
                'lang',
                'name',
                'callingcode'
            ]
        }
    }
}

        Selects</script>

<style lang='scss' src='./styleScreen1.scss' scoped/>