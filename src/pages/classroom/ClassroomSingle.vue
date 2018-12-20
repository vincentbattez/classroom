<template>
  <div>
    ClassroomSingle : {{ className }} {{ group }}
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String
    },
    group: {
      type: Number
    }
  }
}
</script>

<style scoped>
</style>
