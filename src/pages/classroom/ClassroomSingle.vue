<template>
  <div>
    ClassroomSingle : {{ className }} {{ group }}
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: true
    },
    group: {
      type: [Number, String],
      required: true
    }
  }
}
</script>
