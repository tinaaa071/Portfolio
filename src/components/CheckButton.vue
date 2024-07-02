<template>
    <div class="relative flex items-center ">
          <div class="flex items-center h-6">
            <!-- button -->
            <input 
            type="checkbox" v-bind="$attrs"
            id="comments" aria-describedby="comments-description" name="comments" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600 " />
          </div>
          <!-- label -->
          <div class="ml-3 leading-6 md:text-lg">
            <label for="comments" class="flex font-medium text-gray-900 md:text-lg whitespace-nowrap">{{ label }}</label>
          </div>
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
    label: {
      type: String,
      required: true,
    },
    showInput: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const checked = ref(false);

    const handleCheckboxChange = () => {
      emit('checkbox-change', { label: props.label, checked: checked.value });
    };

    watch(() => {
    });

    return {
      checked,
      handleCheckboxChange,
    };
  },
};
</script>