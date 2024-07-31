<template>
  <div class="sticky z-20 pt-6 px-28 ">
    <div class="bg-blue-100 rounded-full shadow-md bg-blur-lg">
      <div class="container relative flex flex-col items-center justify-between w-full px-4 py-3.5 mx-auto text-white sm:flex-row sm:px-6">
          <!-- Logo -->
          <div class="flex items-center justify-between w-full ">
            <div class="inline-flex items-center space-x-3.5 group">
              <RouterLink to="/" class="inline-flex items-center justify-center transition-colors duration-300 rounded-full h-11 w-11 bg-stone-900 group-hover:bg-Secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" fill="none" viewBox="0 0 23 22" class="transition-colors duration-300 stroke-white group-hover:stroke-stone-900">
                  <path stroke-width="2" d="M1 4.778s2.907-2.573 6.51-2.573c6.076 0 11.343 2.4 13.279 1.432s.538-3.334-1.396-2.438c-3.645 1.689-4.688 7.173-7.2 12.198-2.513 5.026-6.168 7.31-8.452 6.853-1.161-.232-1.719-1.413-1.028-2.284 1.63-2.055 4.468 1.504 8.094 2.76 1.783.617 3.566 0 3.566 0"/>
                </svg>
              </RouterLink>
              <h1 class="text-xl font-medium cursor-default">
                Tina Chen
              </h1>
            </div>


    
            <!-- 手機選單按鈕 -->
            <button type="button" 
            class="w-8 h-8 ml-auto sm:hidden"
            @click="toggleMenu">
              <heroicons-outline-menu class="w-7 h-7" />
            </button>
          </div>
    
          <div class="flex items-center justify-center gap-10">
            <!-- 主要選單 -->
            <div 
            class="sm:flex sm:flex-col sm:justify-between whitespace-nowrap"
            :class="showMenu ? '' : 'hidden'">
              <ul class="flex flex-col text-sm font-semibold sm:flex-row">
                <li v-for="item in menuItems" :key="item.to">
                  <RouterLink :to="item.to" 
                  class="flex items-center px-4 py-2.5 transition-colors duration-200 sm:px-5 whitespace-nowrap"
                  :class="isActive(item.to) ? 'text-black' : 'text-blue-500  hover:text-white'">
                  {{ $t(item.text) }}
                  </RouterLink>
                </li>
                <li>
                  <button type="button" class="px-4 py-2.5">
                    下載履歷
                  </button>
                </li>
              </ul>
            </div>
            <LanguageSwitcher />
          </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { computed, ref } from "vue";
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute()
      const router = useRouter()
  
      const showMenu = ref(false)
      const toggleMenu = () => showMenu.value = !showMenu.value
  
      // 「主選單按鈕」功能
      const menuItems = [
        { to: '/', text: 'menu.item1' },
        { to: '/list_1', text: 'menu.item2' },
        { to: '/list_2', text: 'menu.item3' },
        { to: '/list_2', text: 'menu.item4' }
      ]

      const activeItem = computed(() => 
        [...menuItems]
          .reverse()
          .find(item => route.path.startsWith(item.to))
      )
  
      const isActive = to => to === activeItem.value.to
  
      return { showMenu, toggleMenu, menuItems, isActive }
    }
  }
  </script>
  
  