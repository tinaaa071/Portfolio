<template>
    <div class="flex items-center p-4 bg-blue-100 md:px-8 rounded-xl">
        <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="w-4 h-4 mr-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600" />
        <p>
            我已明確了解
            <span 
            class="text-blue-400 cursor-pointer hover:text-blue-500"
            @click="showModal = true">
                《富盈診所資料保護政策及顧客之個人資料保護權益》
            </span>
            事項，並且同意遵守所有規定及提供所需之個人資料
        </p>
    </div>

    <Modal v-model="showModal" />
</template>

<script>
import { ref } from "vue";
export default {
    setup(props) {
      const showModal = ref(false)
      
      return { showModal }
    }
};
</script>