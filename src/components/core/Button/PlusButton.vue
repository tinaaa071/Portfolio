<template>
  <button
    @click="toggleIcon"
    :class="{
      'bg-Secondary': !isPlus,
      'bg-Tertiary': isPlus,
      'w-10 h-10 rounded-full flex items-center justify-center': true,
      'transition-colors duration-300 ease-in-out': true
    }"
  >
    <div
      class="relative inline-flex items-center justify-center w-6 h-6"
    >
      <div
        class="absolute w-4 h-1 transition-transform duration-300 ease-in-out bg-white"
        :class="{ 'rotate-90': isPlus }"
      ></div>
      <div
        class="absolute w-4 h-1 transition-transform duration-300 ease-in-out bg-white"
        :class="{ 'rotate-0': isPlus }"
      ></div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    isPlus: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['toggle'],
  methods: {
    toggleIcon() {
      this.$emit('toggle');
    },
  },
};
</script>
