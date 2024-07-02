<template>
    <div class="flex items-center h-6">
      <label v-for="(option, index) in options" :key="index" class="flex items-center md:text-lg whitespace-nowrap">
        <input
          type="radio"
          :name="groupName"
          :value="option"
          v-model="selectedOption"
          class="w-4 h-4 mr-3 text-blue-600 border-gray-300 rounded-full focus:ring-blue-600 "
        />
        {{ option }}
      </label>
      <div class="ml-3">
        <input 
        v-if="showInput"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6" :placeholder="placeholder" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  
  export default {
    props: {
      options: {
        type: Array,
        required: true,
      },
      value: {
        type: String,
      },
      showInput: {
        type: Boolean,
        default: false,
    },
    },
    setup(props, { emit }) {
    const selectedOption = ref(props.value);

    watch(selectedOption, (newValue) => {
      // Emit an event to notify the parent component that the selected option has changed
      emit('update:modelValue', newValue);
    });
      return {
        selectedOption,
      };
    },
  };
  </script>