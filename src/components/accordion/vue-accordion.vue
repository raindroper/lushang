<template>
  <div :class="accordionClass" :style="divStyles">
    <ul>
      <partial-accordion
        v-for="(item,index) in items"
        :item="item"
        :key="index"
        :active="currentIndex === index"
        :styles="styles"
        @partialClick="itemClick(index)"
      >

      </partial-accordion>
    </ul>
  </div>
</template>
<script>
import partialAccordion from './vue-accordion-partial.vue'

export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array
    },
    styles: {
      type: Object,
      default: function () {
        return {}
      }
    },
    accordionClass: {
      type: String,
      default: 'vue-accordion'
    },
    current: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  computed: {
    divStyles () {
      return this.styles && this.styles.div ? this.styles.div : {}
    }
  },
  methods: {
    itemClick (index) {
      console.log(index)
      this.currentIndex = index
    }
  },
  watch: {
    current: {
      immediate: true,
      handler: function (val) {
        this.currentIndex = this.current
      }
    }
  },
  components: {
    partialAccordion
  },
  mounted () {
    // const timer = setInterval(() => {
    //   this.currentIndex++
    //   if (this.currentIndex >= this.items.length) {
    //     this.currentIndex = 0
    //   }
    // }, 30000000000000)
    //
    // this.$once('hook:beforeDestroy', () => {
    //   clearInterval(timer)
    // })
  }
}
</script>
<style>
  .vue-accordion {
    width: 100%;
    overflow: hidden;
    height: 200px;
    max-width: 900px;
  }

  .vue-accordion ul {
    width: 100%;
    height: 100%;
    display: table;
    table-layout: fixed;
    margin: 0;
    padding: 0;
  }
</style>
