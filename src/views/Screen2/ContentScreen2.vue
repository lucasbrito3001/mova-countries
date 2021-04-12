<template>
    <div>
        <main>
            <Clicked :props-country-infos='propsClickedCountry' @click-region='showRegionScreen1'/>
        </main>
        <aside>
            <Borders :props-borders-infos='propsClickedCountry' :props-borders-flags='propsBordersFlags' @click-border="emitBorderName"/>
        </aside>
    </div>
</template>

<script>

import Clicked from '../../components/ClickedCountry'
import Borders from '../../components/Borders'

export default {
    name: 'SecondScreen',

    props: {
        propsClickedCountry: {
            type: Array
        },

        propsBordersFlags: {
            type: Array
        }
    },

    components: {
        Clicked,
        Borders
    },

    methods: {
        showRegionScreen1(region) {
            this.$emit('click-region',region)
            console.log(region)
        },

        emitBorderName(borderName) {
            this.$emit('click-border',borderName)
        }
    }
}
</script>

<style lang='scss' src='./styleScreen2.scss' scoped/>