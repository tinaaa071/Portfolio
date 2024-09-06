<template>
    <div class="w-full overflow-hidden dark:bg-transparent dark:border dark:border-stone-50">
      <div class="flex items-center p-1 sm:py-2 whitespace-nowrap marquee-content w-[200%] gap-8">
        <ToolIcon 
          v-for="(iconSrc, index) in iconSources" 
          :key="index" 
          :iconSrc="iconSrc"
        />
        <ToolIcon 
          v-for="(iconSrc, index) in iconSources" 
          :key="index" 
          :iconSrc="iconSrc"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ToolIcon from './ToolIcon.vue';
  
  export default {
    components: {
      ToolIcon
    },
    data() {
      return {
        iconSources: [
          'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-1024.png',
          'https://w7.pngwing.com/pngs/854/555/png-transparent-vue-js-hd-logo-thumbnail.png',
          'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png',

        ]
      };
    }
  };
  </script>
  
  <style>
  .marquee-content {
    animation: marquee-slide 20s linear infinite;
    animation-timing-function: linear;
  }
  
  @keyframes marquee-slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  