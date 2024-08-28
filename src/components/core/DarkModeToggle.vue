<template>
  <button
    @click="toggleDarkMode"
    class="p-2 transition-all duration-300 ease-in-out rounded-full text-stone-900 bg-Tertiary dark:bg-stone-900 dark:text-stone-100 hover:bg-stone-300 dark:hover:bg-stone-700"
  >
    <WiDaySunny v-if="!isDarkMode" class="text-2xl" />
    <WiNightClear v-else class="text-2xl" />
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  // Initialize based on system preference
  isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  }
});
</script>
