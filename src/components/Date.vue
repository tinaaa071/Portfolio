<template>
  <div class="flex space-x-4 ">
    <div class="flex items-center" v-if="showYear">
        <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mr-1" />
        年
    </div>
    <div class="flex items-center" v-if="showMonth">
        <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mr-1" />
        月
    </div>
    <div class="flex items-center" v-if="showDate">
        <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mr-1" />
        日
    </div>
  </div>
</template>

<script>
export default {
    props: {
        showYear: {
            type: Boolean,
            default: true
        },
        showMonth: {
            type: Boolean,
            default: true
        },
        showDate: {
            type: Boolean,
            default: true
        }
    }
};
</script>