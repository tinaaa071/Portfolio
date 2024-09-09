<template>
    <div class="flex justify-center gap-4 py-3 text-xs font-bold">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectCategory(category)"
        :class="[
          'px-4 py-3 cursor-pointer bg-stone-50  rounded-full transition-colors duration-300 border border-stone-300 text-stone-900',
          currentCategory === category ? 'bg-stone-900 text-white' : 'hover:bg-stone-200'
        ]"
      >
        {{ category }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      categories: {
        type: Array,
        required: true,
      },
      currentCategory: {
        type: String,
        required: true,
      },
    },
    emits: ['category-changed'],
    methods: {
      selectCategory(category) {
        this.$emit('category-changed', category);
      },
    },
  };
  </script>