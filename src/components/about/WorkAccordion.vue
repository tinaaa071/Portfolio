<template>
    <div class="overflow-hidden border shadow rounded-2xl sm:rounded-3xl border-B4">
      <!-- Title -->
      <button
        @click="toggle"
        :class="{
          'bg-B4 text-B1 dark:bg-stone-800 dark:border-b dark:border-white dark:text-white': isOpen,
          'bg-stone-50 text-stone-600 dark:bg-transparent dark:text-stone-300 ': !isOpen
        }"
        class="flex items-center justify-between w-full px-4 py-3 overflow-hidden text-left transition-colors duration-300 ease-in-out sm:px-5 sm:py-4 hover:bg-B4 "
      >
        <div class="flex gap-4 font-medium ">
          <!-- Logo -->
          <img
            v-if="showLogo"
            :src="logoSrc"
            alt="logo"
            class="object-cover w-16 h-16 border rounded-2xl border-stone-100"
          />
          <!-- Company -->
          <div class="flex flex-col gap-2 font-normal">
            <!-- Title -->
            <p>
                {{ title }}
            </p>
            <!-- Info -->
            <p>
                {{ info }}
            </p>
            <!-- Desc -->
            <p>
                {{ desc }}
            </p>
          </div>
        </div>
        <PlusButton :isPlus="!isOpen" @toggle="toggle" />
      </button>
      <!-- Content -->
      <TransitionFade>
        <div v-show="isOpen" class="p-6 bg-white dark:bg-transparent">
          <slot></slot>
        </div>
      </TransitionFade>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      info: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      showLogo: {
        type: Boolean,
        default: false,
      },
      logoSrc: {
        type: String,
        default: '',
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
  