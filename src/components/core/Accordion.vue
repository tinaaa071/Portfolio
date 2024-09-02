<template>
    <div class="overflow-hidden accordion rounded-2xl sm:rounded-3xl">
      <button
        @click="toggle"
        :class="{
          'bg-Quaternary text-Primary shadow': isOpen,
          'bg-white text-stone-900': !isOpen
        }"
        class="flex items-center justify-between w-full px-4 py-2 text-left transition-colors duration-300 ease-in-out hover:bg-Quaternary"
      >
        <div class="flex items-center gap-4">
          <img
          v-if="showAvatar"
          :src="avatarSrc"
          alt="Avatar"
          class="object-cover w-10 h-10 rounded-full"
          />
          <span>{{ title }}</span>
        </div>
        <PlusButton :isPlus="!isOpen" @toggle="toggle" />
      </button>
      <TransitionFade>
        <div v-show="isOpen" class="px-4 py-2 bg-gray-100">
          <slot></slot>
        </div>
      </TransitionFade>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import PlusButton from './PlusButton.vue'; // Adjust the path as needed
  
  export default {
    components: {
      PlusButton,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      showAvatar: {
        type: Boolean,
        default: false,
      },
      avatarSrc: {
        type: String,
        default: '', // Default can be set to a placeholder or left blank
      },
    },
    setup(props) {
      const isOpen = ref(false);
  
      const toggle = () => {
        isOpen.value = !isOpen.value;
      };
  
      return {
        isOpen,
        toggle,
      };
    },
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
  