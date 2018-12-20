<template>
  <div>
    <ul>
      <li>
        <router-link :to="{ name: 'dashboard' }">
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'classroomList' }">
          Classroom list
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
