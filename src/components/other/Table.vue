<template>
    <div class="flex-col overflow-x-auto rounded-2xl lg:flex lg:flex-row">
      <table class="w-full">
          <thead class="bg-blue-100 ">
              <tr class="border-b border-gray-200">
                  <!-- 標題 -->
                  <th 
                  v-for="item in table" 
                  :key="item.key"
                  class="px-5 py-3 font-medium tracking-wider text-center text-gray-900 whitespace-nowrap"
                  >
                      {{ item.label }}
                  </th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="item in column" :key="item">
                <td class="p-5 text-center bg-blue-100">
                    {{ item.title }}
                </td>
                <td 
                v-for="i in 6" :key="i" 
                class="p-5 text-center bg-gray-100"
                >
                  <div class="ml-4">
                    <input
                      id=""
                      name=""
                      type="radio"
                      class="w-4 h-4 mr-3 text-blue-600 border-gray-300 rounded-full focus:ring-blue-600 "
                    />
                  </div>
                </td>
            </tr>
          </tbody>
      </table>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const table = ref([
      { key: '0', label: '' },
      { key: '1', label: '不痛 0' },
      { key: '2', label: '微痛 1' },
      { key: '3', label: '中等疼痛 2' },
      { key: '4', label: '劇痛 3' },
      { key: '5', label: '非常劇痛 4' },
      { key: '6', label: '極度劇痛 5' },
    ]);

    const column = ref([
      { id: 1, title: '頸'},
      { id: 2, title: '左肩'},
      { id: 3, title: '右肩'},
      { id: 4, title: '左手肘/左前臂'},
      { id: 5, title: '右手肘/右前臂'},
      { id: 6, title: '左手/左手腕'},
      { id: 7, title: '右手/右手腕'},
      { id: 8, title: '上背'},
      { id: 9, title: '下背'},
      { id: 10, title: '左臀/左大腿'},
      { id: 11, title: '右臀/右大腿'},
      { id: 12, title: '左膝'},
      { id: 13, title: '右膝'},
      { id: 14, title: '左腳/左腳踝'},
      { id: 15, title: '右腳/右腳踝'},
    ]);
    
    return {
      table,
      column,
    };
  },
};
</script>