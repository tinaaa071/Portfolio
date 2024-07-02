<template>
  <div class="sticky top-0 z-20 bg-blue-200 shadow-md">
    <div class="container relative flex flex-col items-center justify-between flex-shrink-0 w-full max-w-5xl px-2 py-2 mx-auto text-white sm:flex-row sm:px-6">
        <!-- Logo -->
        <div class="flex items-center justify-between w-full px-3 sm:w-fit ">
          <RouterLink to="/" class="w-40 aspect-auto">
            <img src="@/assets/logo.png" alt="" class="">
  
          </RouterLink>
  
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
          class="sm:flex sm:flex-col sm:justify-between"
          :class="showMenu ? '' : 'hidden'">
            <ul class="flex flex-col sm:flex-row">
              <li v-for="item in menuItems" :key="item.to">
                <RouterLink :to="item.to" 
                class="flex items-center px-3 py-3 transition-colors duration-200 lg:text-lg sm:px-5 whitespace-nowrap"
                :class="isActive(item.to) ? 'text-white' : 'text-blue-500  hover:text-white'">
                {{ $t(item.text) }}
                </RouterLink>
              </li>
            </ul>
          </div>
          <LanguageSwitcher />
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
        { to: '/list_1', text: '表二' },
        { to: '/list_2', text: '表三' },
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
  
  