<template>
    <div class="accordion">
      <button
        @click="toggle"
        :class="{
          'bg-blue-500': isOpen, // Change this to your desired active color
          'bg-white': !isOpen
        }"
        class="flex items-center justify-between w-full px-4 py-2 text-left transition-colors duration-300 ease-in-out hover:bg-gray-200"
      >
        <span>{{ title }}</span>
        <PlusButton :isPlus="!isOpen" @toggle="toggle" />
      </button>
      <TransitionFade>
        <div v-show="isOpen" class="px-4 py-2 bg-gray-100">
          <slot></slot>
        </div>
      </TransitionFade>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import PlusButton from './PlusButton.vue'; // Adjust the path as needed
  
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });
  
  const isOpen = ref(false);
  
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  </script>
  
  <style scoped>
  /* Assuming TransitionFade is a defined transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style>
  