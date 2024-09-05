<template>
  <div class="overflow-hidden drop-shadow rounded-2xl xl:rounded-3xl dark:border dark:border-white">
    <!-- Title -->
    <button
      @click="toggle"
      :class="{
        'bg-Quaternary text-Primary dark:bg-stone-800 dark:border-b dark:border-white dark:text-white': isOpen,
        'bg-stone-50 text-stone-600 dark:bg-transparent dark:text-stone-300 ': !isOpen
      }"
      class="flex items-center justify-between w-full p-4 overflow-hidden text-left transition-colors duration-300 ease-in-out sm:p-6 hover:bg-Quaternary "
    >
      <div class="flex items-center gap-4 font-medium ">
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
    showAvatar: {
      type: Boolean,
      default: false,
    },
    avatarSrc: {
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
