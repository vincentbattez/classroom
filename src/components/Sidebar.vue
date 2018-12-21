<template>
  <nav class="sidebar">
    <ul>
      <li class="logo">
        <router-link :to="{ name: 'dashboard' }" class="link">
          <BaseIcon name="logo" title="Logo"/>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'dashboard' }" class="link active">
          <BaseIcon name="dashboard" title="Dashboard"/>
          <span>Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'dashboard' }" class="link">
          <BaseIcon name="classroom" title="Classroom"/>
          <span>Classe 2<sup>nd</sup>3</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
