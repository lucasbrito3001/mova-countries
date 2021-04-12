<template>
  <v-row>
      <v-col v-for="(renderFlag,index) in propsFilteredFlags" :key="index"
        cols="12" xs="12" sm="6" md="4"
      >
        <div class="d-flex align-center">
            <v-img
            alt="flags-images"
            class="shrink flags-size"
            contain
            :src="renderFlag.flag"
            transition="scale-transition"
            @click="emitFlagClicked(renderFlag.nameReq)"
            />
      </div>
      </v-col>
      <v-col cols="12">
          <v-pagination
          class="mr-auto ml-auto"
          total-visible="6"
          :length="propsPaginationLength"
          >
          </v-pagination>
      </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'ContentFlags',
    
    props: {
        propsFilteredFlags: {
            type: Array
        },

        propsPaginationLength: {
            type: Number
        }
    },

    data() {
        return {
            paginationInfos: '',
        }
    },

    methods: {
        emitFlagClicked(nameReq) {
            this.$emit('click-flags',nameReq)
        }
    }
}
</script>

<style lang='scss' src='./contentFlags.scss'/>