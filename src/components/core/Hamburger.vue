<template>
  <div 
    class="px-4 py-3 border-2 rounded-full xl:hidden"
    :class="isOpen ? 'border-white dark:border-stone-900' : 'border-stone-900 dark:border-white'"
  >
    <div 
      @click="toggleMenu" 
      :class="{'open': isOpen}" 
      class="relative flex flex-col justify-between w-6 h-4 cursor-pointer"
    >
      <!-- Top Bar -->
      <span 
        class="absolute left-0 block w-full h-0.5 transition-all duration-300 ease-[ease] origin-center" 
        :class="{
          'transform rotate-45 top-1/2 w-full bg-white dark:bg-stone-900': isOpen,
          'top-0 bg-stone-900 dark:bg-white': !isOpen
        }"
      ></span>
      
      <!-- Bottom Bar -->
      <span 
        class="absolute left-0 block w-full h-0.5 transition-all duration-300 ease-[ease] origin-center"
        :class="{
          'transform -rotate-45 top-1/2 w-full bg-white dark:bg-stone-900': isOpen,
          'top-4 w-[70%] bg-stone-900 dark:bg-white': !isOpen
        }"
      ></span>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    toggleMenu: {
      type: Function,
      required: true
    }
  }
}
</script>
  