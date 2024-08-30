<template>
    <TransitionFade name="fade">
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-lg"
        @click="handleOverlayClick"
      >
        <div
          class="relative p-6 bg-white rounded-lg shadow-lg"
          @click.stop
        >
          <button @click="$emit('close')" class="absolute text-gray-500 top-3 right-3 hover:text-gray-800">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <slot></slot>
        </div>
      </div>
    </TransitionFade>
  </template>
  
<script setup>
const props = defineProps({
show: Boolean
});

const emit = defineEmits(['close']);

const handleOverlayClick = () => {
emit('close');
};
</script>
  