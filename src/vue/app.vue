<template>
  <h2>{{ message }}</h2>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'app',
  setup() {
    const message = ref('hello vue');
    return {message};
  }
});
</script>

<style lang="scss" scoped>

</style>
