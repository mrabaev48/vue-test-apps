<template>

</template>

<script lang="ts">
import vue from 'vue'
export class Child extends Vue{
  name: "Child"

  inject: ['name']

  mounted() {
    console.log('injected name: ', name)
  }
}
</script>

<style scoped>

</style>