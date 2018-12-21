<template>
  <div>
    <router-view :key="$route.fullPath"/>
    ClassroomList
    <ul>
      <li>MMI
        <ul>
          <li>
            <router-link :to="{ name: 'classroomSingle', params: { className: 'dut-mmi', group: 1 } }">
              1
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'classroomSingle', params: { className: 'dut-mmi', group: 2 } }">
              2
            </router-link>            
          </li>
        </ul>
      </li>
      <li>DUT Informatique
        <ul>
          <li>
            <router-link :to="{ name: 'classroomSingle', params: { className: 'dut-info', group: 1 } }">
              1
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'classroomSingle', params: { className: 'dut-info', group: 2 } }">
              2
            </router-link>            
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
