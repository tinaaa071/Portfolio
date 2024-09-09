<template>
  <div class="grid grid-cols-3 mt-2 md:grid-cols-4 lg:grid-cols-6">
    <CheckButton v-for="item in label" :key="item.value" :label="item.label" checkboxType="radio" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const label = ref([
      { value: '1', label: '總是' },
      { value: '2', label: '常常' },
      { value: '3', label: '有時候' },
      { value: '4', label: '不常' },
      { value: '5', label: '從未或幾乎從未' },
    ]);

    return {
      label,
    };
  },
};
</script>