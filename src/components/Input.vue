<template>
    <div>
      <label class="block font-medium leading-6 text-gray-900 md:text-lg">
        {{ label }}
      </label>
      <div class="mt-2">
        <input 
        v-if="showInput"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" :placeholder="placeholder" />
        <div v-if="showCheckButton" class="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5">
            <CheckButton v-for="(buttonLabel, index) in buttonLabels"
            :key="index"
            :label="buttonLabel"
            />
        </div>
        <div v-if="showDateInput">
            <Date />
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        placeholder: String,
        buttonLabels: Array,
        showInput: {
            type: Boolean,
            default: true
        },
        showCheckButton: Boolean,
        showDateInput: Boolean,
    }
}
</script>