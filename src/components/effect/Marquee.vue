<template>
    <div class="w-full overflow-hidden bg-white rounded-full dark:bg-transparent dark:border dark:border-stone-50">
        <div class="flex items-center px-1 py-2 whitespace-nowrap marquee-content w-[200%] text-xl font-semibold text-stone-900 dark:text-white">
            <span class="inline-block">
                {{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}
            </span>
            <span class="inline-block">
                {{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}
            </span>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: "Be a better designer. ",
      };
    },
  };
  </script>
  
  <style>
  .marquee-content {
    animation: marquee-slide 20s linear infinite;
    animation-timing-function: linear; /* Ensure smooth continuous scrolling */
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
  