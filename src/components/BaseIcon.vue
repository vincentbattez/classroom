<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink"/>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',

  props: {
    name: {
      type: String,
      required: true
    },

    title: {
      type: String,
      default: null
    }
  },

  computed: {
    iconPath() {
      return require(`@/assets/icons/${this.name}.svg`).default.url
    },

    className() {
      return 'icon icon--' + this.name
    }
  }
}
</script>

<style>
.icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
